import * as Haptics from 'expo-haptics';

export function useHaptics() {
  const selection = () => {
    Haptics.selectionAsync();
  };

  const notification = (type: Haptics.NotificationFeedbackType = Haptics.NotificationFeedbackType.Success) => {
    Haptics.notificationAsync(type);
  };

  const impact = (style: Haptics.ImpactFeedbackStyle = Haptics.ImpactFeedbackStyle.Medium) => {
    Haptics.impactAsync(style);
  };

  return { selection, notification, impact };
}
