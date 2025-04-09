import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const CreateWorkoutPlan: React.FC = () => {
  const router = useRouter();
  const [planName, setPlanName] = useState('');
  const [exercises, setExercises] = useState([
    { id: 1, name: '', sets: '', reps: '', rest: '' }
  ]);

  const addExercise = () => {
    const newExercise = {
      id: exercises.length + 1,
      name: '',
      sets: '',
      reps: '',
      rest: ''
    };
    setExercises([...exercises, newExercise]);
  };

  const updateExercise = (id: number, field: string, value: string) => {
    const updatedExercises = exercises.map(exercise => {
      if (exercise.id === id) {
        return { ...exercise, [field]: value };
      }
      return exercise;
    });
    setExercises(updatedExercises);
  };

  const removeExercise = (id: number) => {
    if (exercises.length > 1) {
      const updatedExercises = exercises.filter(exercise => exercise.id !== id);
      setExercises(updatedExercises);
    }
  };

  const handleSave = () => {
    // Here you would save the workout plan to your backend
    console.log('Saving workout plan:', { planName, exercises });
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>CREATE WORKOUT PLAN</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>SAVE</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Plan Name */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PLAN NAME</Text>
          <TextInput
            style={styles.input}
            value={planName}
            onChangeText={setPlanName}
            placeholder="Enter plan name"
            placeholderTextColor="#777"
          />
        </View>

        {/* Exercises */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EXERCISES</Text>
          
          {exercises.map((exercise) => (
            <View key={exercise.id} style={styles.exerciseCard}>
              <View style={styles.exerciseHeader}>
                <Text style={styles.exerciseNumber}>#{exercise.id}</Text>
                <TouchableOpacity onPress={() => removeExercise(exercise.id)}>
                  <MaterialIcons name="remove-circle" size={22} color="#ff4757" />
                </TouchableOpacity>
              </View>
              
              <TextInput
                style={styles.input}
                value={exercise.name}
                onChangeText={(value) => updateExercise(exercise.id, 'name', value)}
                placeholder="Exercise name"
                placeholderTextColor="#777"
              />
              
              <View style={styles.exerciseDetails}>
                <View style={styles.detailInput}>
                  <Text style={styles.detailLabel}>Sets</Text>
                  <TextInput
                    style={styles.smallInput}
                    value={exercise.sets}
                    onChangeText={(value) => updateExercise(exercise.id, 'sets', value)}
                    placeholder="3"
                    placeholderTextColor="#777"
                    keyboardType="numeric"
                  />
                </View>
                
                <View style={styles.detailInput}>
                  <Text style={styles.detailLabel}>Reps</Text>
                  <TextInput
                    style={styles.smallInput}
                    value={exercise.reps}
                    onChangeText={(value) => updateExercise(exercise.id, 'reps', value)}
                    placeholder="12"
                    placeholderTextColor="#777"
                    keyboardType="numeric"
                  />
                </View>
                
                <View style={styles.detailInput}>
                  <Text style={styles.detailLabel}>Rest (sec)</Text>
                  <TextInput
                    style={styles.smallInput}
                    value={exercise.rest}
                    onChangeText={(value) => updateExercise(exercise.id, 'rest', value)}
                    placeholder="60"
                    placeholderTextColor="#777"
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
          ))}
          
          {/* Add Exercise Button */}
          <TouchableOpacity style={styles.addButton} onPress={addExercise}>
            <MaterialIcons name="add" size={24} color="#fff" />
            <Text style={styles.addButtonText}>Add Exercise</Text>
          </TouchableOpacity>
        </View>

        {/* Client Assignment (Optional feature) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ASSIGN TO CLIENT (OPTIONAL)</Text>
          <TouchableOpacity style={styles.clientSelector}>
            <Text style={styles.clientSelectorText}>Select client</Text>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1e1e1e',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
  saveButton: {
    color: '#ff4757',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#aaa',
    marginBottom: 15,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#252525',
    borderRadius: 8,
    padding: 15,
    color: '#fff',
    marginBottom: 10,
  },
  exerciseCard: {
    backgroundColor: '#252525',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  exerciseNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff4757',
  },
  exerciseDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailInput: {
    flex: 1,
    marginRight: 8,
  },
  detailLabel: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 5,
  },
  smallInput: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#ff4757',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  clientSelector: {
    backgroundColor: '#252525',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clientSelectorText: {
    color: '#aaa',
    fontSize: 16,
  },
});

export default CreateWorkoutPlan;