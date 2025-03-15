import { StyleSheet, ScrollView, View as RNView } from 'react-native';
import { Text } from '@/components/Themed';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/homepage/Header';

export default function TabOneScreen() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#1E3A8A" />
      <RNView style={styles.container}>
        {/* Header Section */}
        <Header studentName="M RENALDI" />
        
        {/* Main Content Section - Nanti diisi dengan komponen-komponen lain */}
        <ScrollView style={styles.mainSection}>
          <Text style={styles.mainText}>Main Content Section</Text>
          <Text>Di sini nanti kita akan memanggil komponen-komponen lainnya</Text>
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
    backgroundColor: '#F5F5F5', // Light gray background
    padding: 16,
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});