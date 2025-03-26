import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { Link } from 'expo-router';

const FitnessLevelSelectionPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const fadeAnim = useState(new Animated.Value(0))[0]; 

  const fitnessLevels = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'];

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.title}>Step 5 of 6</Text>
      <Text style={styles.subtitle}>WHAT'S YOUR FITNESS LEVEL?</Text>

      {/* Fitness Level Selection */}
      <View style={styles.levelContainer}>
        {fitnessLevels.map((level) => (
          <TouchableOpacity
            key={level}
            style={[
              styles.levelButton,
              selectedLevel === level && styles.selectedLevelButton,
            ]}
            onPress={() => setSelectedLevel(level)}
          >
            <Text
              style={[
                styles.levelText,
                selectedLevel === level && styles.selectedLevelText,
              ]}
            >
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Next Steps Button */}
      <Link href="/goal-selection" asChild>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>NEXT STEPS</Text>
        </TouchableOpacity>
      </Link>

      {/* Skip Button */}
      <Link href="/home" asChild>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </Link>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e', 
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#aaa', 
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 30,
  },
  levelContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  levelButton: {
    width: '90%',
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: '#333', 
    borderRadius: 25, 
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#444', 
  },
  selectedLevelButton: {
    backgroundColor: '#ff4757', 
    borderColor: '#ff4757',
  },
  levelText: {
    fontSize: 18,
    color: '#fff', 
    fontWeight: '500',
  },
  selectedLevelText: {
    color: '#fff', 
  },
  skipButton: {
    marginTop: 20,
  },
  skipText: {
    color: '#ff4757', 
    fontSize: 16,
    fontWeight: '500',
  },
  nextButton: {
    width: '100%',
    backgroundColor: '#ff4757',
    paddingVertical: 15,
    borderRadius: 25, 
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    fontSize: 18,
    color: '#fff', 
    fontWeight: '600',
  },
});

export default FitnessLevelSelectionPage;