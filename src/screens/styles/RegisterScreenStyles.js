import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows, commonStyles } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: commonStyles.container,
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.xl,
  },
  formContainer: {
    ...commonStyles.card,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 18,
    color: colors.darkGray,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  input: commonStyles.input,
  button: {
    ...commonStyles.button,
    backgroundColor: colors.success,
  },
  buttonDisabled: commonStyles.disabledButton,
  buttonText: commonStyles.buttonText,
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.xl,
  },
  loginText: {
    color: colors.darkGray,
    fontSize: 14,
  },
  loginLink: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});
