import { StyleSheet } from 'react-native';
import { colors, spacing, fonts } from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.medium,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: fonts.xlarge,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.medium,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: fonts.large,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.small,
  },
  text: {
    fontSize: fonts.medium,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.xlarge,
    borderRadius: 8,
    marginTop: spacing.medium,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.white,
    padding: spacing.medium,
    borderRadius: 8,
    marginBottom: spacing.medium,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
