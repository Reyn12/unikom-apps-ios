import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/Themed';
import { BookOpen, GraduationCap, ClipboardList, Calendar } from 'lucide-react-native';
import { Link } from 'expo-router';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withDelay, interpolate, withSequence, withTiming, Extrapolation } from 'react-native-reanimated';

interface QuickAccessItemProps {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  labelColor?: string;
  href: string;
  refreshKey?: number;
}

interface QuickAccessProps {
  refreshKey?: number;
}

const QuickAccessItem = ({ icon, label, badge, labelColor = '#fff', href, index = 0, refreshKey = 0 }: QuickAccessItemProps & { index?: number, refreshKey?: number }) => {
  // Shared values untuk animasi
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const badgeScale = useSharedValue(0);
  
  // Efek saat komponen mount
  useEffect(() => {
    // Animasi dengan delay berdasarkan index untuk efek staggered
    opacity.value = withDelay(
      index * 100, 
      withSpring(1, { damping: 12 })
    );
    
    scale.value = withDelay(
      index * 100, 
      withSpring(1, { damping: 8 })
    );
    
    // Animasi badge dengan efek bounce
    if (badge) {
      badgeScale.value = withDelay(
        (index * 100) + 300,
        withSequence(
          withSpring(1.3, { damping: 4 }),
          withSpring(1, { damping: 10 })
        )
      );
    }
  }, []);
  
  // Style animasi untuk container icon
  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });
  
  // Style animasi untuk badge
  const animatedBadgeStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: badgeScale.value }],
    };
  });
  
  // Style animasi untuk label
  const animatedLabelStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { 
          translateY: interpolate(
            opacity.value,
            [0, 1],
            [10, 0],
            Extrapolation.CLAMP
          ) 
        }
      ]
    };
  });
  
  return (
    // @ts-expect-error: String URLs are not fully typed in expo-router
    <Link href={href} asChild>
      <TouchableOpacity style={styles.item}>
        <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
          {icon}
          {badge && (
            <Animated.View style={[styles.badge, animatedBadgeStyle]}>
              <Text style={styles.badgeText}>{badge}</Text>
            </Animated.View>
          )}
        </Animated.View>
        <Animated.Text style={[styles.label, { color: labelColor }, animatedLabelStyle]}>{label}</Animated.Text>
      </TouchableOpacity>
    </Link>
  );
};

const QuickAccess = ({ refreshKey = 0 }: QuickAccessProps) => {
  return (
    <View>
      <Text style={styles.title}>Quick Access</Text>
      <View style={styles.container}>
        <View style={styles.itemsContainer}>
          <QuickAccessItem
            icon={<ClipboardList size={24} color="#1E3A8A" />}
            label="Tugas"
            badge={3}
            labelColor="#000"
            href="/homepage/tugas/tugas"
            index={0}
            key={`tugas-${refreshKey}`}
          />
          <QuickAccessItem
            icon={<BookOpen size={24} color="#1E3A8A" />}
            label="Materi"
            badge={12}
            labelColor="#000"
            href='/homepage/materi/materi'
            index={1}
            key={`materi-${refreshKey}`}
          />
          <QuickAccessItem
            icon={<GraduationCap size={24} color="#1E3A8A" />}
            label="Nilai"
            labelColor="#000"
            href='/homepage/nilai/nilai'
            index={2}
            key={`nilai-${refreshKey}`}
          />
          <QuickAccessItem
            icon={<Calendar size={24} color="#1E3A8A" />}
            label="Kalender"
            labelColor="#000"
            href='/'
            index={3}
            key={`kalender-${refreshKey}`}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 22,
    color: '#000',
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    alignItems: 'center',
    width: '22%',
  },
  iconContainer: {
    position: 'relative',
    backgroundColor: '#E6EFFF', // Warna biru muda/terang
    borderRadius: 50, // Nilai tinggi untuk membuat bentuk bulat/oval
    padding: 16,
    marginBottom: 8,
    width: 60, // Tetapkan lebar
    height: 60, // Tetapkan tinggi yang sama untuk bentuk bulat
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#1E3A8A',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
  },
});

export default QuickAccess;