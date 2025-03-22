import React from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView, View, Text } from 'react-native';
import Colors from '@/constants/Colors';
import { CalendarDays, ChevronRight, Megaphone, FileText } from 'lucide-react-native';

interface BeritaItem {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
  description: string;
}

const dummyBerita = [
  {
    id: '1',
    title: 'Pendaftaran Wisuda Periode April 2025 Telah Dibuka',
    date: '20 Maret 2025',
    image: 'https://picsum.photos/800/400',
    category: 'Pengumuman Resmi',
    description: 'Pendaftaran wisuda periode April 2025 telah dibuka mulai tanggal 1 April hingga 15 April 2025. Mahasiswa yang telah memenuhi syarat dapat segera mendaftar.'
  },
  {
    id: '2',
    title: 'Workshop Kewirausahaan Digital',
    date: '15 Maret 2025',
    image: 'https://picsum.photos/800/400',
    category: 'Kegiatan Kampus',
    description: 'UNIKOM mengadakan workshop kewirausahaan digital untuk mahasiswa dengan pembicara dari industri teknologi terkemuka.'
  },
  {
    id: '3',
    title: 'Tim Robotik UNIKOM Juara Nasional',
    date: '10 Maret 2025',
    image: 'https://picsum.photos/800/400',
    category: 'Prestasi',
    description: 'Tim Robotik UNIKOM berhasil meraih juara 1 dalam Kompetisi Robotik Nasional yang diselenggarakan di Jakarta.'
  },
  {
    id: '4',
    title: 'Seminar Nasional Teknologi Blockchain',
    date: '5 Maret 2025',
    image: 'https://picsum.photos/800/400',
    category: 'Kegiatan Kampus',
    description: 'Fakultas Teknik dan Ilmu Komputer mengadakan seminar nasional tentang teknologi blockchain dan implementasinya di berbagai sektor industri.'
  },
];

// Komponen untuk item berita utama
const FeaturedNewsItem: React.FC<{item: BeritaItem}> = ({ item }) => (
  <TouchableOpacity style={styles.featuredItem}>
    <Image source={{ uri: item.image }} style={styles.featuredImage} />
    <View style={styles.categoryBadge}>
      <Text style={styles.categoryText}>{item.category}</Text>
    </View>
    <View style={styles.featuredContent}>
      <Text style={styles.featuredTitle}>{item.title}</Text>
      <Text style={styles.featuredDescription} numberOfLines={2}>{item.description}</Text>
      <View style={styles.featuredFooter}>
        <View style={styles.dateContainer}>
          <CalendarDays size={14} color={Colors.abu} />
          <Text style={styles.beritaDate}>{item.date}</Text>
        </View>
        <TouchableOpacity style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>Baca Selengkapnya</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

// Komponen untuk item berita reguler
const NewsItem: React.FC<{item: BeritaItem}> = ({ item }) => (
  <TouchableOpacity style={styles.newsItem}>
    <View style={styles.categoryBadgeSmall}>
      <Text style={styles.categoryTextSmall}>{item.category}</Text>
    </View>
    <Text style={styles.newsTitle}>{item.title}</Text>
    <Text style={styles.newsDescription} numberOfLines={2}>{item.description}</Text>
    <View style={styles.newsFooter}>
      <Text style={styles.newsDate}>{item.date}</Text>
      <TouchableOpacity>
        <Text style={styles.readMoreText}>Baca Selengkapnya</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const Berita = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <FileText size={20} color={Colors.primary} />
          <Text style={styles.headerTitle}>Berita Kampus</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.contentContainer}>
        {/* Berita Utama */}
        <FeaturedNewsItem item={dummyBerita[0]} />
        
        {/* Berita Lainnya */}
        <View style={styles.otherNewsContainer}>
          {dummyBerita.slice(1).map(item => (
            <NewsItem key={item.id} item={item} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Berita;

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
    marginBottom: 20,
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
  viewAllText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },
  contentContainer: {
    flex: 1,
  },
  featuredItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.primary,
    marginHorizontal: 16,
  },
  featuredImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  categoryBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  categoryText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  featuredContent: {
    padding: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  featuredDescription: {
    fontSize: 14,
    color: Colors.abu,
    marginBottom: 12,
  },
  featuredFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  beritaDate: {
    fontSize: 12,
    color: Colors.abu,
    marginLeft: 4,
  },
  readMoreButton: {
    paddingVertical: 4,
  },
  readMoreText: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '500',
  },
  otherNewsContainer: {
    gap: 12,
  },
  newsItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginHorizontal: 16,
  },
  categoryBadgeSmall: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  categoryTextSmall: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000',
  },
  newsDescription: {
    fontSize: 13,
    color: Colors.abu,
    marginBottom: 8,
  },
  newsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  newsDate: {
    fontSize: 12,
    color: Colors.abu,
  },
});