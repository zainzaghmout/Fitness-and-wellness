import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { Link } from 'expo-router';

const GoalSelectionPage: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const fadeAnim = useState(new Animated.Value(0))[0]; 

  const goals = ['WEIGHT LOSS', 'GAIN MUSCLE', 'IMPROVE FITNESS'];

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.title}>Step 6 of 6</Text>
      <Text style={styles.subtitle}>WHAT'S YOUR GOAL?</Text>

      <View style={styles.goalContainer}>
        {goals.map((goal) => (
          <TouchableOpacity
            key={goal}
            style={[
              styles.goalButton,
              selectedGoal === goal && styles.selectedGoalButton,
            ]}
            onPress={() => setSelectedGoal(goal)}
          >
            <Text
              style={[
                styles.goalText,
                selectedGoal === goal && styles.selectedGoalText,
              ]}
            >
              {goal}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Link href="/home" asChild>
        <TouchableOpacity style={styles.finishButton}>
          <Text style={styles.finishButtonText}>FINISH STEPS</Text>
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
  goalContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  goalButton: {
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
  selectedGoalButton: {
    backgroundColor: '#ff4757', 
    borderColor: '#ff4757',
  },
  goalText: {
    fontSize: 18,
    color: '#fff', 
    fontWeight: '500',
  },
  selectedGoalText: {
    color: '#fff', 
  },
  finishButton: {
    width: '100%',
    backgroundColor: '#ff4757',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  finishButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

export default GoalSelectionPage;