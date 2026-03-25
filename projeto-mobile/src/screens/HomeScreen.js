import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Header from '../components/Header';
import homeStyles from '../styles/homeStyles';

const HomeScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Header title="Início" onMenuPress={() => navigation.openDrawer()} />
      <View style={homeStyles.container}>
        <View style={homeStyles.welcomeBox}>
          <Text style={homeStyles.icon}>📱</Text>
          <Text style={homeStyles.title}>Bem-vindo ao aplicativo!</Text>
          <Text style={homeStyles.message}>
            Utilize o menu de navegação lateral para acessar as telas de modais e as listas com rolagem.
          </Text>
          <Text style={homeStyles.message}>
            Arraste da esquerda para a direita ou clique no ícone do menu no topo para começar.
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
