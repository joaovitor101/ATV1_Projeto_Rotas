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
      {/* Formas geométricas decorativas */}
      <View style={styles.circleTopLeft} />
      <View style={styles.triangleBottomRight} />
      <View style={styles.circleTopRight} />
      <View style={styles.diamondCenter} />
      <View style={styles.squareBottomLeft} />

      <Text style={styles.title}>Meu Perfil</Text>

      {profile ? (
        <View style={styles.profileInfo}>
          {profile.fileUri && (
            <View style={styles.avatarWrapper}>
              <Image source={{ uri: profile.fileUri }} style={styles.avatar} />
            </View>
          )}

          <View style={styles.infoBox}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.value}>{profile.name} {profile.surname}</Text>

            {/* <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{profile.email}</Text> */}

            <Text style={styles.label}>Idade:</Text>
            <Text style={styles.value}>{profile.age}</Text>

            <Text style={styles.label}>Instituição:</Text>
            <Text style={styles.value}>{profile.institution}</Text>

            <Text style={styles.label}>Curso:</Text>
            <Text style={styles.value}>{profile.course}</Text>
          </View>
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
    backgroundColor: "#f9fafc",
    position: "relative",
  },

  // Formas geométricas decorativas
  circleTopLeft: {
    position: "absolute",
    top: -40,
    left: -40,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#e0f7fa",
  },
  triangleBottomRight: {
    position: "absolute",
    bottom: -30,
    right: -30,
    width: 0,
    height: 0,
    borderLeftWidth: 80,
    borderRightWidth: 80,
    borderBottomWidth: 80,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#ffe0b2",
    transform: [{ rotate: "45deg" }],
  },
  circleTopRight: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#d1c4e9",
  },
  diamondCenter: {
    position: "absolute",
    top: "45%",
    left: "45%",
    width: 40,
    height: 40,
    backgroundColor: "#b2ebf2",
    transform: [{ rotate: "45deg" }],
    opacity: 0.3,
  },
  squareBottomLeft: {
    position: "absolute",
    bottom: 20,
    left: 20,
    width: 30,
    height: 30,
    backgroundColor: "#fff9c4",
    transform: [{ rotate: "15deg" }],
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
    alignItems: "center",
  },
  avatarWrapper: {
    borderWidth: 4,
    borderColor: "#4caf50",
    borderRadius: 70,
    padding: 4,
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoBox: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
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
    marginBottom: 12,
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
