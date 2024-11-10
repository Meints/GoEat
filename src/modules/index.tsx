import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export type propsNavigationStack = {
  Login : undefined
  Cadastro : undefined
  AlterarPerfil : undefined
  ListagemRestaurantes : undefined
  Detalhes: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>