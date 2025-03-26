import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { Link } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons'; 

const AgeSelectionPage: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 16);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios'); 
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const calculateAge = (birthDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step 1 of 6</Text>
      <Text style={styles.subtitle}>WHAT IS YOUR DATE OF BIRTH?</Text>

      {/* Date Picker Input */}
      <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
        <MaterialIcons name="calendar-today" size={24} color="#666" style={styles.icon} />
        <Text style={styles.dateText}>
          {date.toLocaleDateString()} (Age: {calculateAge(date)})
        </Text>
      </TouchableOpacity>

      {/* Date Picker */}
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
          maximumDate={maxDate}
          minimumDate={new Date(1900, 0, 1)} 
        />
      )}

      {/* Next Steps Button */}
      <Link href="/weight-selection" asChild>
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
    </View>
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
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#333', 
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#fff', 
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

export default AgeSelectionPage;