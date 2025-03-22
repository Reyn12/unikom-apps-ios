import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import Colors from '@/constants/Colors';
import { MapPin, Search, ZoomIn } from 'lucide-react-native';

const Peta = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <MapPin size={20} color={Colors.primary} />
          <Text style={styles.headerTitle}>Peta Kampus</Text>
        </View>
      </View>
      
      {/* Area Peta (Coming Soon) */}
      <View style={styles.mapContainer}>
        <View style={styles.comingSoonOverlay}>
          <Text style={styles.comingSoonText}>Peta Interaktif Segera Hadir</Text>
        </View>
        <View style={styles.zoomButton}>
          <Search size={16} color="#000" />
          <Text style={styles.zoomText}>Zoom</Text>
        </View>
      </View>

      {/* Cari Lokasi */}
      <Text style={styles.sectionTitle}>Cari Lokasi</Text>
      <View style={styles.buildingGrid}>
        <TouchableOpacity style={styles.buildingCard}>
          <Text style={styles.buildingName}>Gedung Lama</Text>
          <Text style={styles.buildingDesc}>Fakultas Teknik</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buildingCard}>
          <Text style={styles.buildingName}>Gedung Baru</Text>
          <Text style={styles.buildingDesc}>Fakultas Ekonomi</Text>
        </TouchableOpacity>
      </View>

      {/* Ruangan Populer */}
      <Text style={styles.sectionTitle}>Ruangan Populer</Text>
      <View style={styles.roomList}>
        <TouchableOpacity style={styles.roomItem}>
          <View>
            <Text style={styles.roomName}>Auditorium UNIKOM</Text>
            <Text style={styles.roomLocation}>Gedung Baru, Lantai 1</Text>
          </View>
          <MapPin size={18} color={Colors.primary} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.roomItem}>
          <View>
            <Text style={styles.roomName}>Perpustakaan</Text>
            <Text style={styles.roomLocation}>Gedung Baru, Lantai 2</Text>
          </View>
          <MapPin size={18} color={Colors.primary} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.roomItem}>
          <View>
            <Text style={styles.roomName}>Laboratorium Komputer</Text>
            <Text style={styles.roomLocation}>Gedung Lama, Lantai 3</Text>
          </View>
          <MapPin size={18} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.putih,
    paddingVertical: 12,
    marginBottom: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 10,
    
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginLeft: 8,
  },
  mapContainer: {
    height: 220,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  comingSoonOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  comingSoonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#888',
  },
  zoomButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  zoomText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  buildingGrid: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 24,
    gap: 12,
  },
  buildingCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 16,
    backgroundColor: 'white',
  },
  buildingName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  buildingDesc: {
    fontSize: 13,
    color: Colors.abu,
  },
  roomList: {
    paddingHorizontal: 16,
    gap: 12,
  },
  roomItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 16,
  },
  roomName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  roomLocation: {
    fontSize: 13,
    color: Colors.abu,
  },
});

export default Peta;