import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const VerificationCodePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VERIFY ACCOUNT</Text>
      <Text style={styles.subtitle}>Verify your account by entering verification code we sent to dhruvit@gmail.com</Text>

      {/* Verification Code Input */}
      <View style={styles.codeContainer}>
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.codeInput}
          maxLength={1}
          keyboardType="numeric"
        />
      </View>

      {/* Resend Link */}
      <TouchableOpacity>
        <Text style={styles.resendText}>Resend</Text>
      </TouchableOpacity>

      {/* Reset Password Button */}
      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>RESET PASSWORD</Text>
      </TouchableOpacity>

      {/* Back to Sign In Link */}
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
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  resendText: {
    color: '#ff4757',
    fontSize: 14,
    marginBottom: 20,
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

export default VerificationCodePage;