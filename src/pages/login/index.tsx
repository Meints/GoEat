import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "@/src/global/themes";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "@/src/modules";
import Container from "@/src/components/container/Container";

export default function Login() {
  const navigation = useNavigation<propsStack>(); 

  return (
    <Container>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Login</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>Endereço de E-mail</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="email" size={18} color={themas.colors.gray} />
        </View>

        <Text style={style.titleInput}>Senha</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="remove-red-eye" size={18} color={themas.colors.gray} />
        </View>
      </View>
      <View style={style.boxBotton}>
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton} onPress={() => navigation.navigate('ListagemRestaurantes')}>ENTRAR</Text>
        </TouchableOpacity>
        <Text style={style.textBottom}>
          Não tem conta?{' '}
            <Text style={[style.textBottom, { color: themas.colors.primary }]} onPress={() => navigation.navigate('Cadastro')}>Crie Agora</Text>
        </Text>
      </View>
    </Container>
  );
}