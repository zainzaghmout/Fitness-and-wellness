import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* Existing Screens */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="next-page" options={{ headerShown: false }} />
      <Stack.Screen name="next-page-2" options={{ headerShown: false }} />
      <Stack.Screen name="next-page-3" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
      <Stack.Screen name="verification-code" options={{ headerShown: false }} />
      <Stack.Screen name="age-selection" options={{ headerShown: false }} />
      <Stack.Screen name="weight-selection" options={{ headerShown: false }} />
      <Stack.Screen name="goal-weight-selection" options={{ headerShown: false }} />
      <Stack.Screen name="height-selection" options={{ headerShown: false }} />
      <Stack.Screen name="fitness-level-selection" options={{ headerShown: false }} />
      <Stack.Screen name="goal-selection" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="admin-dashboard" options={{ headerShown: false }} />

      {/* User Features */}
      <Stack.Screen name="track-workouts" options={{ headerShown: false }} />
      <Stack.Screen name="log-meals" options={{ headerShown: false }} />
      <Stack.Screen name="set-goals" options={{ headerShown: false }} />
      <Stack.Screen name="connect-trainers" options={{ headerShown: false }} />
      <Stack.Screen name="join-challenges" options={{ headerShown: false }} />

      {/* Admin Features */}
      <Stack.Screen name="content-management" options={{ headerShown: false }} />
      <Stack.Screen name="trainer-verification" options={{ headerShown: false }} />
      <Stack.Screen name="user-analytics" options={{ headerShown: false }} />
      <Stack.Screen name="subscription-management" options={{ headerShown: false }} />
      <Stack.Screen name="workout-plan-creation" options={{ headerShown: false }} />

      {/* Bottom Navigation Pages */}
      <Stack.Screen name="diary" options={{ headerShown: false }} />
      <Stack.Screen name="plans" options={{ headerShown: false }} />
      <Stack.Screen name="more" options={{ headerShown: false }} />
    </Stack>
  );
}