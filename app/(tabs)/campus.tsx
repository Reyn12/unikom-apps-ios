import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import Header from '@/components/campus/Header';
import Navbar from '@/components/campus/Navbar';

export default function CampusScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainSection}>
        <Navbar />
        <View style={styles.mainSection2}>
          <ScrollView>
            {/* Konten halaman disini */}
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
    paddingTop: 15,
  },
});