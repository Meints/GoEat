import React = require("react");
import { View, Text, Image, ActivityIndicator } from "react-native";
import { Restaurante } from "../../redux/modules/listagem/types";
import Container from "@/src/components/container/Container";
import { useAppSelector } from "@/src/redux/store";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./styles";
import { useEffect, useState } from "react";

function Rating({ rating }: { rating: Number }) {
  const stars: String[] = ["", "", "", "", ""];
  return (
    <View style={style.rating}>
      <SubTitle text={"Nota"} />
      {stars.map((star, index) =>
        rating.valueOf() < index ? (
          <MaterialIcons name="star" size={18} color={"grey"} />
        ) : (
          <MaterialIcons name="star" size={18} color={"yellow"} />
        )
      )}
    </View>
  );
}

function SubTitle({ text }: { text: String }) {
  return <Text style={style.subTitle}>{`${text}: `}</Text>;
}

export default function Detalhes() {
  const { restaurante } = useAppSelector((state) => state.detalhes);

  const [image, setImage] = useState("");

  useEffect(() => {
    console.log(restaurante.image);

    if (restaurante.image != "") {
      console.log(restaurante.image);
      setImage(restaurante.image.toString());
    }
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.title}>{`${restaurante.name}`}</Text>

      <View style={style.imageContainer}>
        <View style={style.imageContainer}>
          <Image
            source={{ uri: image }}
            style={style.imagem}
            src={image}
            resizeMode="contain"
          />

          <View style={style.addressContainer}>
            <Rating rating={restaurante.rating} />
            <Text>
              <SubTitle text={"Endereco"} />
              {`${restaurante.address}`}
            </Text>
          </View>

          <Text style={style.tables}>
            <SubTitle text={"N. Mesas"} />
            {`${restaurante.availableTables}`}
          </Text>
          <Text style={style.description}>
            <SubTitle text={"Sobre"} />
            {`${restaurante.description}`}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={style.button}
        onPress={() => {
          console.log("teste");
        }}
      >
        <Text style={{ color: "white" }}>{"Reservar"}</Text>
      </TouchableOpacity>
    </View>
  );
}
