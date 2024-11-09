import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
      marginVertical: 10,
      marginHorizontal: 20,
      overflow: 'hidden',
    },
    imagem: {
      width: '100%',
      height: 150,
    },
    infoContainer: {
      padding: 10,
    },
    nome: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    enderecoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    endereco: {
      fontSize: 14,
      color: '#555',
      marginVertical: 4,
    },
    nota: {
      fontSize: 16,
      color: '#555',
    },
  });