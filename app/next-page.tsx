import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

const NextPage: React.FC = () => {
  return (
    <ImageBackground
      source={require('../assets/crossfit2.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>STEEL MIND</Text>
        <Text style={styles.subtitle}>UNSTOPPABLE BODY</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/sign-in" asChild>
          <TouchableOpacity style={[styles.button, styles.skipButton]}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/next-page-2" asChild>
          <TouchableOpacity style={[styles.button, styles.nextButton]}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  title: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: '300',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  skipButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#ff4757',
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NextPage;