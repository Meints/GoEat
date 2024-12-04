import React = require("react");
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "@/src/global/themes";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "@/src/modules";
import Container from "@/src/components/container/Container";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState, FormEvent } from "react";
import { auth } from "@/FirebaseConfig";
export default function Login() {
  const navigation = useNavigation<propsStack>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  React.useEffect(() => {
    if (user) {
      navigation.navigate("ListagemRestaurantes");
    }
  }, [user, navigation]);
  React.useEffect(() => {
    if (error) {
      alert("E-mail ou senha incorretos. Tente novamente.");
    }
  }, [error]);
  return (
    <Container>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Login</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>Endereço de E-mail</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <Text style={style.titleInput}>Senha</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
      </View>
      <View style={style.boxBotton}>
        <TouchableOpacity
          style={style.button}
          onPress={() => signInWithEmailAndPassword(email, password)}
        >
          <Text style={style.textButton}>ENTRAR</Text>
        </TouchableOpacity>
        <Text style={style.textBottom}>
          Não tem conta?{" "}
          <Text
            style={[style.textBottom, { color: themas.colors.primary }]}
            onPress={() => navigation.navigate("Cadastro")}
          >
            Crie Agora
          </Text>
        </Text>
      </View>
    </Container>
  );
}
