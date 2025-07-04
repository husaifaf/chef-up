import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSkillContext } from '../../contexts/SkillContext';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';

export default function SkillDetailScreen() {
  const { id } = useLocalSearchParams();
  const { skills, saveSkills } = useSkillContext();
  const router = useRouter();

  const skill = skills.find((s) => s.id === id);

  if (!skill) return <Text>Skill not found</Text>;

  const handlePractice = () => {
    const updatedSkills = skills.map((s) =>
      s.id === skill.id
        ? { ...s, practiceCount: s.practiceCount + 1 }
        : s
    );
    saveSkills(updatedSkills);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push('/')}>
        <Text style={styles.back}>🏠 Back to Home</Text>
      </Pressable>

      <Text style={styles.title}>{skill.name}</Text>
      <Text style={styles.notes}>{skill.notes}</Text>
      {skill.image && <Image source={{ uri: skill.image }} style={styles.image} />}
      <Text style={styles.counter}>Practiced: {skill.practiceCount} times</Text>

      <Pressable style={styles.practiceButton} onPress={handlePractice}>
        <Text style={styles.practiceText}>🛠 Practice This Skill</Text>
      </Pressable>

      {skill.practiceCount >= 10 && (
        <Text style={styles.mastery}>🎉 Mastered!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  back: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.forestGreen,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.title,
    color: colors.forestGreen,
    marginBottom: 10,
  },
  notes: {
    fontSize: 16,
    fontFamily: fonts.body,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  counter: {
    fontFamily: fonts.body,
    fontSize: 16,
    marginBottom: 10,
  },
  practiceButton: {
    backgroundColor: colors.coralPink,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  practiceText: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  mastery: {
    marginTop: 10,
    fontSize: 18,
    color: colors.forestGreen,
    fontFamily: fonts.body,
    textAlign: 'center',
  },
});
