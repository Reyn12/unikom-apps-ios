import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import Header from '@/components/campus/Header';
import Navbar from '@/components/campus/Navbar';
import Berita from '@/components/campus/Berita';
import Peta from '@/components/campus/Peta';
import React, { useState } from 'react';
import Fakultas from '@/components/campus/Fakultas';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

export default function CampusScreen() {
  const [activeTab, setActiveTab] = useState('Berita');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Berita':
        return <Berita />;
      case 'Peta':
        return <Peta />;
      case 'Fakultas':
        return <Fakultas />;
      default:
        return <Berita />;
    }
  };

  return (
    <>
      <ExpoStatusBar style="light" backgroundColor={Colors.primary} animated={true} />
      <View style={styles.container}>
        <Header />
        <View style={styles.mainSection}>
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          <View style={styles.mainSection2}>
            <ScrollView refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[Colors.primary]}
                tintColor={Colors.primary}
              />
            }>
              {renderContent()}
            </ScrollView>
          </View>
        </View>
      </View>
    </>
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
    paddingTop: 2,
  },
  comingSoon: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: Colors.abu
  }
});