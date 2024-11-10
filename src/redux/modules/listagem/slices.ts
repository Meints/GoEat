import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurante, ListagemState } from "./types";

const initialState: ListagemState = {
  restaurantes: [
    {
      name: "Restaurante da Ana",
      address: "Rua Jacuí n 123",
      image:
        "https://img.freepik.com/fotos-gratis/um-prato-de-comida-com-feijao-e-arroz_188544-8344.jpg?t=st=1731190327~exp=1731193927~hmac=0c73981402712d215618d82484806a49404eb38da9a9908c5e4f47832f380cc8&w=1380",
      rating: 5,
      cnpj: "1",
      availableTables: 0,
      description: "Localizado na Pampulha, o Xapuri é famoso por sua autêntica culinária mineira servida em um ambiente rústico e acolhedor. Os pratos são tradicionais e bem servidos, como o leitão à pururuca, o frango com quiabo e o feijão tropeiro. Com espaços ao ar livre e um clima de fazenda, é um lugar ideal para quem deseja experimentar a verdadeira comida mineira em um ambiente descontraído.",
    },
    {
      name: "Restaurante do João",
      address: "Avenida Paulista, 2000",
      image:
        "https://img.freepik.com/fotos-gratis/cogumelos-salteados-com-abobora-e-pimentao_2829-10315.jpg?t=st=1731190511~exp=1731194111~hmac=1812a841586a51bc412daf8c3188281d24dd8a6cefd471e2d89d13e1a34011ad&w=1380",
      rating: 0,
      cnpj: "2",
      availableTables: 0,
      description: "Em Lourdes, o Glouton, do chef Leo Paixão, é um dos restaurantes mais prestigiados de BH, com pratos de alta gastronomia que combinam técnicas francesas com ingredientes brasileiros. No menu, opções como a vieira com purê de milho e o torresmo de barriga são os favoritos. Com uma decoração sofisticada e ambiente intimista, é perfeito para jantares românticos ou celebrações especiais.",
    },
    {
      name: "Restaurante da Ana",
      address: "Rua Jacuí n 123",
      image:
        "https://img.freepik.com/fotos-gratis/um-prato-de-comida-com-feijao-e-arroz_188544-8344.jpg?t=st=1731190327~exp=1731193927~hmac=0c73981402712d215618d82484806a49404eb38da9a9908c5e4f47832f380cc8&w=1380",
      rating: 1,
      cnpj: "3",
      availableTables: 0,
      description: "Reconhecido como um dos melhores bistrôs de BH, o Taste Vin é o lugar ideal para os amantes da culinária francesa. Seu ambiente charmoso e acolhedor é o cenário para pratos clássicos como o pato confit e o famoso gratin de batata, além de uma extensa carta de vinhos. A atmosfera é elegante, ideal para um jantar sofisticado e repleto de sabor.",
    },
    {
      name: "Restaurante do João",
      address: "Avenida Paulista, 2000",
      image:
        "https://img.freepik.com/fotos-gratis/cogumelos-salteados-com-abobora-e-pimentao_2829-10315.jpg?t=st=1731190511~exp=1731194111~hmac=1812a841586a51bc412daf8c3188281d24dd8a6cefd471e2d89d13e1a34011ad&w=1380",
      rating: 0,
      cnpj: "4",
      availableTables: 0,
      description: "Localizado no coração do bairro de Lourdes, o Dádiva é um restaurante contemporâneo com uma decoração moderna e sofisticada. O cardápio mescla influências internacionais e brasileiras, com destaque para os cortes de carnes premium e os pratos de frutos do mar. Oferece uma experiência gastronômica diferenciada, com um ambiente animado e excelente para encontros com amigos.",
    },
    {
      name: "Restaurante da Ana",
      address: "Rua Jacuí n 123",
      image:
        "https://img.freepik.com/fotos-gratis/um-prato-de-comida-com-feijao-e-arroz_188544-8344.jpg?t=st=1731190327~exp=1731193927~hmac=0c73981402712d215618d82484806a49404eb38da9a9908c5e4f47832f380cc8&w=1380",
      rating: 3,
      cnpj: "5",
      availableTables: 0,
      description: "Para um café da manhã ou brunch especial, a Casa Bonomi é um charme. Situada no bairro Funcionários, é conhecida por seus pães artesanais e confeitaria inspirada na tradição europeia. Entre os destaques, estão o croissant e a focaccia feitos na casa, além de opções de pratos como o croque madame e a quiche de espinafre. Com um ambiente aconchegante, é perfeito para um encontro tranquilo e um bom café.",
    },
    {
      name: "Restaurante do João",
      address: "Avenida Paulista, 2000",
      image:
        "https://img.freepik.com/fotos-gratis/cogumelos-salteados-com-abobora-e-pimentao_2829-10315.jpg?t=st=1731190511~exp=1731194111~hmac=1812a841586a51bc412daf8c3188281d24dd8a6cefd471e2d89d13e1a34011ad&w=1380",
      rating: 2,
      cnpj: "6",
      availableTables: 0,
      description: "Com unidades em diversos bairros de BH, o Olegário é referência para quem ama pizzas e massas. O ambiente é sofisticado e aconchegante, ideal para famílias e grupos. Suas pizzas de massa fina e crocante, com ingredientes frescos e combinações variadas, são acompanhadas por uma seleção de vinhos que complementam bem o cardápio italiano.",
    },
  ],
};

const listagemSlice = createSlice({
  name: "leadManager",
  initialState,
  reducers: {
    receiveRestaurantes: (state, action: PayloadAction<Restaurante[]>) => {
      state.restaurantes = action.payload;
    },
  },
});

export const listagemReducer = listagemSlice.reducer;
export const listagemActions = listagemSlice.actions;
