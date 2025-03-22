import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import Colors from '@/constants/Colors';
import Header from '@/components/schedule/Header';
import Hari from '@/components/schedule/Hari';

export default function ScheduleScreen() {

  useFocusEffect(
    React.useCallback(() => {
      // Ini akan dijalankan saat screen mendapat fokus
      RNStatusBar.setBarStyle('light-content');    
      return () => {
        // Cleanup jika perlu
      };
    }, [])
  );

  return (
    <>
    <ExpoStatusBar style="light" backgroundColor={Colors.primary} animated={true}/>
    <View style={styles.container}>
      <Header />
      {/* Main Section */}
      <View style={styles.mainSection}>
        {/* Hari */}
        <Hari />
        <ScrollView>
        </ScrollView>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  mainSection: {
    flex: 1,
    height: 2000,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 16,
  },
});