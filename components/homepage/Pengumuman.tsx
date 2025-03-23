import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Pengumuman = () => {

  // Data pengumuman
  const pengumumanData = {
    title: "Pengumuman Kampus",
    description: "Jadwal UTS Semester Genap 2024/2025 telah dirilis",
    onPress: () => {}
  };

  return (
    <TouchableOpacity style={styles.container} onPress={pengumumanData.onPress}>
      <View style={styles.leftBorder} />
      <View style={styles.leftContent}>
        <Ionicons name="megaphone-outline" size={24} color="#4169E1" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{pengumumanData.title}</Text>
          <Text style={styles.description}>
            {pengumumanData.description}
          </Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#4169E1" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Styles tetap sama
  container: {
    backgroundColor: '#EBF2FF',
    marginTop: 25,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  leftBorder: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 8,
    backgroundColor: '#2851A3',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 8,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4169E1',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
});

export default Pengumuman;