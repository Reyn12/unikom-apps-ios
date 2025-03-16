import { StyleSheet, ScrollView, View as RNView, View } from 'react-native';
import { Text } from '@/components/Themed';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/homepage/Header';
import TodaySchedule from '@/components/homepage/TodaySchedule';


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

          <TodaySchedule />

          {/* Section baru untuk main content */}
          <View style={styles.mainSection2}>
            <Text style={styles.mainText}>Main Content Section</Text>

            {/* List item */}
            <View style={styles.listItem}>
              <Text style={styles.listTitle}>Pengumuman Akademik</Text>
              <Text style={styles.listDesc}>Jadwal UTS Semester Genap 2024/2025</Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.listTitle}>Info Kampus</Text>
              <Text style={styles.listDesc}>Webinar Teknologi AI - 20 Maret 2025</Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.listTitle}>Beasiswa</Text>
              <Text style={styles.listDesc}>Pendaftaran Beasiswa Prestasi dibuka!</Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.listTitle}>Kegiatan Mahasiswa</Text>
              <Text style={styles.listDesc}>Festival Teknologi UNIKOM 2025</Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.listTitle}>Lowongan Kerja</Text>
              <Text style={styles.listDesc}>PT. Global Tech mencari Frontend Developer</Text>
            </View>
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
    marginTop: -10,
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
    backgroundColor: '#F5F5F5', 
    padding: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 15,
    width: '100%', 
    height: 1000,
  },
  listItem: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  listDesc: {
    fontSize: 12,
    color: '#666',
  },
});