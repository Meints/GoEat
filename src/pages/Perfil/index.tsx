import React from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";  
import { style } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "@/src/global/themes";
import { propsStack } from "@/src/modules";

export default function Perfil() {
  const navigation = useNavigation<propsStack>(); 

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Text style={style.text}>OLÁ (NOME)!</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.titleInput}>ALTERAR ENDEREÇO DE EMAIL</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="email" size={30} color={themas.colors.gray} />
        </View>
        <Text style={style.titleInput}>ALTERAR NOME</Text>
        <View style={style.boxInput}>
          <TextInput style={style.input} />
          <MaterialIcons name="email" size={30} color={themas.colors.gray} />
        </View>
      </View>
      <View style={style.boxBotton}>
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>ALTERAR DADOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
