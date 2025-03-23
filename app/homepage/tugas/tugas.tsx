import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Colors from '@/constants/Colors';

export default function TugasScreen() {
  return (
    <>
      <ExpoStatusBar style="light" backgroundColor={Colors.primary} animated={true} />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }} edges={['top']}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <ChevronLeft size={25} color={Colors.putih} />
              <Text style={styles.title}>Daftar Tugas</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.mainSection}>
            {/* Contoh daftar tugas */}
            {[...Array(20)].map((_, index) => (
              <View key={index} style={styles.taskItem}>
                <View style={styles.taskContent}>
                  <Text style={styles.taskTitle}>Tugas #{index + 1}</Text>
                  <Text style={styles.taskDesc}>Deskripsi tugas yang harus dikerjakan</Text>
                  <Text style={styles.taskDate}>Deadline: 30 Maret 2025</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.putih,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 40,
    backgroundColor: Colors.primary,
  },
  backButton: {
    flexDirection: 'row',
    marginRight: 21,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.putih,
    marginLeft: 5,
  },
  mainSection: {
    flex: 1,
    backgroundColor: Colors.putih,
    marginTop: -35,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  taskItem: {
    backgroundColor: Colors.putih,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary,
  },
  taskDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  taskDate: {
    fontSize: 12,
    color: '#999',
    fontWeight: '500',
  }
})