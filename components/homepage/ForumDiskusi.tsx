import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MessageSquare } from 'lucide-react-native';

interface ForumDiskusiProps {
  onPress?: () => void;
}

const ForumDiskusi: React.FC<ForumDiskusiProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconTitle}>
          <MessageSquare size={18} color="#4169e1" />
          <Text style={styles.title}>Forum Diskusi / Chat Kelas</Text>
        </View>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>5 baru</Text>
        </View>
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.messageContainer}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>D</Text>
          </View>
          
          <View style={styles.messageContent}>
            <Text style={styles.senderName}>Dosen Irawan</Text>
            <Text style={styles.messagePreview}>Tugas dikumpulkan besok pagi</Text>
          </View>
          
          <Text style={styles.timeStamp}>10:45</Text>
        </View>
        
        <TouchableOpacity>
          <Text style={styles.viewAllText}>Lihat semua pesan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e8eaf1',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e8eaf1',
    padding: 16,
  },
  iconTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 8,
  },
  badgeContainer: {
    backgroundColor: '#ff4d4f',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  contentContainer: {
    padding: 16,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#e6f7ff',
    padding: 10,
    borderRadius: 12,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#c1e0ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1890ff',
  },
  messageContent: {
    flex: 1,
  },
  senderName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 2,
  },
  messagePreview: {
    fontSize: 13,
    color: '#666',
  },
  timeStamp: {
    fontSize: 12,
    color: '#999',
  },
  viewAllText: {
    color: '#4169e1',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ForumDiskusi;