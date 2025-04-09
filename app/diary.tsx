import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DiaryPage: React.FC = () => {
  const [steps, setSteps] = useState('');
  const [calories, setCalories] = useState('');
  const [workout, setWorkout] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="account-circle" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>DAILY ACTIVITY</Text>

        <TouchableOpacity onPress={() => console.log('Notification clicked')}>
          <MaterialIcons name="notifications" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Daily Activity Form */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Log Your Activity</Text>

          <TextInput
            style={styles.input}
            placeholder="Steps Walked"
            value={steps}
            onChangeText={setSteps}
            keyboardType="numeric"
            placeholderTextColor="#888"
          />

          <TextInput
            style={styles.input}
            placeholder="Calories Burned"
            value={calories}
            onChangeText={setCalories}
            keyboardType="numeric"
            placeholderTextColor="#888"
          />

          <TextInput
            style={styles.input}
            placeholder="Workout Done (e.g., Chest Day)"
            value={workout}
            onChangeText={setWorkout}
            placeholderTextColor="#888"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log Activity</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton}>
          <MaterialIcons name="home" size={24} color="#aaa" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <MaterialIcons name="fitness-center" size={24} color="#ff4757" />
          <Text style={styles.activeNavText}>Activity</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#1e1e1e',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 80, // Extra padding for navigation
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 15,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#252525',
    color: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: '#ff4757',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 15,
    shadowColor: '#ff4757',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#1e1e1e',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 5,
  },
  activeNavText: {
    fontSize: 12,
    color: '#ff4757',
    marginTop: 5,
  },
});

export default DiaryPage;
