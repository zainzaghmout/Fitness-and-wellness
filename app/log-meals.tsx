import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const LogMealsPage: React.FC = () => {
  const meals = [
    { id: 1, name: 'Breakfast - Scrambled Eggs', time: '8:00 AM' },
    { id: 2, name: 'Lunch - Grilled Chicken Salad', time: '12:30 PM' },
    { id: 3, name: 'Dinner - Veggie Stir Fry', time: '7:00 PM' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Link href="/profile" asChild>
          <TouchableOpacity>
            <MaterialIcons name="account-circle" size={28} color="#fff" />
          </TouchableOpacity>
        </Link>

        <Text style={styles.headerTitle}>MEALS</Text>

        <TouchableOpacity onPress={() => console.log('Notification clicked')}>
          <MaterialIcons name="notifications" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Meal Logging Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LOG YOUR MEAL</Text>
          <TouchableOpacity style={styles.currentMealCard}>
            <View style={styles.mealInfo}>
              <MaterialIcons name="restaurant" size={28} color="#ff4757" />
              <View style={styles.mealTextContainer}>
                <Text style={styles.mealName}>Log a New Meal</Text>
                <Text style={styles.mealTime}>Tap to begin</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* Meal History */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>MEAL HISTORY</Text>
          {meals.map((meal) => (
            <TouchableOpacity key={meal.id} style={styles.mealCard}>
              <View style={styles.mealInfo}>
                <MaterialIcons name="restaurant" size={24} color="#ff4757" />
                <View style={styles.mealTextContainer}>
                  <Text style={styles.mealName}>{meal.name}</Text>
                  <Text style={styles.mealTime}>{meal.time}</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#aaa" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="home" size={24} color="#aaa" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/log-meals" asChild>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="restaurant" size={24} color="#ff4757" />
            <Text style={styles.activeNavText}>Meals</Text>
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
  contentContainer: {
    padding: 20,
    paddingBottom: 80, // Extra padding for navigation
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#aaa',
    marginBottom: 15,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  currentMealCard: {
    backgroundColor: '#252525',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  mealCard: {
    backgroundColor: '#252525',
    borderRadius: 12,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  mealInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mealTextContainer: {
    marginLeft: 15,
  },
  mealName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 5,
  },
  mealTime: {
    fontSize: 14,
    color: '#aaa',
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

export default LogMealsPage;
