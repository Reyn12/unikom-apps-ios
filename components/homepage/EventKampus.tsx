import React, { useState, useRef, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Definisi tipe untuk data event
type EventItem = {
  title: string;
  date: string;
  location: string;
  onPress: () => void;
};

const EventKampus = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const scrolling = useRef(false);
  
  // Data event kampus
  const eventData: EventItem[] = [
    {
      title: "Seminar Teknologi AI",
      date: "24 April 2024",
      location: "Auditorium UNIKOM",
      onPress: () => {}
    },
    {
      title: "Workshop UI/UX Design",
      date: "30 April 2024",
      location: "Lab Komputer UNIKOM",
      onPress: () => {}
    },
    {
      title: "Webinar Karir IT",
      date: "5 Mei 2024",
      location: "Online via Zoom",
      onPress: () => {}
    },
  ];

  const renderItem = useCallback((item: EventItem) => {
    return (
      <TouchableOpacity 
        style={styles.eventCard} 
        onPress={item.onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.eventTitle}>{item.title}</Text>
        <View style={styles.eventDetails}>
          <View style={styles.eventDetail}>
            <Ionicons name="calendar-outline" size={18} color="#4169E1" />
            <Text style={styles.eventDetailText}>{item.date}</Text>
          </View>
          <View style={styles.eventDetail}>
            <Ionicons name="location-outline" size={18} color="#4169E1" />
            <Text style={styles.eventDetailText}>{item.location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }, []);

  const handlePrevious = useCallback(() => {
    if (activeIndex > 0) {
      scrolling.current = true;
      scrollViewRef.current?.scrollTo({
        x: (width - 50) * (activeIndex - 1),
        animated: true
      });
      setActiveIndex(activeIndex - 1);
      setTimeout(() => {
        scrolling.current = false;
      }, 300);
    }
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex < eventData.length - 1) {
      scrolling.current = true;
      scrollViewRef.current?.scrollTo({
        x: (width - 50) * (activeIndex + 1),
        animated: true
      });
      setActiveIndex(activeIndex + 1);
      setTimeout(() => {
        scrolling.current = false;
      }, 300);
    }
  }, [activeIndex, eventData.length]);

  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (scrolling.current) return;
    
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (width - 50));
    
    if (index !== activeIndex && index >= 0 && index < eventData.length) {
      setActiveIndex(index);
    }
  }, [activeIndex, eventData.length]);

  // Memoize dots untuk mencegah re-render yang tidak perlu
  const dots = useMemo(() => {
    return eventData.map((_, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          { backgroundColor: index === activeIndex ? '#4169E1' : '#D0D0D0' }
        ]}
      />
    ));
  }, [activeIndex, eventData]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Ionicons name="calendar" size={18} color="#333" />
          <Text style={styles.title}>Event Kampus</Text>
        </View>
        <View style={styles.navigationButtons}>
          <TouchableOpacity style={styles.navButton} onPress={handlePrevious}>
            <Ionicons name="chevron-back" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={handleNext}>
            <Ionicons name="chevron-forward" size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
      >
        {eventData.map((item, index) => (
          <View key={index} style={{ width: width - 50 }}>
            {renderItem(item)}
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.dotContainer}>
        {dots}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  navigationButtons: {
    flexDirection: 'row',
  },
  navButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  eventCard: {
    backgroundColor: '#EBF2FF',
    borderRadius: 12,
    padding: 16,
    height: 120,
    marginHorizontal: 4,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  eventDetails: {
    gap: 8,
  },
  eventDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventDetailText: {
    fontSize: 14,
    color: '#4169E1',
    marginLeft: 8,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default EventKampus;