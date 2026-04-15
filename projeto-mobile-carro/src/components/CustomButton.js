import React from 'react';
  import { TouchableOpacity, Text, StyleSheet } from 'react-native';
  import { colors, spacing, fonts } from '../styles/theme';

  const CustomButton = ({ title, onPress, style, textStyle, type = 'primary' }) => {
    const getButtonStyle = () => {
      switch (type) {
        case 'secondary': return styles.secondaryButton;
        case 'error': return styles.errorButton;
        default: return styles.primaryButton;
      }
    };

    return (
      <TouchableOpacity
        style={[styles.button, getButtonStyle(), style]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    button: {
      paddingVertical: spacing.medium,
      paddingHorizontal: spacing.xlarge,
      borderRadius: 8,
      elevation: 2,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 150,
    },
    primaryButton: { backgroundColor: colors.primary },
    secondaryButton: { backgroundColor: colors.secondary },
    errorButton: { backgroundColor: colors.error },
    buttonText: {
      color: colors.white,
      fontSize: fonts.medium,
      fontWeight: 'bold',
    },
  });

  export default CustomButton;
  