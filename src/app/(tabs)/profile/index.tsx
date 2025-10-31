import { useFocusEffect, router } from "expo-router";
import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "@/components/Button";
import { ProfileStorage } from "@/services/profileStorage";
import { UserProfile } from "@/types/profile";

export default function ProfileViewScreen() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useFocusEffect(
    useCallback(() => {
      async function loadProfile() {
        const savedProfile = await ProfileStorage.load();
        setProfile(savedProfile);
      }

      loadProfile();
    }, [])
  );

  const handleEdit = () => {
    router.push("/(tabs)/profile/edit-profile");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>

      {profile ? (
        <View style={styles.profileInfo}>
          {profile.fileUri && (
            <Image source={{ uri: profile.fileUri }} style={styles.avatar} />
          )}

          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{profile.name} {profile.surname}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{profile.email}</Text>

          <Text style={styles.label}>Idade:</Text>
          <Text style={styles.value}>{profile.age}</Text>

          <Text style={styles.label}>Instituição:</Text>
          <Text style={styles.value}>{profile.institution}</Text>

          <Text style={styles.label}>Curso:</Text>
          <Text style={styles.value}>{profile.course}</Text>

        </View>
      ) : (
        <Text style={styles.empty}>Nenhum dado de perfil encontrado.</Text>
      )}

      <View style={styles.footer}>
        <Button title="Editar Perfil" onPress={handleEdit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#112437",
  },
  profileInfo: {
    gap: 12,
    marginBottom: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666666",
  },
  value: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333333",
    marginBottom: 8,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,
  },
  empty: {
    fontSize: 16,
    color: "#999999",
    textAlign: "center",
    marginVertical: 40,
  },
  footer: {
    paddingBottom: 40,
  },
});
