import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

export default function ScheduleScreen() {

  useFocusEffect(
    React.useCallback(() => {
      // Ini akan dijalankan saat screen mendapat fokus
      RNStatusBar.setBarStyle('dark-content');    
      return () => {
        // Cleanup jika perlu
      };
    }, [])
  );

  return (
    <>
    <ExpoStatusBar style="dark" backgroundColor="#1E3A8A" animated={true}/>
    <View style={styles.container}>
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
});