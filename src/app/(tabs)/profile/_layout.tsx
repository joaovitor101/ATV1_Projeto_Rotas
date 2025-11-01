import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="edit-profile" 
        options={{ 
          presentation: 'transparentModal',
          headerShown: false,
          animation: 'fade_from_bottom'
        }} 
      />
    </Stack>
  );
}