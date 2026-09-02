import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Palette } from '@/constants/smart-home';

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Palette.background,
    card: Palette.header,
    text: Palette.text,
    border: '#E5E5E5',
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={NavigationTheme}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Palette.header },
          headerTintColor: Palette.text,
          headerTitleAlign: 'left',
          headerTitleStyle: { fontSize: 20, fontWeight: '700' },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: Palette.background },
        }}>
        <Stack.Screen name="index" options={{ title: 'Smart Home' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
        <Stack.Screen name="devices" options={{ title: 'Settings' }} />
      </Stack>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
