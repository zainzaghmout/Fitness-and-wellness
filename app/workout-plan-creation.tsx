import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const WorkoutPlanCreationPage: React.FC = () => {
  const [goalType, setGoalType] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [weeklyWorkout, setWeeklyWorkout] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Set Your Fitness Goals</Text>

      <TextInput
        style={styles.input}
        placeholder="Goal Type (e.g., Weight Loss, Muscle Gain)"
        value={goalType}
        onChangeText={setGoalType}
      />

      <TextInput
        style={styles.input}
        placeholder="Target Weight (kg)"
        value={targetWeight}
        onChangeText={setTargetWeight}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Weekly Workout Goal (times/week)"
        value={weeklyWorkout}
        onChangeText={setWeeklyWorkout}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Goals</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WorkoutPlanCreationPage;
