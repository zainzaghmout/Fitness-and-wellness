import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Animated } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const SetGoalsPage: React.FC = () => {
  const goals = [
    { id: 1, name: 'Weight Loss', target: 'Lose 5kg', progress: 60, icon: 'fitness-center' },
    { id: 2, name: 'Muscle Gain', target: 'Gain 2kg muscle', progress: 35, icon: 'body' },
    { id: 3, name: 'Workout Consistency', target: '5 workouts/week', progress: 80, icon: 'calendar-today' },
  ];

  // Animation values
  const navScale = React.useRef(new Animated.Value(1)).current;

  const handleNavPress = () => {
    Animated.sequence([
      Animated.timing(navScale, {
        toValue: 0.95,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.spring(navScale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Link href="/home" asChild>
          <TouchableOpacity>
            <MaterialIcons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>GOALS</Text>
        <TouchableOpacity onPress={() => console.log('Add goal clicked')}>
          <MaterialIcons name="add" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Current Goal */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SET NEW GOAL</Text>
          <TouchableOpacity style={styles.currentCard}>
            <View style={styles.goalIconContainer}>
              <MaterialIcons name="flag" size={28} color="#ff4757" />
            </View>
            <View style={styles.goalTextContainer}>
              <Text style={styles.goalName}>Create New Goal</Text>
              <Text style={styles.goalSubtext}>Tap to set your target</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#aaa" />
          </TouchableOpacity>
        </View>

        {/* Goals List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>YOUR GOALS</Text>
          {goals.map((goal) => (
            <TouchableOpacity key={goal.id} style={styles.goalCard}>
              <View style={styles.goalIcon}>
                <MaterialIcons name={goal.icon} size={24} color="#ff4757" />
              </View>
              <View style={styles.goalDetails}>
                <Text style={styles.goalTitle}>{goal.name}</Text>
                <Text style={styles.goalTarget}>{goal.target}</Text>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${goal.progress}%` }]} />
                  </View>
                  <Text style={styles.progressText}>{goal.progress}%</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Professional Bottom Navigation */}
      <View style={styles.navContainer}>
        <View style={styles.navBackground} />
        
        <Animated.View style={[styles.navContent, { transform: [{ scale: navScale }] }]}>
          <Link href="/home" asChild>
            <TouchableOpacity 
              style={styles.navButton}
              onPress={handleNavPress}
              activeOpacity={0.7}
            >
              <MaterialIcons name="home" size={24} color="#aaa" />
              <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
          </Link>

          <View style={styles.navDivider} />

          <Link href="/set-goals" asChild>
            <TouchableOpacity 
              style={styles.navButton}
              onPress={handleNavPress}
              activeOpacity={0.7}
            >
              <View style={styles.activeIndicator}>
                <MaterialIcons name="flag" size={24} color="#ff4757" />
              </View>
              <Text style={styles.activeNavText}>Goals</Text>
            </TouchableOpacity>
          </Link>
        </Animated.View>
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
  currentCard: {
    backgroundColor: '#252525',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff4757',
    marginBottom: 15,
  },
  goalIconContainer: {
    backgroundColor: 'rgba(255, 71, 87, 0.2)',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  goalTextContainer: {
    flex: 1,
  },
  goalName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  goalSubtext: {
    fontSize: 14,
    color: '#aaa',
  },
  goalCard: {
    backgroundColor: '#252525',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalIcon: {
    backgroundColor: 'rgba(255, 71, 87, 0.2)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  goalDetails: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  goalTarget: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
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
  // Navigation Styles (identical to previous pages)
  navContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: 'center',
  },
  navBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: '#1e1e1e',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(255,255,255,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  navContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  navButton: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    width: '40%',
  },
  activeIndicator: {
    backgroundColor: 'rgba(255, 71, 87, 0.2)',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  navDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  navText: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 4,
    fontFamily: 'Inter-Medium',
  },
  activeNavText: {
    fontSize: 12,
    color: '#ff4757',
    marginTop: 4,
    fontFamily: 'Inter-SemiBold',
  },
});

export default SetGoalsPage;