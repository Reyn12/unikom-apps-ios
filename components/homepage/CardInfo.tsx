import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CardInfoItemProps {
  title: string;
  subtitle: string;
  bgColor: string;
  iconColor: string;
  iconName: any; // Ubah tipe ini untuk menghindari error TypeScript
  onPress?: () => void;
}

const CardInfoItem: React.FC<CardInfoItemProps> = ({
    title,
    subtitle,
    bgColor,
    iconColor,
    iconName,
    onPress
  }) => (
    <TouchableOpacity 
      style={[
        styles.card, 
        { 
          backgroundColor: bgColor,
          borderColor: iconColor,
          borderWidth: 1
        }
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
        <Ionicons name={iconName} size={24} color="white" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );

const CardInfo: React.FC<{
  onBeasiswaPress?: () => void;
  onKarirPress?: () => void;
}> = ({ onBeasiswaPress, onKarirPress }) => {
  return (
    <View style={styles.container}>
      <CardInfoItem
        title="Info Beasiswa"
        subtitle="3 program beasiswa baru"
        bgColor="#f8f0ff"
        iconColor="#9747ff"
        iconName="school"
        onPress={onBeasiswaPress}
      />
      <CardInfoItem
        title="Info Karir"
        subtitle="5 lowongan magang baru"
        bgColor="#fff5f0"
        iconColor="#ff7847"
        iconName="briefcase"
        onPress={onKarirPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  card: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    width: '48%',
    minHeight: 120,
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
});

export default CardInfo;