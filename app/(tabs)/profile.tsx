import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { UserPen } from 'lucide-react-native';
import CardProfile from '@/components/profile/CardProfile';
import CardAkademik from '@/components/profile/CardAkademik';

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
});