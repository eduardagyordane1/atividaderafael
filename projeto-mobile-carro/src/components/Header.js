import React from 'react';
  import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
  import { colors, spacing, fonts } from '../styles/theme';

  const Header = ({ title, onMenuPress }) => {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          {onMenuPress && (
            <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
              <Text style={styles.menuIcon}>☰</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
          <View style={styles.placeholder} />
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: colors.primary,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: spacing.medium,
    },
    title: { color: colors.white, fontSize: fonts.large, fontWeight: 'bold' },
    menuButton: { padding: spacing.small },
    menuIcon: { color: colors.white, fontSize: 24 },
    placeholder: { width: 40 },
  });

  export default Header;
  