import Button from '@/components/Button';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeEntryScreen() {
  const router = useRouter();

  const handleStart = () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Image source={{ uri: 'https://github.com/joaovitor101.png' }} style={styles.avatar} />

        <Text style={styles.title}>Bem-vindo à atividade de rotas</Text>
        <Text style={styles.subtitle}>
          Navegue pelos tabs home e perfil
        </Text>
      </View>
      <View style={styles.footer}>
        <Button title="Clique aqui para iniciar" onPress={handleStart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f7fa',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,

  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#112437',
    textAlign: 'center',
    marginBottom: 12,
    padding: 20
  },
  subtitle: {
    fontSize: 18,
    color: '#4a4a4a',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  footer: {
    width: '100%',
    paddingBottom: 50,
  },
});
