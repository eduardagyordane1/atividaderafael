import React, { useEffect, useState } from 'react';
  import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ActivityIndicator,
  } from 'react-native';
  import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
  import { signOut } from 'firebase/auth';
  import { db, auth } from '../firebaseConfig';
  import { colors, spacing, fonts } from '../src/styles/theme';

  const ListScreen = ({ navigation }) => {
    const [alugueis, setAlugueis] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
      const q = query(collection(db, 'alugueis'), orderBy('criadoEm', 'desc'));
      const cancelarObservador = onSnapshot(q, (snapshot) => {
        const dados = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAlugueis(dados);
        setCarregando(false);
      }, (erro) => {
        console.error(erro);
        setCarregando(false);
      });
      return cancelarObservador;
    }, []);

    const realizarLogout = () => {
      Alert.alert('Sair', 'Deseja realmente sair?', [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', style: 'destructive', onPress: () => signOut(auth) },
      ]);
    };

    const renderItem = ({ item }) => (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.nomeCarro}>{item.nomeCarro}</Text>
          <Text style={styles.valor}>
            R$ {Number(item.valorAluguel).toFixed(2).replace('.', ',')}
          </Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.infoTexto}>
            <Text style={styles.infoLabel}>Cliente: </Text>
            {item.nomeCliente}
          </Text>
          <Text style={styles.infoTexto}>
            <Text style={styles.infoLabel}>Data: </Text>
            {item.dataAluguel}
          </Text>
          {item.usuarioNome && (
            <Text style={styles.infoTexto}>
              <Text style={styles.infoLabel}>Cadastrado por: </Text>
              {item.usuarioNome}
            </Text>
          )}
        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        <View style={styles.barra}>
          <Text style={styles.bemVindo}>
            Olá, {auth.currentUser?.displayName || auth.currentUser?.email}
          </Text>
          <TouchableOpacity onPress={realizarLogout}>
            <Text style={styles.sairTexto}>Sair</Text>
          </TouchableOpacity>
        </View>

        {carregando ? (
          <View style={styles.centro}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.carregandoTexto}>Carregando aluguéis...</Text>
          </View>
        ) : alugueis.length === 0 ? (
          <View style={styles.centro}>
            <Text style={styles.vazioIcone}>🚗</Text>
            <Text style={styles.vazioTitulo}>Nenhum aluguel cadastrado</Text>
            <Text style={styles.vazioSubtitulo}>
              Toque no botão abaixo para registrar o primeiro aluguel.
            </Text>
          </View>
        ) : (
          <FlatList
            data={alugueis}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.lista}
            showsVerticalScrollIndicator={false}
          />
        )}

        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={() => navigation.navigate('Formulario')}
        >
          <Text style={styles.botaoAdicionarTexto}>+ Novo Aluguel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    barra: {
      backgroundColor: colors.white,
      paddingHorizontal: spacing.medium,
      paddingVertical: spacing.small,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    bemVindo: {
      fontSize: fonts.small,
      color: colors.textLight,
      flex: 1,
    },
    sairTexto: {
      fontSize: fonts.small,
      color: colors.error,
      fontWeight: 'bold',
    },
    lista: { padding: spacing.medium },
    card: {
      backgroundColor: colors.white,
      borderRadius: 10,
      padding: spacing.medium,
      marginBottom: spacing.medium,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      borderLeftWidth: 4,
      borderLeftColor: colors.primary,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.small,
    },
    nomeCarro: {
      fontSize: fonts.large,
      fontWeight: 'bold',
      color: colors.text,
      flex: 1,
    },
    valor: {
      fontSize: fonts.large,
      fontWeight: 'bold',
      color: colors.secondary,
    },
    cardInfo: { gap: 4 },
    infoTexto: { fontSize: fonts.small, color: colors.textLight },
    infoLabel: { fontWeight: '600', color: colors.text },
    centro: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing.large,
    },
    carregandoTexto: {
      marginTop: spacing.medium,
      color: colors.textLight,
      fontSize: fonts.medium,
    },
    vazioIcone: { fontSize: 60, marginBottom: spacing.medium },
    vazioTitulo: {
      fontSize: fonts.large,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: 'center',
      marginBottom: spacing.small,
    },
    vazioSubtitulo: {
      fontSize: fonts.medium,
      color: colors.textLight,
      textAlign: 'center',
    },
    botaoAdicionar: {
      backgroundColor: colors.primary,
      margin: spacing.medium,
      padding: spacing.medium,
      borderRadius: 10,
      alignItems: 'center',
      elevation: 3,
    },
    botaoAdicionarTexto: {
      color: colors.white,
      fontSize: fonts.medium,
      fontWeight: 'bold',
    },
  });

  export default ListScreen;
  