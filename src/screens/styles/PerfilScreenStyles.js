import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, commonStyles } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: commonStyles.container,
  header: commonStyles.header,
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
  },
  section: {
    marginTop: spacing.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginLeft: spacing.lg,
    marginBottom: spacing.md,
  },
  infoCard: {
    ...commonStyles.card,
    marginHorizontal: spacing.lg,
  },
  infoRow: {
    marginBottom: spacing.md,
  },
  infoLabel: {
    fontSize: 14,
    color: colors.darkGray,
    marginBottom: spacing.sm,
  },
  infoValue: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '600',
  },
  syncCard: {
    ...commonStyles.card,
    marginHorizontal: spacing.lg,
  },
  syncStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  syncStatusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: spacing.sm,
  },
  syncStatusText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  syncInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  syncInfoLabel: {
    fontSize: 14,
    color: colors.darkGray,
  },
  syncInfoValue: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '600',
  },
  syncInfoValueWarning: {
    color: colors.warning,
  },
  errorContainer: {
    backgroundColor: '#FFEBEE',
    padding: spacing.md,
    borderRadius: borderRadius.medium,
    marginTop: spacing.md,
  },
  errorText: {
    fontSize: 12,
    color: '#C62828',
  },
  syncButton: {
    ...commonStyles.button,
    backgroundColor: colors.primary,
  },
  syncButtonDisabled: commonStyles.disabledButton,
  syncButtonText: commonStyles.buttonText,
  statsCard: {
    ...commonStyles.card,
    marginHorizontal: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  statLabel: {
    fontSize: 12,
    color: colors.darkGray,
    textAlign: 'center',
  },
  logoutButton: {
    ...commonStyles.button,
    backgroundColor: colors.danger,
    marginHorizontal: spacing.lg,
  },
  logoutButtonText: commonStyles.buttonText,
  footer: {
    padding: spacing.xxl,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: colors.gray,
  },
});
