import { Tabs } from 'expo-router';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Home, Calendar, Compass, User } from 'lucide-react-native';

// Gunakan tipe bawaan dari React Navigation
function CustomTabBar(props: BottomTabBarProps) {
  const { state, descriptors, navigation } = props;

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Tentukan icon berdasarkan route name
        let Icon = Home; // Default icon
        if (route.name === 'schedule') {
          Icon = Calendar;
        } else if (route.name === 'campus') {
          Icon = Compass;
        } else if (route.name === 'profile') {
          Icon = User;
        }

        return (
          <Pressable
            key={index}
            onPress={onPress}
            style={[
              styles.tabButton,
            ]}
          >
            <View style={isFocused ? styles.activeIndicator : null} />
            <Icon
              size={22}
              color={isFocused ? '#1e40af' : '#6b7280'}
              strokeWidth={2}
            />
            <Text style={[styles.tabLabel, { color: isFocused ? '#1e40af' : '#6b7280' }]}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  // Hapus variabel ini karena tidak digunakan
  // const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: 'Schedule',
        }}
      />
      <Tabs.Screen
        name="campus"
        options={{
          title: 'Campus',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingBottom: 15,
    backgroundColor: 'white',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: 3,
    borderTopColor: 'transparent',
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    width: 50, // Atur lebar border sesuai keinginan
    height: 3, // Atur ketebalan border
    backgroundColor: '#1e40af',
    alignSelf: 'center',
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 8,
  },
});