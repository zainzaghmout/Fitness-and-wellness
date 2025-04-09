import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const TrainerDashboard: React.FC = () => {
  const clients = [
    { id: 1, name: 'Zain Zaghmout', lastWorkout: '2 days ago', progress: 75 },
    { id: 2, name: 'John Doe', lastWorkout: 'Yesterday', progress: 60 },
    { id: 3, name: 'Jane Smith', lastWorkout: 'Today', progress: 90 },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TRAINER DASHBOARD</Text>
        <Link href="/create-workout-plan" asChild>
          <TouchableOpacity>
            <MaterialIcons name="add" size={28} color="#ff4757" />
          </TouchableOpacity>
        </Link>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Clients Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>YOUR CLIENTS</Text>
          {clients.map((client) => (
            <Link key={client.id} href={`/client-details/${client.id}`} asChild>
              <TouchableOpacity style={styles.clientCard}>
                <View style={styles.clientInfo}>
                  <Text style={styles.clientName}>{client.name}</Text>
                  <Text style={styles.clientWorkout}>Last workout: {client.lastWorkout}</Text>
                </View>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${client.progress}%` }]} />
                  </View>
                  <Text style={styles.progressText}>{client.progress}%</Text>
                </View>
                <MaterialIcons name="chevron-right" size={24} color="#666" />
              </TouchableOpacity>
            </Link>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>QUICK ACTIONS</Text>
          <View style={styles.actionsContainer}>
            <Link href="/create-workout-plan" asChild>
              <TouchableOpacity style={styles.actionButton}>
                <MaterialIcons name="fitness-center" size={28} color="#ff4757" />
                <Text style={styles.actionText}>Create Plan</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/view-progress" asChild>
              <TouchableOpacity style={styles.actionButton}>
                <MaterialIcons name="trending-up" size={28} color="#ff4757" />
                <Text style={styles.actionText}>View Progress</Text>
              </TouchableOpacity>
            </Link>
          </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
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
  clientCard: {
    backgroundColor: '#252525',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  clientInfo: {
    flex: 1,
  },
  clientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  clientWorkout: {
    fontSize: 14,
    color: '#aaa',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  progressBar: {
    width: 100,
    height: 4,
    backgroundColor: '#333',
    borderRadius: 2,
    overflow: 'hidden',
    marginRight: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ff4757',
  },
  progressText: {
    fontSize: 14,
    color: '#ff4757',
    fontWeight: '600',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#252525',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    width: '48%',
  },
  actionText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
    fontWeight: '600',
  },
});

export default TrainerDashboard;