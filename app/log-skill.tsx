import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useSkillContext } from '../contexts/SkillContext';

export default function LogSkill() {
  const { skills, saveSkills } = useSkillContext();
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({ allowsEditing: true, quality: 0.5 });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const save = () => {
    const newEntry = { id: Date.now().toString(), name, notes, image };
    saveSkills([...skills, newEntry]);
    router.push('/skill-library');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Skill Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Notes</Text>
      <TextInput style={styles.input} value={notes} onChangeText={setNotes} multiline />

      <Button title="Take a Picture" onPress={pickImage} color="#E2725B" />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Save Skill" onPress={save} color="#E2725B" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF5E4' },
  label: { fontSize: 16, color: '#8B4513', marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#E2725B',
    padding: 10,
    backgroundColor: '#F7CAC9',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  image: { width: 200, height: 200, marginTop: 10, borderRadius: 10 },
});
