import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, commonStyles } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: commonStyles.container,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightText,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
  },
  refreshButton: {
    backgroundColor: colors.lightBlue,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.medium,
    minWidth: 100,
    alignItems: 'center',
  },
  refreshButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  locationInfo: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightText,
  },
  locationLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.darkGray,
    marginBottom: spacing.sm,
  },
  locationText: {
    fontSize: 14,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoBox: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.lightText,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  infoText: {
    fontSize: 14,
    color: colors.darkGray,
    marginBottom: spacing.sm,
  },
  infoSubtext: {
    fontSize: 12,
    color: colors.gray,
  },
});
