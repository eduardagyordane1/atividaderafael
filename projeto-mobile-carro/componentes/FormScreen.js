import React, { useState } from 'react';
  import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
  } from 'react-native';
  import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
  import { db, auth } from '../firebaseConfig';
  import { colors, spacing, fonts } from '../src/styles/theme';

  const FormScreen = ({ navigation }) => {
    const [nomeCarro, setNomeCarro] = useState('');
    const [nomeCliente, setNomeCliente] = useState('');
    const [valorAluguel, setValorAluguel] = useState('');
    const [dataAluguel, setDataAluguel] = useState('');
    const [salvando, setSalvando] = useState(false);

    const formatarData = (texto) => {
      const numeros = texto.replace(/\D/g, '');
      if (numeros.length <= 2) return numeros;
      if (numeros.length <= 4) return numeros.slice(0, 2) + '/' + numeros.slice(2);
      return numeros.slice(0, 2) + '/' + numeros.slice(2, 4) + '/' + numeros.slice(4, 8);
    };

    const salvarAluguel = async () => {
      if (!nomeCarro.trim() || !nomeCliente.trim() || !valorAluguel.trim() || !dataAluguel.trim()) {
        Alert.alert('Atenção', 'Preencha todos os campos.');
        return;
      }
      const valor = parseFloat(valorAluguel.replace(',', '.'));
      if (isNaN(valor) || valor <= 0) {
        Alert.alert('Atenção', 'Informe um valor de aluguel válido.');
        return;
      }
      setSalvando(true);
      try {
        await addDoc(collection(db, 'alugueis'), {
          nomeCarro: nomeCarro.trim(),
          nomeCliente: nomeCliente.trim(),
          valorAluguel: valor,
          dataAluguel: dataAluguel.trim(),
          usuarioId: auth.currentUser?.uid,
          usuarioNome: auth.currentUser?.displayName || auth.currentUser?.email,
          criadoEm: serverTimestamp(),
        });
        Alert.alert('Sucesso', 'Aluguel registrado com sucesso!', [
          { text: 'OK', onPress: () => navigation.navigate('Lista') },
        ]);
      } catch (erro) {
        Alert.alert('Erro', 'Não foi possível salvar o aluguel. Tente novamente.');
        console.error(erro);
      } finally {
        setSalvando(false);
      }
    };

    return (
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.titulo}>Registrar Aluguel</Text>

          <Text style={styles.label}>Nome do Carro</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Toyota Corolla 2023"
            placeholderTextColor={colors.textLight}
            value={nomeCarro}
            onChangeText={setNomeCarro}
            autoCapitalize="words"
          />

          <Text style={styles.label}>Nome do Cliente</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: João da Silva"
            placeholderTextColor={colors.textLight}
            value={nomeCliente}
            onChangeText={setNomeCliente}
            autoCapitalize="words"
          />

          <Text style={styles.label}>Valor do Aluguel (R$)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 150,00"
            placeholderTextColor={colors.textLight}
            value={valorAluguel}
            onChangeText={setValorAluguel}
            keyboardType="decimal-pad"
          />

          <Text style={styles.label}>Data do Aluguel (DD/MM/AAAA)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 15/04/2026"
            placeholderTextColor={colors.textLight}
            value={dataAluguel}
            onChangeText={(t) => setDataAluguel(formatarData(t))}
            keyboardType="numeric"
            maxLength={10}
          />

          <TouchableOpacity
            style={[styles.botao, salvando && styles.botaoDesabilitado]}
            onPress={salvarAluguel}
            disabled={salvando}
          >
            <Text style={styles.botaoTexto}>
              {salvando ? 'Salvando...' : 'Salvar Aluguel'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoCancelar}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelarTexto}>Cancelar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };

  const styles = StyleSheet.create({
    flex: { flex: 1, backgroundColor: colors.background },
    container: {
      flexGrow: 1,
      padding: spacing.large,
    },
    titulo: {
      fontSize: fonts.xlarge,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: spacing.large,
      textAlign: 'center',
    },
    label: {
      fontSize: fonts.medium,
      fontWeight: '600',
      color: colors.text,
      marginBottom: 6,
    },
    input: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 8,
      padding: spacing.medium,
      fontSize: fonts.medium,
      color: colors.text,
      marginBottom: spacing.medium,
    },
    botao: {
      backgroundColor: colors.primary,
      padding: spacing.medium,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: spacing.small,
      elevation: 2,
    },
    botaoDesabilitado: { opacity: 0.6 },
    botaoTexto: {
      color: colors.white,
      fontSize: fonts.medium,
      fontWeight: 'bold',
    },
    botaoCancelar: {
      padding: spacing.medium,
      alignItems: 'center',
      marginTop: spacing.small,
    },
    cancelarTexto: {
      color: colors.textLight,
      fontSize: fonts.medium,
    },
  });

  export default FormScreen;
  