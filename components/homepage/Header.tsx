import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/Themed';
import { Bell, Settings, UserCircle, User } from 'lucide-react-native';

interface HeaderProps {
  studentName?: string;
  showGreeting?: boolean;
}

const Header = ({ studentName = '', showGreeting = true }: HeaderProps) => {
    return (
      <View style={styles.headerSection}>
        {/* Logo dan icon */}
        <View style={styles.headerTop}>
          <Text style={styles.logo}>Unikom Apps</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Bell size={22} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Settings size={22} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <UserCircle size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
  
        {/* Greeting - hanya ditampilkan jika showGreeting true */}
        {showGreeting && (
          <Text style={styles.greeting}>
            HALO, <Text style={styles.studentName}>{studentName}</Text>
          </Text>
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
  headerSection: {
    backgroundColor: '#1E3A8A',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    padding: 5,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  studentName: {
    color: '#FFFFFF',
  },
});

export default Header;