import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import EmergencyButton from './components/EmergencyButton';
import ContactsList from './components/ContactsList';
import SafetyTips from './components/SafetyTips';

type Screen = 'home' | 'contacts' | 'tips';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Safe10</Text>
        <Text style={styles.headerSubtitle}>Your Personal Safety Companion</Text>
      </View>
      <ScrollView style={styles.content}>
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'contacts' && <ContactsList />}
        {currentScreen === 'tips' && <SafetyTips />}
      </ScrollView>
      <View style={styles.navbar}>
        <NavButton title="Home" active={currentScreen === 'home'} onPress={() => setCurrentScreen('home')} />
        <NavButton title="Contacts" active={currentScreen === 'contacts'} onPress={() => setCurrentScreen('contacts')} />
        <NavButton title="Tips" active={currentScreen === 'tips'} onPress={() => setCurrentScreen('tips')} />
      </View>
    </SafeAreaView>
  );
};

const HomeScreen = () => (
  <View style={styles.homeContainer}>
    <EmergencyButton />
    <View style={styles.quickActions}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <TouchableOpacity style={styles.actionCard}><Text style={styles.actionEmoji}>📍</Text><Text style={styles.actionText}>Share Location</Text></TouchableOpacity>
      <TouchableOpacity style={styles.actionCard}><Text style={styles.actionEmoji}>🔔</Text><Text style={styles.actionText}>Sound Alarm</Text></TouchableOpacity>
      <TouchableOpacity style={styles.actionCard}><Text style={styles.actionEmoji}>📱</Text><Text style={styles.actionText}>Quick Call</Text></TouchableOpacity>
    </View>
  </View>
);

const NavButton = ({ title, active, onPress }: { title: string; active: boolean; onPress: () => void }) => (
  <TouchableOpacity style={styles.navButton} onPress={onPress}>
    <Text style={[styles.navText, active && styles.navTextActive]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a2e' },
  header: { paddingTop: 20, paddingBottom: 15, paddingHorizontal: 20, backgroundColor: '#16213e', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#e94560' },
  headerSubtitle: { fontSize: 14, color: '#a0a0b0', marginTop: 4 },
  content: { flex: 1, padding: 20 },
  homeContainer: { alignItems: 'center' },
  quickActions: { width: '100%', marginTop: 30 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#ffffff', marginBottom: 15 },
  actionCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#16213e', padding: 18, borderRadius: 12, marginBottom: 10 },
  actionEmoji: { fontSize: 24, marginRight: 15 },
  actionText: { fontSize: 16, color: '#ffffff' },
  navbar: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 12, backgroundColor: '#16213e', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  navButton: { paddingVertical: 8, paddingHorizontal: 20 },
  navText: { fontSize: 14, color: '#a0a0b0' },
  navTextActive: { color: '#e94560', fontWeight: '600' },
});

export default App;
