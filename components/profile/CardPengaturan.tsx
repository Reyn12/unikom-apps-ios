import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Settings, User, Lock, Bell, HelpCircle } from 'lucide-react-native'

const CardPengaturan = () => {
  const menuItems = [
    {
      icon: <User size={20} color={Colors.primary} />,
      title: 'Edit Profil',
      bgColor: '#e6f0ff',
    },
    {
      icon: <Lock size={20} color={Colors.primary} />,
      title: 'Ubah Password',
      bgColor: '#e6f0ff',
    },
    {
      icon: <Bell size={20} color={Colors.primary} />,
      title: 'Notifikasi',
      bgColor: '#e6f0ff',
    },
    {
      icon: <HelpCircle size={20} color={Colors.primary} />,
      title: 'Bantuan',
      bgColor: '#e6f0ff',
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Settings size={24} color={Colors.primary} />
        <Text style={styles.title}>Pengaturan Akun</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={[styles.iconContainer, { backgroundColor: item.bgColor }]}>
              {item.icon}
            </View>
            <Text style={styles.menuText}>
              {item.title}
            </Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default CardPengaturan

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.putih,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.abu,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginLeft: 8,
  },
  menuContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  chevron: {
    fontSize: 24,
    color: Colors.abu,
  }
})