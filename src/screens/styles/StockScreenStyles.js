import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, commonStyles } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: commonStyles.container,
  titleContainer: {
    ...commonStyles.header,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.darkGray,
    marginTop: spacing.sm,
  },
  header: {
    ...commonStyles.header,
  },
  searchInput: {
    backgroundColor: colors.lightGray,
    borderRadius: borderRadius.medium,
    padding: spacing.md,
    fontSize: 16,
    marginBottom: spacing.md,
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  categoryButton: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.round,
    backgroundColor: colors.lightGray,
    marginRight: spacing.sm,
  },
  categoryButtonActive: {
    backgroundColor: colors.cyan,
  },
  categoryButtonText: {
    fontSize: 14,
    color: colors.darkGray,
    fontWeight: '600',
  },
  categoryButtonTextActive: {
    color: colors.white,
  },
  separator: {
    height: 0,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.darkGray,
    marginBottom: spacing.sm,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
  },
});
