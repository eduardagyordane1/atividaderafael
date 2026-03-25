import { StyleSheet } from 'react-native';
import { colors, spacing, fonts } from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    padding: spacing.medium,
  },
  item: {
    backgroundColor: colors.white,
    padding: spacing.medium,
    borderRadius: 8,
    marginBottom: spacing.medium,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  itemTitle: {
    fontSize: fonts.medium,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.small,
  },
  itemDescription: {
    fontSize: fonts.small,
    color: colors.textLight,
  },
  sectionHeader: {
    backgroundColor: colors.secondary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderRadius: 4,
    marginBottom: spacing.small,
    marginTop: spacing.medium,
  },
  sectionHeaderText: {
    fontSize: fonts.medium,
    fontWeight: 'bold',
    color: colors.white,
  },
  scrollContent: {
    padding: spacing.medium,
  },
  scrollBox: {
    backgroundColor: colors.white,
    padding: spacing.medium,
    borderRadius: 8,
    marginBottom: spacing.large,
    borderWidth: 1,
    borderColor: colors.border,
  },
  scrollTitle: {
    fontSize: fonts.large,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.medium,
  },
  scrollText: {
    fontSize: fonts.medium,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.medium,
  },
});
