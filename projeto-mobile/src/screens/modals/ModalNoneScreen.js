import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import modalStyles from '../../styles/modalStyles';

const ModalNoneScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenContainer>
      <Header title="Modal None" onMenuPress={() => navigation.openDrawer()} />
      <View style={modalStyles.container}>
        <View style={modalStyles.descriptionBox}>
          <Text style={modalStyles.descriptionTitle}>Comportamento: None</Text>
          <Text style={modalStyles.descriptionText}>
            Este modal aparece instantaneamente sem qualquer animação de transição.
          </Text>
        </View>

        <CustomButton 
          title="Abrir Modal Instantâneo" 
          onPress={() => setModalVisible(true)} 
          style={{ backgroundColor: '#2f3640' }}
        />

        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={modalStyles.modalOverlay}>
            <View style={modalStyles.modalContent}>
              <Text style={modalStyles.modalTitle}>Modal Sem Animação!</Text>
              <Text style={modalStyles.modalText}>
                Este modal utilizou a propriedade animationType="none".
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

export default ModalNoneScreen;
