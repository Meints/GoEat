import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, View, Text } from "react-native";
import CardRestaurantes from "@/src/components/cardRestaurantes/CardRestaurantes";
import { db } from "@/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function ListagemRestaurantes() {
  const [restaurantes, setRestaurantes] = useState<any[]>([]);
  const navigation = useNavigation();

  const fetchRestaurantes = async () => {
    try {
      const restaurantesRef = collection(db, "Restaurante");
      const querySnapshot = await getDocs(restaurantesRef);
      const restaurantesList: any[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        restaurantesList.push({
          name: data.Nome,
          address: data.Endereco,
          image: data.imagem,
          rating: data.nota,
          horario: data.horario_funcionamento,
          availableTables: data.numero_mesas,
          description: data.sobre,
          restaurante_id: data.restaurante_id,
        });
      });

      setRestaurantes(restaurantesList);
    } catch (error) {
      console.error("Erro ao buscar restaurantes: ", error);
    }
  };

  useEffect(() => {
    fetchRestaurantes();
  }, []);

  return (
    <View>
      {restaurantes.length === 0 ? (
        <Text>Carregando Restaurantes...</Text>
      ) : (
        <FlatList
          data={restaurantes}
          renderItem={({ item }) => <CardRestaurantes restaurante={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}
