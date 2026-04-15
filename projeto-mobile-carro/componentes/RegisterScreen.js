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
  import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
  import { auth } from '../firebaseConfig';
  import { colors, spacing, fonts } from '../src/styles/theme';

  const RegisterScreen = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [carregando, setCarregando] = useState(false);

    const realizarCadastro = async () => {
      if (!nome.trim() || !email.trim() || !senha.trim() || !confirmarSenha.trim()) {
        Alert.alert('Atenção', 'Preencha todos os campos.');
        return;
      }
      if (senha !== confirmarSenha) {
        Alert.alert('Atenção', 'As senhas não conferem.');
        return;
      }
      if (senha.length < 6) {
        Alert.alert('Atenção', 'A senha deve ter pelo menos 6 caracteres.');
        return;
      }
      setCarregando(true);
      try {
        const credencial = await createUserWithEmailAndPassword(auth, email.trim(), senha);
        await updateProfile(credencial.user, { displayName: nome.trim() });
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      } catch (erro) {
        let mensagem = 'Erro ao realizar cadastro.';
        if (erro.code === 'auth/email-already-in-use') {
          mensagem = 'Este e-mail já está em uso.';
        } else if (erro.code === 'auth/invalid-email') {
          mensagem = 'E-mail inválido.';
        } else if (erro.code === 'auth/weak-password') {
          mensagem = 'Senha muito fraca.';
        }
        Alert.alert('Erro', mensagem);
      } finally {
        setCarregando(false);
      }
    };

    return (
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.titulo}>Criar Conta</Text>
          <Text style={styles.subtitulo}>Preencha seus dados para se cadastrar</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            placeholderTextColor={colors.textLight}
            value={nome}
            onChangeText={setNome}
            autoCapitalize="words"
          />

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor={colors.textLight}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha (mínimo 6 caracteres)"
            placeholderTextColor={colors.textLight}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            placeholderTextColor={colors.textLight}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
          />

          <TouchableOpacity
            style={[styles.botao, carregando && styles.botaoDesabilitado]}
            onPress={realizarCadastro}
            disabled={carregando}
          >
            <Text style={styles.botaoTexto}>
              {carregando ? 'Cadastrando...' : 'Cadastrar'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkBotao}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.linkTexto}>
              Já tem uma conta? <Text style={styles.linkDestaque}>Faça login</Text>
            </Text>
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
      justifyContent: 'center',
    },
    titulo: {
      fontSize: fonts.xlarge,
      fontWeight: 'bold',
      color: colors.primary,
      textAlign: 'center',
      marginBottom: spacing.small,
    },
    subtitulo: {
      fontSize: fonts.medium,
      color: colors.textLight,
      textAlign: 'center',
      marginBottom: spacing.xlarge,
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
      backgroundColor: colors.secondary,
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
    linkBotao: { marginTop: spacing.large, alignItems: 'center' },
    linkTexto: { fontSize: fonts.medium, color: colors.textLight },
    linkDestaque: { color: colors.primary, fontWeight: 'bold' },
  });

  export default RegisterScreen;
  