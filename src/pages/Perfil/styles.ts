import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";
export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boxTop: {
    height: Dimensions.get("window").height / 3,
    //backgroundColor : 'red',
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  boxMid: {
    height: Dimensions.get("window").height / 4,
    //backgroundColor : 'green',
    width: "100%",
    paddingHorizontal: 37,
  },
  boxBotton: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    alignItems: "center",
    padding: 200,
  },
  logo: {
    width: 1000,
    height: 100,
  },
  text: {
    fontWeight: "bold",
    marginTop: 40,
    fontSize: 18,
  },
  titleInput: {
    marginLeft: 5,
    color: themas.colors.gray,
    margin: 10,
  },
  boxInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    backgroundColor: themas.colors.ligthGray,
    borderColor: themas.colors.ligthGray,
  },
  input: {
    height: "100%",
    width: "90%",
    borderRadius: 40,
    backgroundColor: themas.colors.ligthGray,
    borderBlockColor: themas.colors.ligthGray,
  },
  button: {
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
  textButton: {
    fontSize: 16,
    color: "#FFFF",
    fontWeight: "bold",
  },
  textBottom: {
    fontSize: 16,
    color: themas.colors.gray,
  },
});
