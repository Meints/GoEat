import React from "react";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "@/src/modules";
import { FlatList, View } from "react-native";
import CardRestaurantes from "@/src/components/cardRestaurantes/CardRestaurantes";
import { Restaurante } from "../../redux/modules/listagem/types";
import { useAppSelector } from "@/src/redux/store";

const DATA: Restaurante[] = [];

export default function ListagemRestaurantes() {
  const { restaurantes } = useAppSelector((state) => state.listagem);
  const navigation = useNavigation<propsStack>();

  return (
    <View>
      <FlatList
        data={restaurantes}
        renderItem={({ index, item }) => (
          <CardRestaurantes restaurante={item} />
        )}
      />
    </View>
  );
}
