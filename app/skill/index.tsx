import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSkillContext } from '../../contexts/SkillContext';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import { Link, useRouter } from 'expo-router';

export default function ViewSkillsScreen() {
  const { skills } = useSkillContext();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Your Logged Skills</Text>

      {skills.length === 0 ? (
        <Text>No skills yet. Log one to get started!</Text>
      ) : (
        <FlatList
          data={skills}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.skillCard}>
              <Link href={`/skill/${item.id}`}>
                <Text style={styles.skillName}>{item.name}</Text>
              </Link>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: {
    fontFamily: fonts.title,
    fontSize: 28,
    color: colors.forestGreen,
    textAlign: 'center',
    marginBottom: 20,
  },
  skillCard: {
    backgroundColor: colors.vanillaCream,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  skillName: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.forestGreen,
  },
});
