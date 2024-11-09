import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

interface CardProps {
  nome: string;
  endereco: string;
  nota: number;
  imagem: string;
}

const CardRestaurantes = ({ nome, endereco, nota, imagem }:CardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{nome}</Text>
        <View style={styles.enderecoContainer}>
          <MaterialIcons name="location-on" size={18} color="#444" />
          <Text style={styles.endereco}>{endereco}</Text>
        </View>
        <Text style={styles.nota}>Nota: {nota}⭐</Text>
      </View>
    </View>
  );
};

export default CardRestaurantes;
