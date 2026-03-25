import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Header from '../../components/Header';
import scrollStyles from '../../styles/scrollStyles';
import { flatListData } from '../../utils/data';

const FlatListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={scrollStyles.item}>
      <Text style={scrollStyles.itemTitle}>{item.title}</Text>
      <Text style={scrollStyles.itemDescription}>{item.description}</Text>
    </View>
  );

  return (
    <ScreenContainer>
      <Header title="FlatList" onMenuPress={() => navigation.openDrawer()} />
      <FlatList
        data={flatListData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={scrollStyles.listContainer}
        ListHeaderComponent={() => (
          <View style={scrollStyles.scrollBox}>
            <Text style={scrollStyles.scrollTitle}>O que é FlatList?</Text>
            <Text style={scrollStyles.scrollText}>
              O FlatList é um componente otimizado para renderizar listas longas e dinâmicas de dados.
            </Text>
            <Text style={scrollStyles.scrollTitle}>Vantagens:</Text>
            <Text style={scrollStyles.scrollText}>
              Ele renderiza apenas os itens que estão visíveis na tela, o que melhora significativamente a performance e o uso de memória.
            </Text>
          </View>
        )}
      />
    </ScreenContainer>
  );
};

export default FlatListScreen;
