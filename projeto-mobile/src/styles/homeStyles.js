import { StyleSheet } from 'react-native';
import { colors, spacing, fonts } from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.large,
  },
  welcomeBox: {
    backgroundColor: colors.white,
    padding: spacing.xlarge,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: fonts.xlarge,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.medium,
    textAlign: 'center',
  },
  message: {
    fontSize: fonts.medium,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: spacing.large,
  },
  icon: {
    fontSize: 48,
    marginBottom: spacing.medium,
  },
});
