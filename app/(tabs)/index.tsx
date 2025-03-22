import { StyleSheet, ScrollView, View as RNView, View, RefreshControl } from 'react-native';
import { Text } from '@/components/Themed';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import Header from '@/components/homepage/Header';
import TodaySchedule from '@/components/homepage/TodaySchedule';
import QuickAccess from '@/components/homepage/QuickAccess';
import Pengumuman from '@/components/homepage/Pengumuman';
import EventKampus from '@/components/homepage/EventKampus';
import ForumDiskusi from '@/components/homepage/ForumDiskusi';
import CardInfo from '@/components/homepage/CardInfo';
import Colors from '@/constants/Colors';

export default function TabOneScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  
    // Di sini kamu bisa panggil API atau reload data
    // Misalnya:
    // fetchScheduleData().then(() => setRefreshing(false));
  
    // Simulasi loading
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

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
      <RNView style={styles.container}>
        {/* Header Section - hanya logo dan icon */}
        <Header studentName="M RENALDI" showGreeting={false} />

        {/* Main Content Section - Nanti diisi dengan komponen-komponen lain */}
        <ScrollView style={styles.mainSection} refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
          {/* Greeting di dalam ScrollView */}
          <Text style={styles.greeting}>
            HALO, <Text style={styles.studentNameText}>M RENALDI</Text>
          </Text>

          {/* Today Schedule */}
          <TodaySchedule />

          {/* Section baru untuk main content */}
          <View style={styles.mainSection2}>
            <QuickAccess />
            <Pengumuman />
            <EventKampus />
            <ForumDiskusi />
            <CardInfo />
          </View>
        </ScrollView>
      </RNView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainSection: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginTop: -15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 15, 
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: '#FFFFFF',
  },
  studentNameText: {
    color: '#FFFFFF',
  },

  // Main Section 2
  mainSection2: {
    backgroundColor: Colors.putih, 
    padding: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 15,
    width: '100%',
  },
});