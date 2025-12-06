import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, commonStyles } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: commonStyles.container,
  scrollView: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xl,
  },
  photoSection: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: borderRadius.large,
    backgroundColor: colors.lightText,
  },
  photoPlaceholder: {
    width: 200,
    height: 200,
    borderRadius: borderRadius.large,
    backgroundColor: colors.lightText,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoPlaceholderText: {
    color: colors.gray,
    fontSize: 16,
  },
  photoButtons: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },
  photoButton: {
    backgroundColor: '#008cffff',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.medium,
    marginHorizontal: spacing.sm,
  },
  photoButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
    marginTop: spacing.md,
  },
  input: commonStyles.input,
  notesInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  locationInfo: {
    backgroundColor: '#E8F5E9',
    padding: spacing.md,
    borderRadius: borderRadius.medium,
    marginTop: spacing.lg,
  },
  locationText: {
    fontSize: 14,
    color: colors.green,
  },
  saveButton: {
    backgroundColor: '#158b33ff',
    padding: spacing.lg,
    borderRadius: borderRadius.medium,
    alignItems: 'center',
    marginTop: spacing.xl,
    marginBottom: 40,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  cameraControls: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: borderRadius.pill,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    borderWidth: 4,
    borderColor: colors.blue,
  },
  cancelButton: {
    marginTop: spacing.xl,
    padding: spacing.md,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: borderRadius.medium,
  },
  cancelButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
