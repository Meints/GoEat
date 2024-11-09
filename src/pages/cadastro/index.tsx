import React from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";  
import { style } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "@/src/global/themes";
import Logo from "../../assets/logo/logo.png";
import { propsStack } from "@/src/modules";
import Container from "@/src/components/container/Container";

export default function Cadastro() {
  const navigation = useNavigation<propsStack>(); 

  return (
    <Container>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Cadastre-se</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>Endereço de E-mail</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="email" size={18} color={themas.colors.gray} />
        </View>
        <Text style={style.titleInput}>Nome</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="email" size={18} color={themas.colors.gray} />
        </View>

        <Text style={style.titleInput}>Senha</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="remove-red-eye" size={18} color={themas.colors.gray} />
        </View>
        <Text style={style.titleInput}>Confirmar Senha</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="remove-red-eye" size={18} color={themas.colors.gray} />
        </View>
      </View>
      <View style={style.boxBotton}>
        <TouchableOpacity style={style.button} onPress={() => navigation.navigate('AlterarPerfil')}>
          <Text style={style.textButton}>CADASTRAR</Text>
        </TouchableOpacity>
        <Text style={style.textBottom}>
          Já possui uma senha?{' '}
            <Text style={[style.textBottom, { color: themas.colors.primary }]} onPress={() => navigation.navigate('Login')}>Va para tela de login</Text>
        </Text>
      </View>
    </Container>
  );
}
