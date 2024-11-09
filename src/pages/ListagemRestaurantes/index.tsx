import React from "react";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "@/src/modules";
import { View } from "react-native";
import CardRestaurantes from "@/src/components/cardRestaurantes/CardRestaurantes";


export default function ListagemRestaurantes() {
    const navigation = useNavigation<propsStack>(); 

    return (
        <View>
            <CardRestaurantes 
                nome="Restaurante da Ana" 
                nota={5}
                endereco="Rua Jacuí n 123" 
                imagem="https://img.freepik.com/fotos-gratis/um-prato-de-comida-com-feijao-e-arroz_188544-8344.jpg?t=st=1731190327~exp=1731193927~hmac=0c73981402712d215618d82484806a49404eb38da9a9908c5e4f47832f380cc8&w=1380" 
            />
            <CardRestaurantes 
                nome="Restaurante do João" 
                nota={4} 
                endereco="Avenida Paulista, 2000" 
                imagem="https://img.freepik.com/fotos-gratis/cogumelos-salteados-com-abobora-e-pimentao_2829-10315.jpg?t=st=1731190511~exp=1731194111~hmac=1812a841586a51bc412daf8c3188281d24dd8a6cefd471e2d89d13e1a34011ad&w=1380" 
            />

            <CardRestaurantes 
                nome="Cantinho da Maria" 
                nota={4.5} 
                endereco="Rua dos Três Irmãos, 45" 
                imagem="https://img.freepik.com/fotos-gratis/um-prato-de-comida-com-um-prato-de-comida-com-molho-vermelho-e-molho-amarelo_188544-8340.jpg?t=st=1731190538~exp=1731194138~hmac=0f0886edf9db1cfe518880ecf10337823271c4e89582213e1d402da6177333d7&w=1380" 
            />
        </View>
    );
}