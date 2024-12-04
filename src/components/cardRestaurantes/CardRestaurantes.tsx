import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Restaurante } from "../../redux/modules/listagem/types";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "@/src/modules";
import { useAppDispatch } from "@/src/redux/store";
import { detalhesActions } from "@/src/redux/modules/detalhes/slices";

const CardRestaurantes = ({ restaurante }: { restaurante: Restaurante }) => {
  const { name, address, image, rating, horario } = restaurante;

  const dispatch = useAppDispatch();
  const navigation = useNavigation<propsStack>();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        dispatch(detalhesActions.receiveRestaurante(restaurante));
        navigation.navigate("Detalhes");
      }}
    >
      <Image source={{ uri: image }} style={styles.imagem} />
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{name}</Text>
        <View style={styles.enderecoContainer}>
          <MaterialIcons name="location-on" size={18} color="#444" />
          <Text style={styles.endereco}>{address}</Text>
        </View>
        <Text style={styles.nota}>Nota: {`${rating}`}⭐</Text>
        <Text style={styles.nota}>Horario de funcionamento :{horario} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardRestaurantes;
