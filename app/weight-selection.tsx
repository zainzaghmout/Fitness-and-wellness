import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Animated } from 'react-native';
import { Link } from 'expo-router';

const WeightSelectionPage: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'KG' | 'LBS'>('KG'); 
  const fadeAnim = useState(new Animated.Value(0))[0]; 

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const toggleUnit = (selectedUnit: 'KG' | 'LBS') => {
    setUnit(selectedUnit);
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.title}>Step 2 of 6</Text>
      <Text style={styles.subtitle}>HOW MUCH DO YOU WEIGHT?</Text>

      {/* Weight Unit Toggle */}
      <View style={styles.unitToggle}>
        <TouchableOpacity
          style={[styles.unitButton, unit === 'KG' && styles.selectedUnitButton]}
          onPress={() => toggleUnit('KG')}
        >
          <Text style={[styles.unitText, unit === 'KG' && styles.selectedUnitText]}>KG</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.unitButton, unit === 'LBS' && styles.selectedUnitButton]}
          onPress={() => toggleUnit('LBS')}
        >
          <Text style={[styles.unitText, unit === 'LBS' && styles.selectedUnitText]}>LBS</Text>
        </TouchableOpacity>
      </View>

      {/* Weight Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={`Enter your weight (${unit})`}
          placeholderTextColor="#666"
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />
      </View>

      {/* Next Steps Button */}
      <Link href="/goal-weight-selection" asChild>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>NEXT STEPS</Text>
        </TouchableOpacity>
      </Link>

      {/* Skip Button */}
      <Link href="/home" asChild>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </Link>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e', 
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff', 
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#aaa', 
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 30,
  },
  unitToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  unitButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#333', 
  },
  selectedUnitButton: {
    backgroundColor: '#ff4757', 
  },
  unitText: {
    fontSize: 16,
    color: '#fff', 
    fontWeight: '500',
  },
  selectedUnitText: {
    color: '#fff', 
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#333', 
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#fff', 
    textAlign: 'center',
  },
  nextButton: {
    width: '100%',
    backgroundColor: '#ff4757', 
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  skipButton: {
    marginTop: 20,
  },
  skipText: {
    color: '#ff4757',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default WeightSelectionPage;