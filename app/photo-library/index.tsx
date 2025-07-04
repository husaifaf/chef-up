import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { useSkillContext } from '../../contexts/SkillContext';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import { useRouter } from 'expo-router';

export default function PhotoLibraryScreen() {
  const { skills } = useSkillContext();
  const router = useRouter();

  const photoSkills = skills.filter((skill) => !!skill.image);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push('/')}>
        <Text style={styles.back}>🏠 Back to Home</Text>
      </Pressable>

      <Text style={styles.title}>📸 Photo Library</Text>

      {photoSkills.length === 0 ? (
        <Text style={styles.empty}>No photos saved yet</Text>
      ) : (
        <FlatList
          data={photoSkills}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.grid}
          renderItem={({ item }) => (
            <Image source={{ uri: item.image! }} style={styles.image} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
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
    textAlign: 'center',
    marginBottom: 20,
  },
  empty: {
    fontFamily: fonts.body,
    fontSize: 16,
    color: colors.textDark,
    textAlign: 'center',
  },
  grid: {
    gap: 10,
    justifyContent: 'center',
  },
  image: {
    width: '48%',
    height: 150,
    margin: 4,
    borderRadius: 10,
  },
});
