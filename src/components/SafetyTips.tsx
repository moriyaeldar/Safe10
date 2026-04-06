import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

interface Tip { id: string; title: string; description: string; icon: string; }

const TIPS: Tip[] = [
  { id: '1', title: 'Share Your Location', description: 'Always share your live location with a trusted contact when traveling alone, especially at night.', icon: '📍' },
  { id: '2', title: 'Stay Aware', description: 'Keep your head up and stay off your phone when walking in unfamiliar areas. Be aware of your surroundings.', icon: '👀' },
  { id: '3', title: 'Trust Your Instincts', description: 'If something feels wrong, leave the situation immediately. Your safety is more important than being polite.', icon: '🧠' },
  { id: '4', title: 'Plan Your Route', description: 'Know where you are going before you leave. Stick to well-lit, populated routes whenever possible.', icon: '🗺️' },
  { id: '5', title: 'Emergency Numbers', description: 'Save local emergency numbers and keep your phone charged. Consider carrying a portable charger.', icon: '📱' },
  { id: '6', title: 'Check In Regularly', description: 'Set up regular check-in times with friends or family, especially when meeting new people.', icon: '✅' },
];

const SafetyTips = () => {
  const renderTip = ({ item }: { item: Tip }) => (
    <View style={styles.tipCard}>
      <Text style={styles.tipIcon}>{item.icon}</Text>
      <View style={styles.tipContent}>
        <Text style={styles.tipTitle}>{item.title}</Text>
        <Text style={styles.tipDescription}>{item.description}</Text>
      </View>
    </View>
  );
  return (
    <View>
      <Text style={styles.title}>Safety Tips</Text>
      <Text style={styles.subtitle}>Stay safe with these important reminders</Text>
      <FlatList data={TIPS} renderItem={renderTip} keyExtractor={(item) => item.id} scrollEnabled={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: 'bold', color: '#ffffff', marginBottom: 5 },
  subtitle: { fontSize: 13, color: '#a0a0b0', marginBottom: 20 },
  tipCard: { flexDirection: 'row', backgroundColor: '#16213e', padding: 18, borderRadius: 12, marginBottom: 10 },
  tipIcon: { fontSize: 28, marginRight: 15, marginTop: 2 },
  tipContent: { flex: 1 },
  tipTitle: { fontSize: 16, fontWeight: '600', color: '#ffffff', marginBottom: 5 },
  tipDescription: { fontSize: 13, color: '#a0a0b0', lineHeight: 19 },
});

export default SafetyTips;
