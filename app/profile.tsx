import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const ProfilePage: React.FC = () => {
  const userStats = [
    { label: 'Workouts', value: '24' },
    { label: 'Goals', value: '3' },
    { label: 'Streak', value: '7 days' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Zain Zaghmout</Text>
          <Text style={styles.email}>zainzaghmout@gmail.com</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          {userStats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Profile Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="edit" size={24} color="#ff4757" />
            <Text style={styles.actionText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="settings" size={24} color="#ff4757" />
            <Text style={styles.actionText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Simplified Bottom Navigation Bar with only Home and Profile */}
      <View style={styles.bottomNavigation}>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="home" size={24} color="#aaa" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/profile" asChild>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="person" size={24} color="#ff4757" />
            <Text style={styles.activeNavText}>Profile</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 80, // Extra padding to account for navigation bar
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#ff4757',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#aaa',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    backgroundColor: '#252525',
    borderRadius: 15,
    padding: 20,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff4757',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#aaa',
  },
  actionsContainer: {
    marginBottom: 30,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252525',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  actionText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 15,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#1e1e1e',
    borderTopWidth: 1,
    borderTopColor: '#333',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    alignItems: 'center',
    flex: 1, // Make buttons take equal space
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

export default ProfilePage;
