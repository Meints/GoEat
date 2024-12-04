import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useAppSelector } from "@/src/redux/store";
import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./styles";
import { db, auth } from "@/FirebaseConfig";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

function Rating({ rating }: { rating: number }) {
  const stars: string[] = ["", "", "", "", ""];
  return (
    <View style={style.rating}>
      <SubTitle text={"Nota"} />
      {stars.map((star, index) =>
        rating.valueOf() < index ? (
          <MaterialIcons name="star" size={18} color={"grey"} key={index} />
        ) : (
          <MaterialIcons name="star" size={18} color={"yellow"} key={index} />
        )
      )}
    </View>
  );
}

function SubTitle({ text }: { text: string }) {
  return <Text style={style.subTitle}>{`${text}: `}</Text>;
}

export default function Detalhes() {
  const { restaurante } = useAppSelector((state) => state.detalhes);
  const [image, setImage] = useState("");
  const navigation = useNavigation();
  const [reservationSuccess, setReservationSuccess] = useState(false);

  useEffect(() => {
    if (restaurante.image !== "") {
      setImage(restaurante.image.toString());
    }
  }, [restaurante.image]);

  const handleReservation = async () => {
    const user = auth.currentUser;

    if (user) {
      try {
        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, {
          historico_reserva: arrayUnion(restaurante.restaurante_id),
        });

        alert(
          `Reserva no restaurante ${restaurante.name} cadastrada com sucesso!`
        );
        setReservationSuccess(true);
      } catch (error) {
        console.error("Erro ao salvar a reserva: ", error);

        alert("Erro ao realizar a reserva. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

      <Text style={style.title}>{restaurante.name}</Text>

      <View style={style.imageContainer}>
        <Image
          source={{ uri: image }}
          style={style.imagem}
          resizeMode="contain"
        />
        <View style={style.addressContainer}>
          <Rating rating={Number(restaurante.rating)} />
          <Text>
            <SubTitle text={"Endereço"} />
            {restaurante.address}
          </Text>
        </View>

        <Text style={style.tables}>
          <SubTitle text={"N. Mesas"} />
          {restaurante.availableTables.toString()}
        </Text>
        <Text style={style.description}>
          <SubTitle text={"Sobre"} />
          {restaurante.description}
        </Text>
      </View>

      <TouchableOpacity style={style.button} onPress={handleReservation}>
        <Text style={{ color: "white" }}>Reservar</Text>
      </TouchableOpacity>
    </View>
  );
}
