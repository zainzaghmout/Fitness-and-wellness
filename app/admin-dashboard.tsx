import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 8;
const CARD_WIDTH = (width - 40 - CARD_MARGIN) / 2;

const AdminDashboard: React.FC = () => {
  const adminFeatures = [
    { 
      name: 'Content Management', 
      icon: 'edit',
      route: '/content-management'
    },
    { 
      name: 'Trainer Verification', 
      icon: 'verified-user',
      route: '/trainer-verification'
    },
    { 
      name: 'User Analytics', 
      icon: 'analytics',
      route: '/user-analytics'
    },
    { 
      name: 'Subscriptions', 
      icon: 'payment',
      route: '/subscription-management'
    },
    { 
      name: 'Workout Plans', 
      icon: 'fitness-center',
      route: '/workout-plan-creation'
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Admin Dashboard</Text>
          <Text style={styles.headerSubtitle}>Administrator Tools</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Admin Features Grid */}
        <View style={styles.gridContainer}>
          {adminFeatures.map((feature, index) => (
            <Link href={feature.route} asChild key={index}>
              <TouchableOpacity style={styles.gridItem}>
                <View style={styles.iconContainer}>
                  <MaterialIcons 
                    name={feature.icon} 
                    size={32} 
                    color="#ff4757" 
                  />
                </View>
                <Text style={styles.gridText}>{feature.name}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </View>

      {/* Admin Navigation */}
      <View style={styles.bottomNavigation}>
        <Link href="/admin-dashboard" asChild>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="dashboard" size={24} color="#ff4757" />
            <Text style={styles.activeNavText}>Dashboard</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/sign-in" asChild>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="logout" size={24} color="#aaa" />
            <Text style={styles.navText}>Logout</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: '#1e1e1e',
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 0.9,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: CARD_MARGIN,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  iconContainer: {
    backgroundColor: '#252525',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  gridText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#1e1e1e',
    borderTopWidth: 1,
    borderTopColor: '#2a2a2a',
  },
  navButton: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  navText: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 6,
    fontWeight: '500',
  },
  activeNavText: {
    fontSize: 12,
    color: '#ff4757',
    marginTop: 6,
    fontWeight: '600',
  },
});

export default AdminDashboard;