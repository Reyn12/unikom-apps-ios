import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

export default function CardProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Image 
            source={require('@/assets/images/reyy-profile.jpg')} 
            style={styles.avatar}
            defaultSource={require('@/assets/images/reyy-profile.jpg')}
          />
        </View>
        <Text style={styles.name}>M Renaldi</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Mahasiswa Aktif</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <View style={styles.infoCol}>
            <Text style={styles.infoLabel}>NIM</Text>
            <Text style={styles.infoValue}>10520123</Text>
          </View>
          <View style={styles.infoCol}>
            <Text style={styles.infoLabel}>Program Studi</Text>
            <Text style={styles.infoValue}>Teknik Informatika</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoCol}>
            <Text style={styles.infoLabel}>Fakultas</Text>
            <Text style={styles.infoValue}>Teknik dan Ilmu Komputer</Text>
          </View>
          <View style={styles.infoCol}>
            <Text style={styles.infoLabel}>Angkatan</Text>
            <Text style={styles.infoValue}>2020</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.putih,
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.abu
  },
  profileHeader: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.6)',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.putih,
    marginBottom: 8,
  },
  statusBadge: {
    backgroundColor: Colors.putih,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 14,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: Colors.putih,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  infoCol: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: Colors.abu,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
})