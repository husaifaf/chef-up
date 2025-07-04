import { Stack } from 'expo-router';
import { SkillProvider } from '../contexts/SkillContext';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import AppLoading from 'expo-app-loading';
import { View } from 'react-native';
import { colors } from '../constants/colors';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Lobster_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SkillProvider>
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <Stack />
      </View>
    </SkillProvider>
  );
}
