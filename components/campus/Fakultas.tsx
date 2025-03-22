import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Colors from '@/constants/Colors';
import { Search, FileText, MessageSquare, Info } from 'lucide-react-native';

export default function Fakultas() {
  const [searchText, setSearchText] = useState('');
  
  const fakultasData = [
    {
      name: 'Fakultas Teknik',
      jurusan: [
        { name: 'Teknik Informatika', gedung: 'Gedung A, Lantai 3' },
        { name: 'Sistem Informasi', gedung: 'Gedung A, Lantai 2' }
      ]
    },
    {
      name: 'Fakultas Ekonomi & Bisnis',
      jurusan: [
        { name: 'Manajemen', gedung: 'Gedung B, Lantai 2' },
        { name: 'Akuntansi', gedung: 'Gedung B, Lantai 3' }
      ]
    }
  ];

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Cari fakultas atau jurusan..."
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      {/* Fakultas List */}
      {fakultasData.map((fakultas, index) => (
        <View key={index} style={styles.fakultasSection}>
          <Text style={styles.fakultasTitle}>{fakultas.name}</Text>
          
          {fakultas.jurusan.map((jurusan, jIndex) => (
            <View key={jIndex} style={styles.jurusanCard}>
              <View style={styles.jurusanHeader}>
                <View style={styles.iconContainer}>
                  <FileText size={24} color={Colors.primary} />
                </View>
                <View style={styles.jurusanInfo}>
                  <Text style={styles.jurusanName}>{jurusan.name}</Text>
                  <Text style={styles.jurusanLocation}>{jurusan.gedung}</Text>
                </View>
              </View>
              
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.actionButton}>
                  <Info size={16} color={Colors.primary} />
                  <Text style={styles.actionText}>Info</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.actionButton}>
                  <MessageSquare size={16} color={Colors.primary} />
                  <Text style={styles.actionText}>Kontak</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ))}

      {/* View All Button */}
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>Lihat Semua Fakultas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.putih,
    paddingVertical: 12,
    marginBottom: 30,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
  fakultasSection: {
    marginBottom: 20,
  },
  fakultasTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  jurusanCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
  },
  jurusanHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#f0f4ff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  jurusanInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  jurusanName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jurusanLocation: {
    fontSize: 13,
    color: Colors.abu,
  },
  actionButtons: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    marginLeft: 6,
    fontSize: 14,
    color: Colors.primary,
  },
  viewAllButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 14,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
});