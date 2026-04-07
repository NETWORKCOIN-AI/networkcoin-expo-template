import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const screen = {
  width,
  height,
};

export const isSmallDevice = width < 375;

export const padding = {
  horizontal: 16,
  vertical: 24,
  screen: 20,
};

export const margin = {
  horizontal: 16,
  vertical: 12,
  section: 24,
};
