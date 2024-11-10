export type Restaurante = {
    name: String;
    rating: Number;
    address: String;
    image: String;
    cnpj: String;
    description: String;
    availableTables: Number;
};

export type ListagemState = {
    restaurantes: Restaurante[]
}