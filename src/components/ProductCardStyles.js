import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../styles/theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.large,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.sm,
    ...shadows.card,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    padding: spacing.md,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.medium,
    backgroundColor: colors.lightGray,
  },
  placeholderImage: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.medium,
    backgroundColor: colors.lightText,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: colors.gray,
    fontSize: 12,
  },
  infoContainer: {
    flex: 1,
    marginLeft: spacing.md,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  categoryBadge: {
    backgroundColor: '#00a2ffe8',
    borderRadius: borderRadius.small,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    alignSelf: 'flex-start',
    marginBottom: spacing.md,
  },
  categoryText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  detailLabel: {
    fontSize: 14,
    color: colors.darkGray,
    marginRight: spacing.sm,
  },
  detailValue: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '600',
  },
  detailValueSmall: {
    fontSize: 12,
    color: colors.text,
    fontWeight: '600',
  },
  syncBadge: {
    borderRadius: borderRadius.small,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    alignSelf: 'flex-start',
    marginTop: spacing.sm,
  },
  syncText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: colors.danger,
    padding: spacing.md,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
});
