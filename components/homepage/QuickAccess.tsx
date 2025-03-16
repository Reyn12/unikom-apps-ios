import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/Themed';
import { BookOpen, GraduationCap, ClipboardList, Calendar } from 'lucide-react-native';

interface QuickAccessItemProps {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  onPress: () => void;
}

const QuickAccessItem = ({ icon, label, badge, onPress }: QuickAccessItemProps) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.iconContainer}>
        {icon}
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const QuickAccess = () => {
  return (
    <View>
      <Text style={styles.title}>Quick Access</Text>
      <View style={styles.container}>
        <View style={styles.itemsContainer}>
          <QuickAccessItem 
            icon={<ClipboardList size={24} color="#1E3A8A" />} 
            label="Tugas" 
            badge={3}
            onPress={() => {}} 
          />
          <QuickAccessItem 
            icon={<BookOpen size={24} color="#1E3A8A" />} 
            label="Materi" 
            badge={12}
            onPress={() => {}} 
          />
          <QuickAccessItem 
            icon={<GraduationCap size={24} color="#1E3A8A" />} 
            label="Nilai" 
            onPress={() => {}} 
          />
          <QuickAccessItem 
            icon={<Calendar size={24} color="#1E3A8A" />} 
            label="Kalender" 
            onPress={() => {}} 
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1E3A8A',
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    alignItems: 'center',
    width: '22%',
  },
  iconContainer: {
    position: 'relative',
    backgroundColor: '#E6EFFF', // Warna biru muda/terang
    borderRadius: 50, // Nilai tinggi untuk membuat bentuk bulat/oval
    padding: 16,
    marginBottom: 8,
    width: 60, // Tetapkan lebar
    height: 60, // Tetapkan tinggi yang sama untuk bentuk bulat
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#1E3A8A',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
  },
});

export default QuickAccess;