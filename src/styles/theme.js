
export const colors = {

  primary: '#007AFF',
  success: '#00ff40ff',
  danger: '#FF3B30',
  warning: '#FF9500',
  

  background: '#f5f5f5',
  white: '#fff',
  

  text: '#333',
  darkGray: '#666',
  gray: '#999',
  

  border: '#ddd',
  lightText: '#e0e0e0',
  lightGray: '#f0f0f0',
  

  green: '#0fe419ff',
  cyan: '#00bef8ff',
  blue: '#0051ffff',
  lightBlue: '#E3F2FD',
};


export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};


export const borderRadius = {
  small: 4,
  medium: 8,
  large: 10,
  round: 20,
  pill: 35,
};


export const navigationColors = {
  tabActive: '#007AFF',
  tabInactive: 'gray',
  loadingBackground: '#f5f5f5',
  loadingIndicator: '#0099ffff',
};


export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
};


export const typography = {
  largeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  subtitle: {
    fontSize: 18,
    color: colors.darkGray,
  },
  body: {
    fontSize: 16,
    color: colors.text,
  },
  caption: {
    fontSize: 14,
    color: colors.darkGray,
  },
  small: {
    fontSize: 12,
    color: colors.gray,
  },
};


export const commonStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.large,
    padding: spacing.lg,
    ...shadows.card,
  },
  header: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightText,
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: colors.lightText,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.medium,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    borderRadius: borderRadius.medium,
    padding: spacing.lg,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.6,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
};
