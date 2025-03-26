import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UserAnalyticsPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Analytics</Text>
      {/* Add your user analytics content here */}
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

export default UserAnalyticsPage;