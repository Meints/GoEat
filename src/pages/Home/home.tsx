import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import ListagemRestaurantes from '../ListagemRestaurantes';
import Perfil from '../Perfil';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'restaurantes', title: 'Restaurantes', icon: 'format-list-bulleted' },
    { key: 'perfil', title: 'Perfil', icon: 'person' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    restaurantes: ListagemRestaurantes,
    perfil: Perfil,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;
