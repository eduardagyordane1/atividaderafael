import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Header from '../../components/Header';
import scrollStyles from '../../styles/scrollStyles';
import { longText } from '../../utils/data';

const ScrollViewScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Header title="ScrollView" onMenuPress={() => navigation.openDrawer()} />
      <ScrollView contentContainerStyle={scrollStyles.scrollContent}>
        <View style={scrollStyles.scrollBox}>
          <Text style={scrollStyles.scrollTitle}>O que é ScrollView?</Text>
          <Text style={scrollStyles.scrollText}>
            O ScrollView é um componente de rolagem genérico que renderiza todos os seus filhos de uma vez.
          </Text>
          <Text style={scrollStyles.scrollTitle}>Quando usar?</Text>
          <Text style={scrollStyles.scrollText}>
            É ideal para telas com pouco conteúdo ou quando o conteúdo é estático e conhecido.
          </Text>
        </View>

        <View style={scrollStyles.scrollBox}>
          <Text style={scrollStyles.scrollTitle}>Exemplo de Conteúdo Longo:</Text>
          <Text style={scrollStyles.scrollText}>{longText}</Text>
          <Text style={scrollStyles.scrollText}>{longText}</Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default ScrollViewScreen;
