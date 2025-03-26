import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LogMealsPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log Meals</Text>
      {/* Add your meal logging content here */}
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

export default LogMealsPage;