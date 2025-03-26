import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DiaryPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diary</Text>
      {/* Add your diary content here */}
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

export default DiaryPage;