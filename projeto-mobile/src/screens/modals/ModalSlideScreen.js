import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import modalStyles from '../../styles/modalStyles';

const ModalSlideScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenContainer>
      <Header title="Modal Slide" onMenuPress={() => navigation.openDrawer()} />
      <View style={modalStyles.container}>
        <View style={modalStyles.descriptionBox}>
          <Text style={modalStyles.descriptionTitle}>Comportamento: Slide</Text>
          <Text style={modalStyles.descriptionText}>
            Este modal desliza de baixo para cima quando ativado. É um padrão comum para formulários ou opções rápidas.
          </Text>
        </View>

        <CustomButton 
          title="Abrir Modal Slide" 
          onPress={() => setModalVisible(true)} 
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={modalStyles.modalOverlay}>
            <View style={modalStyles.modalContent}>
              <Text style={modalStyles.modalTitle}>Modal Slide Ativado!</Text>
              <Text style={modalStyles.modalText}>
                Este modal utilizou a propriedade animationType="slide".
              </Text>
              <CustomButton 
                title="Fechar" 
                onPress={() => setModalVisible(false)} 
                type="error"
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScreenContainer>
  );
};

export default ModalSlideScreen;
