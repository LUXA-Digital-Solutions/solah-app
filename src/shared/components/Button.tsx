import React from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

export type Variant = "filled" | "outline" | "ghost";

export interface ButtonProps {
  title: string;
  onPress?: (e: GestureResponderEvent) => void;
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  fullWidth?: boolean;
}

/**
 * AppButton — A reusable button component for the Solah App.
 * Supports filled, outline, and ghost variants.
 */
export function AppButton({
  title,
  onPress,
  variant = "filled",
  disabled = false,
  loading = false,
  leftIcon,
  style,
  textStyle,
  fullWidth = true,
}: ButtonProps) {
  const backgroundColor =
    variant === "filled"
      ? "#A46A3D" // Primary brown color from Figma
      : "transparent";

  const borderColor = variant === "outline" ? "#A46A3D" : "transparent";

  const textColor =
    variant === "filled" ? "#FFFFFF" : variant === "outline" ? "#A46A3D" : "#475467"; // Muted gray for ghost

  const containerStyles = [
    styles.button,
    fullWidth && { alignSelf: "stretch" as const },
    { backgroundColor, borderColor },
    disabled && { opacity: 0.6 },
    style,
  ].filter(Boolean);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [containerStyles, pressed && !disabled && { opacity: 0.8 }]}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <View style={styles.content}>
          {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
          <Text style={[styles.text, { color: textColor }, textStyle]}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 8,
  },
});

export default AppButton;
