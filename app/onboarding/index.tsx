import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini halaman Boarding</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.putih,
  },
  text: {
    fontSize: 24,
    color: Colors.primary,
  },
});