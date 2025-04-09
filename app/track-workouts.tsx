import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const TrackWorkoutsPage: React.FC = () => {
  const workouts = [
    { id: 1, name: 'Full Body Workout', duration: '45 min', date: 'Today' },
    { id: 2, name: 'Cardio Session', duration: '30 min', date: 'Yesterday' },
    { id: 3, name: 'Upper Body Strength', duration: '50 min', date: '2 days ago' },
    { id: 4, name: 'Yoga Flow', duration: '40 min', date: '3 days ago' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header - Matching HomePage style */}
      <View style={styles.header}>
        <Link href="/profile" asChild>
          <TouchableOpacity>
            <MaterialIcons name="account-circle" size={28} color="#fff" />
          </TouchableOpacity>
        </Link>

        <Text style={styles.headerTitle}>WORKOUTS</Text>

        <TouchableOpacity onPress={() => console.log('Notification clicked')}>
          <MaterialIcons name="notifications" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Current Workout */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CURRENT WORKOUT</Text>
          <TouchableOpacity style={styles.currentWorkoutCard}>
            <View style={styles.workoutInfo}>
              <MaterialIcons name="fitness-center" size={28} color="#ff4757" />
              <View style={styles.workoutTextContainer}>
                <Text style={styles.workoutName}>Start New Workout</Text>
                <Text style={styles.workoutDuration}>Tap to begin</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* Workout History */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>WORKOUT HISTORY</Text>
          {workouts.map((workout) => (
            <TouchableOpacity key={workout.id} style={styles.workoutCard}>
              <View style={styles.workoutInfo}>
                <MaterialIcons name="fitness-center" size={24} color="#ff4757" />
                <View style={styles.workoutTextContainer}>
                  <Text style={styles.workoutName}>{workout.name}</Text>
                  <View style={styles.workoutMeta}>
                    <Text style={styles.workoutDuration}>{workout.duration}</Text>
                    <Text style={styles.workoutDate}>{workout.date}</Text>
                  </View>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#aaa" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation - Matching HomePage style */}
      <View style={styles.bottomNavigation}>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="home" size={24} color="#aaa" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/track-workouts" asChild>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="fitness-center" size={24} color="#ff4757" />
            <Text style={styles.activeNavText}>Workouts</Text>
          </TouchableOpacity>
        </Link>
        
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
    padding: 20,
    backgroundColor: '#1e1e1e',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 80, // Extra padding for navigation
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#aaa',
    marginBottom: 15,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  currentWorkoutCard: {
    backgroundColor: '#252525',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  workoutCard: {
    backgroundColor: '#252525',
    borderRadius: 12,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  workoutInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workoutTextContainer: {
    marginLeft: 15,
  },
  workoutName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 5,
  },
  workoutDuration: {
    fontSize: 14,
    color: '#aaa',
  },
  workoutDate: {
    fontSize: 12,
    color: '#666',
    marginLeft: 10,
  },
  workoutMeta: {
    flexDirection: 'row',
    alignItems: 'center',
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

export default TrackWorkoutsPage;