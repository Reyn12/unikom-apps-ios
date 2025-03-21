import { StyleSheet, ScrollView, View as RNView, View } from 'react-native';
import { Text } from '@/components/Themed';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/homepage/Header';
import TodaySchedule from '@/components/homepage/TodaySchedule';
import QuickAccess from '@/components/homepage/QuickAccess';
import Pengumuman from '@/components/homepage/Pengumuman';
import EventKampus from '@/components/homepage/EventKampus';
import ForumDiskusi from '@/components/homepage/ForumDiskusi';
import CardInfo from '@/components/homepage/CardInfo';

export default function TabOneScreen() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#1E3A8A" />
      <RNView style={styles.container}>
        {/* Header Section - hanya logo dan icon */}
        <Header studentName="M RENALDI" showGreeting={false} />

        {/* Main Content Section - Nanti diisi dengan komponen-komponen lain */}
        <ScrollView style={styles.mainSection}>
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
    backgroundColor: '#1E3A8A',
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
    backgroundColor: '#FEFEFE', 
    padding: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 15,
    width: '100%',
  },
});