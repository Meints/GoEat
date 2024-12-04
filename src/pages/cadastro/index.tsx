import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "./styles";
import Logo from "../../assets/logo/logo.png";
import { propsStack } from "@/src/modules";
import Container from "@/src/components/container/Container";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db } from "@/FirebaseConfig";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { themas } from "@/src/global/themes";

export default function Cadastro() {
  const navigation = useNavigation<propsStack>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  async function getNextUserId() {
    const counterRef = doc(db, "counter", "user_id_counter");
    const counterDoc = await getDoc(counterRef);

    if (counterDoc.exists()) {
      const nextUserId = counterDoc.data().currentId + 1;
      await updateDoc(counterRef, {
        currentId: nextUserId,
      });
      return nextUserId;
    } else {
      await setDoc(counterRef, {
        currentId: 1,
      });
      return 1;
    }
  }

  async function handleSignIn() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        email,
        password
      );

      if (userCredential) {
        const userId = userCredential.user.uid;

        const nextUserId = await getNextUserId();

        await setDoc(doc(db, "users", userId), {
          name: name,
          email: email,
          createdAt: new Date(),
          User_id: nextUserId,
        });

        await setDoc(doc(db, "Historico_de_reserva", userId), {
          Historico_de_reserva: "Cadastro Inicial",
          nome: name,
          User_id: nextUserId,
          createdAt: new Date(),
          email: email,
          senha: password,
        });

        navigation.navigate("Login");
      }
    } catch (err) {
      console.error("Erro ao cadastrar usuário:", err);
    }
  }

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  return (
    <Container>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Cadastre-se</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>Nome</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <Text style={style.titleInput}>Endereço de E-mail</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <Text style={style.titleInput}>Senha</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
      </View>
      <View style={style.boxBotton}>
        <TouchableOpacity style={style.button} onPress={handleSignIn}>
          <Text style={style.textButton}>CADASTRAR</Text>
        </TouchableOpacity>
        <Text style={style.textBottom}>
          Já possui uma conta?{" "}
          <Text
            style={[style.textBottom, { color: themas.colors.primary }]}
            onPress={() => navigation.navigate("Login")}
          >
            Vá para a tela de login
          </Text>
        </Text>
      </View>
    </Container>
  );
}
