import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ViewProgress = () => {
  const [selectedClient, setSelectedClient] = useState(0);

  // Simple mock data
  const clients = [
    { name: 'Zain Zaghmout', progress: 75 },
    { name: 'John Doe', progress: 60 },
    { name: 'Jane Smith', progress: 90 },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { /* Handle back action */ }}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PROGRESS TRACKING</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        {/* Client Selector */}
        <Text style={styles.sectionTitle}>SELECT CLIENT</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.clientList}>
          {clients.map((client, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.clientButton, selectedClient === index && styles.selectedClientButton]}
              onPress={() => setSelectedClient(index)}
            >
              <Text style={[styles.clientButtonText, selectedClient === index && styles.selectedClientButtonText]}>
                {client.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Progress Overview */}
        <Text style={styles.sectionTitle}>PROGRESS OVERVIEW</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{clients[selectedClient].name}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${clients[selectedClient].progress}%` }]} />
          </View>
          <Text style={styles.progressText}>Progress: {clients[selectedClient].progress}%</Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="add" size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Record New Data</Text>
        </TouchableOpacity>
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
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#aaa',
    marginBottom: 12,
    marginTop: 20,
  },
  clientList: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  clientButton: {
    backgroundColor: '#252525',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  selectedClientButton: {
    backgroundColor: '#ff4757',
  },
  clientButtonText: {
    color: '#aaa',
  },
  selectedClientButtonText: {
    color: '#fff',
  },
  card: {
    backgroundColor: '#252525',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#333',
    borderRadius: 3,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ff4757',
  },
  progressText: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'right',
  },
  actionButton: {
    backgroundColor: '#ff4757',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ViewProgress;
