import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Schedule } from '@/types/schedule';
import Colors from '@/constants/Colors';
import { Dot, Video, FileText } from 'lucide-react-native';

interface JadwalMatkulProps {
  schedules: Schedule[];
  selectedDay: string;
}

const JadwalMatkul: React.FC<JadwalMatkulProps> = ({ schedules, selectedDay }) => {
  // Filter jadwal berdasarkan hari yang dipilih
  const filteredSchedules = schedules.filter(
    schedule => schedule.day === selectedDay
  ).sort((a, b) => a.startTime.localeCompare(b.startTime));

  // Jika tidak ada jadwal
  if (filteredSchedules.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyIconContainer}>
          <FileText size={60} color="#CCCCCC" />
        </View>
        <Text style={styles.emptyTitle}>Tidak ada jadwal</Text>
        <Text style={styles.emptyText}>Kamu tidak memiliki jadwal kuliah untuk hari {selectedDay}</Text>
        <View style={styles.emptyTips}>
          <Text style={styles.emptyTipsText}>Gunakan waktu luang untuk:</Text>
          <View style={styles.tipItem}>
            <View style={styles.tipBullet} />
            <Text style={styles.tipText}>Mengerjakan tugas</Text>
          </View>
          <View style={styles.tipItem}>
            <View style={styles.tipBullet} />
            <Text style={styles.tipText}>Belajar materi berikutnya</Text>
          </View>
          <View style={styles.tipItem}>
            <View style={styles.tipBullet} />
            <Text style={styles.tipText}>Istirahat dan refreshing</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {filteredSchedules.map((item, index) => (
        <View key={item.id} style={styles.timelineContainer}>
          {/* Waktu */}
          <View style={styles.timeContainer}>
            <Text style={styles.startTime}>{item.startTime}</Text>
            <Text style={styles.endTime}>{item.endTime}</Text>
          </View>

          {/* Garis Timeline */}
          <View style={styles.timelineWrapper}>
            <View style={[styles.timelineDot, { backgroundColor: getRandomColor(index) }]} />
            <View style={styles.timelineLine} />
          </View>

          {/* Card Matkul */}
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: getCardColor(index) }]}
            activeOpacity={0.8}
          >
            {/* Header Card */}
            <View style={styles.cardHeader}>
              <Text style={styles.courseName}>{item.course.name}</Text>
              <TouchableOpacity style={styles.moreButton}>
                <Text style={styles.moreButtonText}>•••</Text>
              </TouchableOpacity>
            </View>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
              {item.course.code} • {item.room}
            </Text>

            {/* Dosen */}
            <View style={styles.lecturerContainer}>
              <View style={styles.avatarContainer}>
                <Text style={styles.avatarText}>
                  {getInitials(item.lecturer.name)}
                </Text>
              </View>
              <Text style={styles.lecturerName}>{item.lecturer.name}</Text>
            </View>

            {/* Platform */}
            <View style={styles.platformContainer}>
              {item.type === 'Tatap Muka' ? (
                <Dot color="#fff" size={20} />
              ) : (
                <Video color="#fff" size={18} />
              )}
              <Text style={styles.platformText}>{item.type}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

// Fungsi untuk mendapatkan warna card berdasarkan index
const getCardColor = (index: number) => {
  const colors = [
    '#7B83EB', // Ungu kebiruan
    '#5ECFB1', // Tosca
    '#F8C471', // Kuning
  ];
  return colors[index % colors.length];
};

// Fungsi untuk mendapatkan warna dot timeline
const getRandomColor = (index: number) => {
  const colors = ['#5E60CE', '#48BFE3', '#56CFE1'];
  return colors[index % colors.length];
};

// Fungsi untuk mendapatkan inisial nama
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  timelineContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeContainer: {
    width: 50,
    alignItems: 'center',
  },
  startTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  endTime: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  timelineWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  timelineDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.primary,
    zIndex: 1,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#E0E0E0',
    position: 'absolute',
    top: 14,
    bottom: -20,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#7B83EB',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  moreButton: {
    padding: 4,
  },
  moreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    transform: [{ rotate: '90deg' }],
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  lecturerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  avatarContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  avatarText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  lecturerName: {
    fontSize: 14,
    color: '#fff',
  },
  platformContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  platformText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 30,
  },
  emptyIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  emptyTips: {
    alignSelf: 'stretch',
    backgroundColor: '#F9F9F9',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  emptyTipsText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 12,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  tipBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    marginRight: 10,
  },
  tipText: {
    fontSize: 14,
    color: '#666',
  },
});

export default JadwalMatkul;