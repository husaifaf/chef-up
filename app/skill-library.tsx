import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useSkillContext } from "../contexts/SkillContext";

export default function SkillLibrary() {
  const { skills } = useSkillContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skill Library 📖</Text>
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.skillName}>{item.name}</Text>
            <Text>{item.notes}</Text>
            {item.image && <Image source={{ uri: item.image }} style={styles.thumb} />}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFF5E4" },
  title: {
    fontSize: 24,
    fontFamily: "PTSerif_400Regular",
    color: "#E2725B",
    marginBottom: 20,
  },
  card: {
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  skillName: {
    fontSize: 18,
    fontFamily: "PTSerif_400Regular",
    color: "#E2725B",
  },
  thumb: {
    width: 100,
    height: 100,
    marginTop: 5,
    borderRadius: 8,
  },
});
