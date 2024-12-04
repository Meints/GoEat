import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { auth, db } from "@/FirebaseConfig";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { style } from "./styles";
import { themas } from "@/src/global/themes";

export default function Perfil() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [newName, setNewName] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setName(userData.name);
          setEmail(userData.email);
          setNewName(userData.name);
          setNewEmail(userData.email);
        }
      }
    };
    fetchUserData();
  }, [user]);

  const handleUpdateProfile = async () => {
    if (user) {
      try {
        // Verifica se o novo email já existe
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", newEmail));
        const querySnapshot = await getDocs(q);

        // Se o email já existe e não pertence ao usuário atual, impede a alteração
        if (!querySnapshot.empty && newEmail !== email) {
          alert("Este endereço de email já está em uso.");
          return;
        }

        // Atualiza os dados do usuário
        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef, {
          name: newName,
          email: newEmail,
        });

        setName(newName);
        setEmail(newEmail);
        alert("Dados atualizados com sucesso!");
      } catch (error) {
        console.error("Erro ao atualizar dados: ", error);
        alert("Ocorreu um erro ao atualizar os dados.");
      }
    }
  };

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Text style={style.text}>OLÁ {name}!</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>ALTERAR ENDEREÇO DE EMAIL</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={newEmail}
            onChangeText={(text) => setNewEmail(text)}
          />
          <MaterialIcons name="email" size={30} color={themas.colors.gray} />
        </View>
        <Text style={style.titleInput}>ALTERAR NOME</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={newName}
            onChangeText={(text) => setNewName(text)}
          />
          <MaterialIcons name="person" size={30} color={themas.colors.gray} />
        </View>
      </View>
      <View style={style.boxBotton}>
        <TouchableOpacity style={style.button} onPress={handleUpdateProfile}>
          <Text style={style.textButton}>ALTERAR DADOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
