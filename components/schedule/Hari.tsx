import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Colors from '@/constants/Colors'

interface HariProps {
  onSelectDay?: (day: string) => void;
  activeDay?: string;
}

const Hari: React.FC<HariProps> = ({ onSelectDay, activeDay }) => {
  const [hariData, setHariData] = useState<Array<{hari: string, tanggal: string, active: boolean}>>([])
  const [activeIndex, setActiveIndex] = useState(0)
  
  useEffect(() => {
    // Generate data hari untuk seminggu dari hari ini
    const today = new Date()
    const hariList = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
    const data: Array<{hari: string, tanggal: string, active: boolean}> = []
    
    // Generate data untuk 7 hari
    for (let i = 0; i < 7; i++) {
      const date = new Date()
      date.setDate(today.getDate() + i)
      
      data.push({
        hari: hariList[date.getDay()],
        tanggal: date.getDate().toString(),
        active: i === 0 // Hari ini aktif
      })
    }
    
    setHariData(data)
  }, [])

  useEffect(() => {
    if (activeDay && hariData.length > 0) {
      // Konversi format hari dari schedule ke format di komponen Hari
      const dayMap: {[key: string]: string} = {
        'Minggu': 'Min',
        'Senin': 'Sen',
        'Selasa': 'Sel',
        'Rabu': 'Rab',
        'Kamis': 'Kam',
        'Jumat': 'Jum',
        'Sabtu': 'Sab'
      };
      
      const shortDay = dayMap[activeDay];
      if (shortDay) {
        const index = hariData.findIndex(item => item.hari === shortDay);
        
        if (index !== -1 && index !== activeIndex) {
          // Hanya update jika index berbeda dari activeIndex saat ini
          const updatedData = hariData.map((item, idx) => ({
            ...item,
            active: idx === index
          }));
          
          setHariData(updatedData);
          setActiveIndex(index);
          
          // Tidak perlu panggil onSelectDay di sini karena ini dipicu oleh parent
        }
      }
    }
  }, [activeDay, hariData, activeIndex]);

  const handleDayPress = (index: number) => {
    // Update active state
    const updatedData = hariData.map((item, idx) => ({
      ...item,
      active: idx === index
    }))
    
    setHariData(updatedData)
    setActiveIndex(index)
    
    // Panggil callback jika ada
    if (onSelectDay) {
      onSelectDay(hariData[index].hari)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {hariData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.hariItem,
              item.active && styles.activeItem
            ]}
            onPress={() => handleDayPress(index)}
          >
            <Text style={[styles.hariText, item.active && styles.activeText]}>
              {item.hari}
            </Text>
            <Text style={[styles.tanggalText, item.active && styles.activeText]}>
              {item.tanggal}
            </Text>
            {item.active && <View style={styles.activeLine} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: '#E0E0E0',
      },
      hariItem: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginHorizontal: 5,
        position: 'relative',
      },
      hariText: {
        fontSize: 14,
        color: '#888',
        marginBottom: 4,
      },
      tanggalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      activeItem: {
        // Tidak perlu background karena kita pakai garis bawah
      },
      activeText: {
        color: Colors.primary,
      },
      activeLine: {
        position: 'absolute',
        bottom: 0,
        height: 3,
        width: '80%',
        backgroundColor: Colors.primary,
        borderRadius: 10,
      }
})

export default Hari