import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

const LandingPage: React.FC = () => {
  return (
    <ImageBackground
      source={require('../assets/index.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Vita Core</Text>
        <Text style={styles.subtitle}>We train your body to be</Text>
        <Text style={styles.subtitle}>great and fit.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/next-page" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LET'S START</Text>
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
    position: 'absolute',
    bottom: 40, 
    left: 20,
    right: 20,
    alignItems: 'center', 
  },
  button: {
    width: '100%', 
    backgroundColor: '#ff4757',
    paddingVertical: 15,
    borderRadius: 30,
    shadowColor: '#ff4757',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});

export default LandingPage;