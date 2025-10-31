import Button from "@/components/Button";
import { ProfileStorage } from "../../../services/profileStorage";
import { UserProfile } from "@/types/profile";
import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function EditProfileModal() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [institution, setInstitution] = useState("");
  const [course, setCourse] = useState("");

  useFocusEffect(
    useCallback(() => {
      async function loadProfile() {
        const savedProfile = await ProfileStorage.load();

        if (savedProfile) {
          setName(savedProfile.name);
          setSurname(savedProfile.surname || "");
          setEmail(savedProfile.email);
          setAge(savedProfile.age?.toString() || "");
          setInstitution(savedProfile.institution || "");
          setCourse(savedProfile.course || "");
        }
      }

      loadProfile();
    }, [])
  );

  const handleSave = async () => {
    const updatedProfile: UserProfile = {
      name: name.trim(),
      surname: surname.trim() || undefined,
      email: email.trim(),
      age: age ? parseInt(age) : undefined,
      institution: institution.trim() || undefined,
      course: course.trim() || undefined,
    };

    await ProfileStorage.save(updatedProfile);
    handleCancel();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>

      <View style={styles.profileInfo}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Nome:</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Digite seu nome"
            placeholderTextColor="#999999"
          />
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Sobrenome:</Text>
          <TextInput
            style={styles.textInput}
            value={surname}
            onChangeText={setSurname}
            placeholder="Digite seu sobrenome"
            placeholderTextColor="#999999"
          />
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email:</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
            placeholderTextColor="#999999"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Idade:</Text>
          <TextInput
            style={styles.textInput}
            value={age}
            onChangeText={setAge}
            placeholder="Digite sua idade"
            placeholderTextColor="#999999"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Instituição:</Text>
          <TextInput
            style={styles.textInput}
            value={institution}
            onChangeText={setInstitution}
            placeholder="Digite sua instituição"
            placeholderTextColor="#999999"
          />
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Curso:</Text>
          <TextInput
            style={styles.textInput}
            value={course}
            onChangeText={setCourse}
            placeholder="Digite seu curso"
            placeholderTextColor="#999999"
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Button title="SALVAR" onPress={handleSave} />
        <Button title="Cancelar" variant="secondary" onPress={handleCancel} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  footer: {
    width: "100%",
    gap: 12,
    paddingBottom: 40,
  },
  profileInfo: {
    width: "100%",
    marginBottom: 40,
  },
  infoItem: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666666",
    marginBottom: 5,
  },
  textInput: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    color: "#333333",
  },
});
