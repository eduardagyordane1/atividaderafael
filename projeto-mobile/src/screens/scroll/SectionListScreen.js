import React from 'react';
import { View, Text, SectionList } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Header from '../../components/Header';
import scrollStyles from '../../styles/scrollStyles';
import { sectionListData } from '../../utils/data';

const SectionListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={scrollStyles.item}>
      <Text style={scrollStyles.itemTitle}>{item.title}</Text>
      <Text style={scrollStyles.itemDescription}>{item.description}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={scrollStyles.sectionHeader}>
      <Text style={scrollStyles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <ScreenContainer>
      <Header title="SectionList" onMenuPress={() => navigation.openDrawer()} />
      <SectionList
        sections={sectionListData}
        keyExtractor={(item, index) => item.id + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={scrollStyles.listContainer}
        stickySectionHeadersEnabled={true}
        ListHeaderComponent={() => (
          <View style={scrollStyles.scrollBox}>
            <Text style={scrollStyles.scrollTitle}>O que é SectionList?</Text>
            <Text style={scrollStyles.scrollText}>
              O SectionList é um componente que renderiza listas agrupadas por seções, com cabeçalhos personalizados para cada uma.
            </Text>
            <Text style={scrollStyles.scrollTitle}>Quando usar?</Text>
            <Text style={scrollStyles.scrollText}>
              Ideal para organizar dados que possuem categorias claras, como listas de contatos ou cardápios.
            </Text>
          </View>
        )}
      />
    </ScreenContainer>
  );
};

export default SectionListScreen;
