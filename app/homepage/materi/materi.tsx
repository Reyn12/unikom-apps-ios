import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { ChevronLeft, BookOpen, Download, FileText, Clock, ChevronRight } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { materiData } from '@/data/materi';

export default function Materi() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

  const toggleExpand = (courseId: number) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(courseId);
    }
  };

  return (
    <>
      <ExpoStatusBar style="light" backgroundColor={Colors.primary} animated={true} />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }} edges={['top']}>
        <View style={[styles.container, { backgroundColor: Colors.primary }]}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <ChevronLeft size={25} color={Colors.putih} />
              <Text style={styles.title}>Materi Kuliah</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.mainSection} showsVerticalScrollIndicator={false}>
            <View style={styles.infoCard}>
              <BookOpen size={24} color={Colors.primary} />
              <Text style={styles.infoText}>
                Semua materi kuliah tersedia di sini. Klik mata kuliah untuk melihat materi per pertemuan.
              </Text>
            </View>
            
            {materiData.map((course) => (
              <View key={course.id} style={styles.courseContainer}>
                <TouchableOpacity 
                  style={styles.courseHeader} 
                  onPress={() => toggleExpand(course.id)}
                  activeOpacity={0.7}
                >
                  <View style={styles.courseInfo}>
                    <Text style={styles.courseTitle}>{course.mataKuliah}</Text>
                    <Text style={styles.dosen}>{course.dosen}</Text>
                  </View>
                  <View style={styles.sksContainer}>
                    <Text style={styles.sksText}>3 SKS</Text>
                  </View>
                </TouchableOpacity>
                
                {expandedCourse === course.id && (
                  <View style={styles.materiContainer}>
                    {course.pertemuan.map((materi) => (
                      <TouchableOpacity 
                        key={materi.id} 
                        style={styles.materiItem}
                        activeOpacity={0.7}
                      >
                        <View style={styles.materiNumberContainer}>
                          <Text style={styles.materiNumber}>{materi.id}</Text>
                        </View>
                        <View style={styles.materiContent}>
                          <Text style={styles.materiTitle}>{materi.judul}</Text>
                          <Text style={styles.materiDate}>{materi.tanggal}</Text>
                        </View>
                        <View style={styles.materiActions}>
                          <View style={styles.fileIcons}>
                            <View style={styles.fileIcon}>
                              <FileText size={16} color="#1E88E5" />
                            </View>
                            <View style={styles.fileIcon}>
                              <FileText size={16} color="#1E88E5" />
                            </View>
                          </View>
                          <ChevronRight size={18} color="#757575" />
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: Colors.primary,
    color: Colors.putih,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 15,
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 16,
    alignItems: 'center',
  },
  infoText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#0D47A1',
  },
  courseContainer: {
    marginBottom: 16,
    overflow: 'hidden',
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.putih,
  },
  dosen: {
    fontSize: 14,
    color: Colors.putih,
    opacity: 0.8,
    marginTop: 2,
  },
  sksContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  sksText: {
    color: Colors.putih,
    fontSize: 12,
    fontWeight: '500',
  },
  materiContainer: {
    backgroundColor: Colors.putih,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  materiItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  materiNumberContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  materiNumber: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4285F4',
  },
  materiContent: {
    flex: 1,
  },
  materiTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  materiDate: {
    fontSize: 12,
    color: '#757575',
    marginTop: 2,
  },
  materiActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIcons: {
    flexDirection: 'row',
    marginRight: 8,
  },
  fileIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
});