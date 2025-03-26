import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TrackWorkoutsPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Workouts</Text>
      {/* Add your workout tracking content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default TrackWorkoutsPage;