import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import Header from '@/components/campus/Header';
import Navbar from '@/components/campus/Navbar';
import Berita from '@/components/campus/Berita';
import { useState } from 'react';

export default function CampusScreen() {
  const [activeTab, setActiveTab] = useState('Berita');

  const renderContent = () => {
    switch(activeTab) {
      case 'Berita':
        return <Berita />;
      case 'Peta':
        return <Text style={styles.comingSoon}>Peta Kampus akan segera hadir</Text>;
      case 'Fakultas':
        return <Text style={styles.comingSoon}>Informasi Fakultas akan segera hadir</Text>;
      default:
        return <Berita />;
    }
  };
  
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainSection}>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <View style={styles.mainSection2}>
          <ScrollView>
            {renderContent()}
          </ScrollView>
        </View>
      </View>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  mainSection: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mainSection2: {
    flex: 1,
    backgroundColor: Colors.putih,
    marginTop: -30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 2,
  },
  comingSoon: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: Colors.abu
  }
});