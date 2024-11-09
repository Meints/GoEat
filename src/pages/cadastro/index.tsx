import React from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";  
import { style } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "@/src/global/themes";
import Logo from "../../assets/logo/logo.png";
import { propsStack } from "@/src/modules";

export default function Cadastro() {
  const navigation = useNavigation<propsStack>(); 

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>CADASTRE-SE</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>ENDEREÇO DE EMAIL</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="email" size={30} color={themas.colors.gray} />
        </View>
        <Text style={style.titleInput}>NOME</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="email" size={30} color={themas.colors.gray} />
        </View>

        <Text style={style.titleInput}>SENHA</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="remove-red-eye" size={30} color={themas.colors.gray} />
        </View>
        <Text style={style.titleInput}>REPETIR SENHA</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="remove-red-eye" size={30} color={themas.colors.gray} />
        </View>
      </View>
      <View style={style.boxBotton}>
        <TouchableOpacity style={style.button} onPress={() => navigation.navigate('AlterarPerfil')}>
          <Text style={style.textButton}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.textBottom}>
        Já possui uma senha? 
        <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
          <Text style={[style.textBottom, { color: themas.colors.primary }]}>Va para tela de login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
