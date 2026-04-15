import React, { useEffect, useState } from 'react';
  import { ActivityIndicator, View, StyleSheet } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import { onAuthStateChanged } from 'firebase/auth';
  import { auth } from '../firebaseConfig';
  import { colors } from '../src/styles/theme';

  import LoginScreen from './LoginScreen';
  import RegisterScreen from './RegisterScreen';
  import FormScreen from './FormScreen';
  import ListScreen from './ListScreen';

  const Stack = createStackNavigator();

  const AppNavigator = () => {
    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
      const cancelarObservador = onAuthStateChanged(auth, (user) => {
        setUsuario(user);
        setCarregando(false);
      });
      return cancelarObservador;
    }, []);

    if (carregando) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      );
    }

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: colors.white,
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          {usuario ? (
            <>
              <Stack.Screen
                name="Lista"
                component={ListScreen}
                options={{ title: 'Aluguéis Cadastrados' }}
              />
              <Stack.Screen
                name="Formulario"
                component={FormScreen}
                options={{ title: 'Novo Aluguel' }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'Entrar' }}
              />
              <Stack.Screen
                name="Cadastro"
                component={RegisterScreen}
                options={{ title: 'Criar Conta' }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  const styles = StyleSheet.create({
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
  });

  export default AppNavigator;
  