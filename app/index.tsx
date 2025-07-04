import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { colors } from '../constants/colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Chef Up!</Text>

      <Link href="/skill" style={styles.link}>
        <Text style={styles.linkText}>📋 View Skills</Text>
      </Link>

      <Link href="/skill/log" style={styles.link}>
        <Text style={styles.linkText}>➕ Log a New Skill</Text>
      </Link>

      <Link href="/photo-library" style={styles.link}>
        <Text style={styles.linkText}>📸 View Photo Library</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Lobster_400Regular',
    fontSize: 36,
    color: colors.forestGreen,
    marginBottom: 40,
    textAlign: 'center',
  },
  link: {
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.coralPink,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  linkText: {
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
});
