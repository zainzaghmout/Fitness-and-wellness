import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const ForgotPasswordPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FORGOT PASSWORD</Text>
      <Text style={styles.subtitle}>Please enter your email below to receive your password reset code.</Text>

      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="#999"
      />

      <Link href="/verification-code" asChild>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetButtonText}>RESET PASSWORD</Text>
        </TouchableOpacity>
      </Link>


      <Link href="/sign-in" asChild>
        <TouchableOpacity>
          <Text style={styles.backToSignIn}>Back to Sign In</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
    fontSize: 16,
  },
  resetButton: {
    width: '100%',
    backgroundColor: '#ff4757',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  resetButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  backToSignIn: {
    color: '#ff4757',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordPage;