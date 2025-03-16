import { StyleSheet, ScrollView, View as RNView, View } from 'react-native';
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
          <View style={styles.swipeIndicator} />
          <Text style={styles.mainText}>Main Content Section</Text>
          <Text>Coming Soon ...</Text>
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
    backgroundColor: '#F5F5F5',
    padding: 16,
    marginTop: -10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 15, // Kasih ruang untuk garis
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  swipeIndicator: {
    width: 40,
    height: 5,
    backgroundColor: '#CCCCCC',
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 15,
  },
});