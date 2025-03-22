import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import Colors from '@/constants/Colors';
import Header from '@/components/schedule/Header';
import Hari from '@/components/schedule/Hari';
import JadwalMatkul from '@/components/schedule/JadwalMatkul';
import { schedules } from '@/data/schedules';

export default function ScheduleScreen() {
  const [selectedDay, setSelectedDay] = React.useState(() => {
    const today = new Date();
    const hariList = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    return hariList[today.getDay()];
  });
  
  const handleDaySelect = (day: string) => {
    // Konversi format hari dari komponen Hari ke format di data schedules
    const dayMap: {[key: string]: string} = {
      'Min': 'Minggu',
      'Sen': 'Senin',
      'Sel': 'Selasa',
      'Rab': 'Rabu',
      'Kam': 'Kamis',
      'Jum': 'Jumat',
      'Sab': 'Sabtu'
    };
    
    setSelectedDay(dayMap[day] || day);
  };

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
        <Hari onSelectDay={handleDaySelect} />
        <ScrollView>
          {/* Jadwal Matkul */}
          <JadwalMatkul schedules={schedules} selectedDay={selectedDay} />
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