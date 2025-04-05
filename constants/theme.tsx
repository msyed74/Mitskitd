/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const COLORS = {
  light: {
    text: '#11181C',
    background: '#dddd',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  // @/constants/theme.ts

  primary: '#FFFFFF', 
  primarydarka:'#263238', // Primary brand color
  background: '#ffff', // Background color
  surface: '#ffffff',    // Surface color for cards, sheets, etc.
  accent: '#e67e22',
  darkaccent: "#d35400",     // Accent color for highlights
  error: '#e74c3c',      // Error color for warnings
  text: '#11181C',       // Primary text color
  grey: '#7f8c8d',       // Grey color for secondary text or icons
  white: '#ffffff',      // White color
  black: '#000000',      // Black color


};
