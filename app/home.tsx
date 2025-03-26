import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const HomePage: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Link href="/profile" asChild>
          <TouchableOpacity>
            <MaterialIcons name="account-circle" size={28} color="#fff" />
          </TouchableOpacity>
        </Link>

        <Text style={styles.headerTitle}>VITA CORE</Text>

        <TouchableOpacity onPress={() => console.log('Notification clicked')}>
          <MaterialIcons name="notifications" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome Back</Text>

        {/* Feature Grid */}
        <View style={styles.gridContainer}>
          <Link href="/track-workouts" asChild>
            <TouchableOpacity style={styles.gridItem}>
              <MaterialIcons name="fitness-center" size={32} color="#ff4757" />
              <Text style={styles.gridText}>Workouts</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/log-meals" asChild>
            <TouchableOpacity style={styles.gridItem}>
              <MaterialIcons name="restaurant" size={32} color="#ff4757" />
              <Text style={styles.gridText}>Nutrition</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/set-goals" asChild>
            <TouchableOpacity style={styles.gridItem}>
              <MaterialIcons name="flag" size={32} color="#ff4757" />
              <Text style={styles.gridText}>Goals</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/connect-trainers" asChild>
            <TouchableOpacity style={styles.gridItem}>
              <MaterialIcons name="people" size={32} color="#ff4757" />
              <Text style={styles.gridText}>Trainers</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="home" size={24} color="#ff4757" />
            <Text style={styles.activeNavText}>Home</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/diary" asChild>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="book" size={24} color="#aaa" />
            <Text style={styles.navText}>Diary</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/plans" asChild>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="calendar-today" size={24} color="#aaa" />
            <Text style={styles.navText}>Plans</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/more" asChild>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="menu" size={24} color="#aaa" />
            <Text style={styles.navText}>More</Text>
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
  content: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 30,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: '#333',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  gridText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    marginTop: 10,
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

export default HomePage;