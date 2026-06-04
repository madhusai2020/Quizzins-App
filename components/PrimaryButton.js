import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, radii, spacing} from '../theme';

export default function PrimaryButton({
  children,
  onPress,
  variant = 'primary',
  accessibilityLabel,
  style,
}) {
  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      activeOpacity={0.82}
      onPress={onPress}
      style={[styles.button, styles[variant], style]}
    >
      <Text style={[styles.label, variant === 'secondary' && styles.secondaryLabel]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: radii.sm,
    justifyContent: 'center',
    minHeight: 44,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.panel,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  success: {
    backgroundColor: colors.success,
  },
  danger: {
    backgroundColor: colors.danger,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  secondaryLabel: {
    color: colors.primary,
  },
});
