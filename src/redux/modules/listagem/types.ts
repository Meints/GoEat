export type Restaurante = {
  name: String;
  rating: Number;
  address: String;
  image: String;
  cnpj: String;
  description: String;
  availableTables: Number;
  horario: string;
  restaurante_id: number;
};

export type ListagemState = {
  restaurantes: Restaurante[];
};
