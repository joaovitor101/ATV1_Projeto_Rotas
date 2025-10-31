import { router, useFocusEffect } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { COURSES } from "@/data/coursesData";
import { Course } from "@/types/course";
import Button from "@/components/Button";
import { ProfileStorage } from "@/services/profileStorage";
import { UserProfile } from "@/types/profile";

export default function HomeScreen() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useFocusEffect(
    React.useCallback(() => {
      async function loadProfile() {
        const savedProfile = await ProfileStorage.load();
        setProfile(savedProfile);
      }

      loadProfile();
    }, [])
  );

  const handleCoursePress = (course: Course) => {
    Alert.alert("Trilha ainda não desenvolvida!");
  };

  const renderCourse = ({ item }: { item: Course }) => (
    <TouchableOpacity
      style={styles.courseCard}
      onPress={() => handleCoursePress(item)}
    >
      <Text style={styles.courseIcon}>{item.icon}</Text>
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.courseLessons}>{item.totalLessons} lições</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.greeting}>
            Olá, {profile?.name} {profile?.surname}
          </Text>
          <Text style={styles.subtitle}>
            Pronto para aprender algo novo hoje?
          </Text>
        </View>
        <Image
          source={require("@/assets/images/mascote.png")}
          style={styles.avatar}
        />
      </View>

      {/* Progresso */}
      <View style={styles.progressBox}>
        <Text style={styles.progressTitle}>Seu Progresso</Text>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarFill} />
        </View>
        <Text style={styles.progressText}>14 de 30 lições concluídas</Text>
      </View>

      {/* Cursos recomendados */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trilhas recomendadas</Text>
        <FlatList
          data={COURSES}
          renderItem={renderCourse}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.courseGrid}
        />
      </View>

      {/* Frase motivacional */}
      <View style={styles.motivationBox}>
        <Text style={styles.motivationText}>
          “Cada linha de código é um passo rumo ao seu futuro.” 🚀
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafc",
  },
  courseGrid: {
    paddingBottom: 40,
    paddingHorizontal: 16,
    gap: 12,
  },
  courseCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    margin: 6,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    minWidth: "45%",
    maxWidth: "48%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#ffffff",
  },
  headerText: {
    flex: 1,
    marginRight: 12,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "600",
    color: "#112437",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666666",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  progressBox: {
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginTop: 10,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333333",
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressBarFill: {
    width: "45%",
    height: "100%",
    backgroundColor: "#4caf50",
  },
  progressText: {
    fontSize: 12,
    color: "#666666",
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#112437",
    marginBottom: 12,
  },
  courseIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
  },
  courseLessons: {
    fontSize: 12,
    color: "#999999",
  },
  motivationBox: {
    marginTop: 32,
    marginBottom: 40,
    paddingHorizontal: 24,
  },
  motivationText: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#444444",
    textAlign: "center",
  },
});
