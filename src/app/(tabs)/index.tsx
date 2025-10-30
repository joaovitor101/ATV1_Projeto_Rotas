import Card from "@/components/Card";
import { COURSES } from "@/data/coursesData";
import { Course } from "../../types/course";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const handleCoursePress = (course: Course) => {
    router.push(`/courses/${course.id}` as any);
  };

  const renderCourse = ({ item }: { item: Course }) => (
    <TouchableOpacity onPress={() => handleCoursePress(item)}>
      <Card
        leftComponent={<Text style={styles.courseIcon}>{item.icon}</Text>}
        rightComponent={
          <Text style={styles.lessonCount}>{item.totalLessons} lições</Text>
        }
      >
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseDescription}>{item.description}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cursos Disponíveis</Text>
        <Text style={styles.subtitle}>Escolha um curso para começar</Text>
      </View>

      <FlatList
        data={COURSES}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#ffffff",
    borderBottomWidth: 2,
    borderBottomColor: "#bdbdbd",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666666",
  },
  listContent: {
    padding: 16,
    gap: 12,
  },
  courseIcon: {
    fontSize: 48,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
  },
  courseDescription: {
    fontSize: 14,
    color: "#666666",
  },
  lessonCount: {
    fontSize: 12,
    color: "#999999",
    fontWeight: "600",
  },
});