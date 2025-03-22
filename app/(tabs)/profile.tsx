import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { UserPen, LogOut } from 'lucide-react-native';
import CardProfile from '@/components/profile/CardProfile';
import CardAkademik from '@/components/profile/CardAkademik';
import CardPengaturan from '@/components/profile/CardPengaturan';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ExpoStatusBar style="light" backgroundColor={Colors.primary} animated={true} />
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <UserPen color="white" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.mainSection}>
          <CardProfile />
          <CardAkademik />
          <CardPengaturan />

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton}>
            <View style={styles.logoutIconContainer}>
              <LogOut size={20} color="#FF5A5A" />
            </View>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 16,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.putih,
    marginHorizontal: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: 15,
  },
  mainSection: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.putih,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.abu,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5A5A',
  },
  logoutIconContainer: {
    marginRight: 10,
  },
});