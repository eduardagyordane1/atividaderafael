import { StyleSheet } from 'react-native';
import { colors, spacing, fonts } from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.medium,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: colors.modalOverlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xlarge,
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: spacing.xlarge,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  modalTitle: {
    fontSize: fonts.large,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.medium,
    textAlign: 'center',
  },
  modalText: {
    fontSize: fonts.medium,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.large,
  },
  closeButton: {
    backgroundColor: colors.error,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.large,
    borderRadius: 8,
  },
  closeButtonText: {
    color: colors.white,
    fontSize: fonts.medium,
    fontWeight: 'bold',
  },
  descriptionBox: {
    backgroundColor: colors.white,
    padding: spacing.medium,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.large,
    width: '100%',
  },
  descriptionTitle: {
    fontSize: fonts.medium,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.small,
  },
  descriptionText: {
    fontSize: fonts.small,
    color: colors.textLight,
  },
});
