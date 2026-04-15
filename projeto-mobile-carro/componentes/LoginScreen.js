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
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../firebaseConfig';
  import { colors, spacing, fonts } from '../src/styles/theme';

  const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);

    const realizarLogin = async () => {
      if (!email.trim() || !senha.trim()) {
        Alert.alert('Atenção', 'Preencha o e-mail e a senha.');
        return;
      }
      setCarregando(true);
      try {
        await signInWithEmailAndPassword(auth, email.trim(), senha);
      } catch (erro) {
        let mensagem = 'Erro ao realizar login.';
        if (erro.code === 'auth/user-not-found' || erro.code === 'auth/wrong-password' || erro.code === 'auth/invalid-credential') {
          mensagem = 'E-mail ou senha inválidos.';
        } else if (erro.code === 'auth/invalid-email') {
          mensagem = 'E-mail inválido.';
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
          <Text style={styles.titulo}>Sistema de Aluguel</Text>
          <Text style={styles.subtitulo}>Faça login para continuar</Text>

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
            placeholder="Senha"
            placeholderTextColor={colors.textLight}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TouchableOpacity
            style={[styles.botao, carregando && styles.botaoDesabilitado]}
            onPress={realizarLogin}
            disabled={carregando}
          >
            <Text style={styles.botaoTexto}>
              {carregando ? 'Entrando...' : 'Entrar'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkBotao}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={styles.linkTexto}>
              Não tem uma conta? <Text style={styles.linkDestaque}>Cadastre-se</Text>
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
    linkBotao: { marginTop: spacing.large, alignItems: 'center' },
    linkTexto: { fontSize: fonts.medium, color: colors.textLight },
    linkDestaque: { color: colors.primary, fontWeight: 'bold' },
  });

  export default LoginScreen;
  