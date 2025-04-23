import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Bookmark, Share } from 'lucide-react-native';

export default function DetailMateri() {
  const navigation = useNavigation();

  const handleKembali = () => {
    navigation.goBack();
  };

  const handleBookmark = () => {
    // Add bookmark logic here
  };

  const handleShare = () => {
    // Add share logic here
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleKembali} style={styles.backrow}>
            <ChevronLeft size={25} color={Colors.putih} />
            <Text style={styles.backText}>Kembali</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.titleMateriSection}>
            <View style={styles.titleRow}>
              <Text style={styles.materiTitle}>Pengenalan React Native</Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButton} onPress={handleBookmark}>
                  <Bookmark size={20} color={Colors.putih} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
                  <Share size={20} color={Colors.putih} />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.materiInfo}>Pertemuan 1 • 15 Maret 2025</Text>
            <Text style={styles.pengajarInfo}>Pemrograman Mobile • Dr. Budi Santoso</Text>
          </View>

          <View style={styles.contentSection}>
            {/* Add your content here */}
          </View>
        </ScrollView>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 5,
    width: '100%',
    marginBottom: 16,
  },
  backrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.putih,
    marginLeft: 5,
  },
  titleMateriSection: {
    height: 100,
    margin: 10,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  iconButton: {
    marginLeft: 15,
    backgroundColor: Colors.secondary,
    padding: 8,
    borderRadius: 50,
  },
  materiTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.putih,
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 4,
  },
  materiInfo: {
    fontSize: 16,
    color: Colors.putih,
    marginLeft: 16,
    marginTop: 4,
  },
  pengajarInfo: {
    fontSize: 18,
    color: Colors.putih,
    marginLeft: 16,
    fontWeight: '800',
    marginTop: 20,
  },
  contentSection: {
    height: 1000,
    marginTop: 25,
    backgroundColor: Colors.putih,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});