import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ConnectTrainersPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect with Trainers</Text>
      {/* Add your trainer connection content here */}
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

export default ConnectTrainersPage;