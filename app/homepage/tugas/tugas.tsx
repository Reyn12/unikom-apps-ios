import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { ChevronLeft, BookOpen, Clock, Eye } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Colors from '@/constants/Colors';
import { dummyTasks } from '@/data/tugas';

function TugasScreen() {
  return (
    <>
      <ExpoStatusBar style="light" backgroundColor={Colors.primary} animated={true} />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }} edges={['top']}>
        <View style={[styles.container, { backgroundColor: Colors.primary }]}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <ChevronLeft size={25} color={Colors.putih} />
              <Text style={styles.title}>Daftar Tugas</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.mainSection}>
            {dummyTasks.map((task) => (
              <View key={task.id} style={styles.taskCard}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>{task.title}</Text>
                  <View style={[
                    styles.priorityBadge,
                    task.priority === 'Tinggi' ? styles.highPriority : styles.mediumPriority
                  ]}>
                    <Text style={styles.priorityText}>Prioritas {task.priority}</Text>
                  </View>
                </View>

                <View style={styles.subjectRow}>
                  <BookOpen size={16} color={Colors.primary} />
                  <Text style={styles.subjectText}>{task.subject}</Text>
                </View>

                <Text style={styles.taskDesc}>{task.description}</Text>

                <View style={styles.deadlineRow}>
                  <Clock size={16} color="#666" />
                  <Text style={styles.taskDate}>Deadline: {task.deadline}</Text>
                </View>

                <View style={styles.statusSection}>
                  <Text style={[
                    styles.statusText,
                    task.status === 'Belum dikerjakan' ? styles.statusPending : styles.statusInProgress
                  ]}>
                    {task.status}
                  </Text>

                  {task.progress > 0 && (
                    <View style={styles.progressContainer}>
                      <View style={[styles.progressBar, { width: `${task.progress}%` }]} />

                    </View>
                  )}
                  <Text style={styles.progressText}>{task.progress}% selesai</Text>
                </View>

                <TouchableOpacity style={styles.detailButton}>
                  <Eye size={16} color={Colors.primary} />
                  <Text style={styles.detailButtonText}>Lihat Detail</Text>
                </TouchableOpacity>
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
    marginTop: -40,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 15,
  },
  taskCard: {
    backgroundColor: Colors.putih,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  highPriority: {
    backgroundColor: '#ffebee',
  },
  mediumPriority: {
    backgroundColor: '#fff8e1',
  },
  priorityText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#d32f2f',
  },
  subjectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  subjectText: {
    fontSize: 14,
    color: Colors.primary,
    marginLeft: 6,
    fontWeight: '500',
  },
  taskDesc: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
    lineHeight: 20,
  },
  deadlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  taskDate: {
    fontSize: 13,
    color: '#666',
    marginLeft: 6,
  },
  statusSection: {
    marginBottom: 12,
  },
  statusText: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 4,
  },
  statusPending: {
    color: '#f44336',
  },
  statusInProgress: {
    color: '#ff9800',
  },
  progressContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    marginTop: 4,
    marginBottom: 10,
    position: 'relative',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#2196f3',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    alignSelf: 'flex-end',
  },
  detailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    marginTop: 4,
  },
  detailButtonText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 6,
  },
});

export default TugasScreen;