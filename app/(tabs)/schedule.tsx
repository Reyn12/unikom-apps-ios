import { ScrollView, RefreshControl, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
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
  const [refreshing, setRefreshing] = React.useState(false);

  const [selectedDay, setSelectedDay] = React.useState(() => {
    const today = new Date();
    const hariList = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    return hariList[today.getDay()];
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  
    // Di sini kamu bisa panggil API atau reload data
    // Misalnya:
    // fetchScheduleData().then(() => setRefreshing(false));
  
    // Simulasi loading
    setTimeout(() => {
      // Reset ke hari ini setelah refresh selesai
      const today = new Date();
      const hariList = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      setSelectedDay(hariList[today.getDay()]);
      
      setRefreshing(false);
    }, 500);
  }, []);

  const handleDaySelect = (day: string) => {
    // Konversi format hari dari komponen Hari ke format di data schedules
    const dayMap: { [key: string]: string } = {
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
      <ExpoStatusBar style="light" backgroundColor={Colors.primary} animated={true} />
      <View style={styles.container}>
        <Header />
        {/* Main Section */}
        <View style={styles.mainSection}>
          {/* Hari */}
          <Hari onSelectDay={handleDaySelect} activeDay={selectedDay} />
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[Colors.primary]}
                tintColor={Colors.primary}
              />
            }
          >
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
    paddingTop: 5,
  },
});