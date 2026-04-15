import React from 'react';
  import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
  import { colors } from '../styles/theme';

  const ScreenContainer = ({ children, style, useSafeArea = true }) => {
    const Container = useSafeArea ? SafeAreaView : View;
    return (
      <Container style={[styles.container, style]}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
        {children}
      </Container>
    );
  };

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
  });

  export default ScreenContainer;
  