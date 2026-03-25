import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import modalStyles from '../../styles/modalStyles';

const ModalFadeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenContainer>
      <Header title="Modal Fade" onMenuPress={() => navigation.openDrawer()} />
      <View style={modalStyles.container}>
        <View style={modalStyles.descriptionBox}>
          <Text style={modalStyles.descriptionTitle}>Comportamento: Fade</Text>
          <Text style={modalStyles.descriptionText}>
            Este modal utiliza um efeito de transparência (fade) para aparecer gradualmente na tela.
          </Text>
        </View>

        <CustomButton 
          title="Abrir Modal Fade" 
          onPress={() => setModalVisible(true)} 
          type="secondary"
        />

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={modalStyles.modalOverlay}>
            <View style={modalStyles.modalContent}>
              <Text style={modalStyles.modalTitle}>Modal Fade Ativado!</Text>
              <Text style={modalStyles.modalText}>
                Este modal utilizou a propriedade animationType="fade".
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

export default ModalFadeScreen;
