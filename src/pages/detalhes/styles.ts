import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";
import { Title } from "react-native-paper";
export const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    marginRight: 5,
  },
  imageContainer: {
    width: "100%",
  },
  imagem: {
    width: "100%",
    height: "50%",
  },
  button: {
    marginBottom: 40,
    width: 280,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themas.colors.primary,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  description: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  addressContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  tables: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  subTitle: {
    fontWeight: "bold",
  },
});
