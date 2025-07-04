import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useSkillContext } from '../../contexts/SkillContext';
import { useRouter } from 'expo-router';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';

export default function LogSkillScreen() {
  const { skills, saveSkills } = useSkillContext();
  const router = useRouter();

  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({ allowsEditing: true, quality: 0.5 });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const save = () => {
    const newEntry = {
      id: Date.now().toString(),
      name,
      notes,
      image,
      practiceCount: 0,
      totalMinutes: 0,
    };
    saveSkills([...skills, newEntry]);
    router.replace('/skill');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push('/')}>
        <Text style={styles.back}>🏠 Back to Home</Text>
      </Pressable>

      <Text style={styles.title}>Log a New Skill</Text>

      <TextInput
        placeholder="Skill Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Notes"
        style={styles.input}
        multiline
        value={notes}
        onChangeText={setNotes}
      />

      <Button title="Take a Picture" onPress={pickImage} color={colors.coralPink} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Save Skill" onPress={save} color={colors.coralPink} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  title: {
    fontSize: 24,
    fontFamily: fonts.title,
    marginBottom: 20,
    color: colors.forestGreen,
    textAlign: 'center',
  },
  input: {
    borderColor: colors.coralPink,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: colors.vanillaCream,
    borderRadius: 5,
    fontFamily: fonts.body,
  },
  image: { width: 200, height: 200, marginTop: 10, borderRadius: 10 },
  back: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.forestGreen,
    marginBottom: 10,
  },
});
