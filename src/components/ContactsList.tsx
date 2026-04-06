import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

interface Contact { id: string; name: string; phone: string; relationship: string; }

const SAMPLE_CONTACTS: Contact[] = [
  { id: '1', name: 'Emergency Services', phone: '911', relationship: 'Emergency' },
  { id: '2', name: 'Mom', phone: '+1 (555) 123-4567', relationship: 'Family' },
  { id: '3', name: 'Dad', phone: '+1 (555) 234-5678', relationship: 'Family' },
  { id: '4', name: 'Best Friend', phone: '+1 (555) 345-6789', relationship: 'Friend' },
];

const ContactsList = () => {
  const renderContact = ({ item }: { item: Contact }) => (
    <TouchableOpacity style={styles.contactCard}>
      <View style={styles.avatar}><Text style={styles.avatarText}>{item.name[0]}</Text></View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactPhone}>{item.phone}</Text>
        <Text style={styles.contactRelation}>{item.relationship}</Text>
      </View>
      <TouchableOpacity style={styles.callButton}><Text style={styles.callButtonText}>Call</Text></TouchableOpacity>
    </TouchableOpacity>
  );
  return (
    <View>
      <Text style={styles.title}>Emergency Contacts</Text>
      <Text style={styles.subtitle}>These contacts will be notified in an emergency</Text>
      <FlatList data={SAMPLE_CONTACTS} renderItem={renderContact} keyExtractor={(item) => item.id} scrollEnabled={false} />
      <TouchableOpacity style={styles.addButton}><Text style={styles.addButtonText}>+ Add Contact</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: 'bold', color: '#ffffff', marginBottom: 5 },
  subtitle: { fontSize: 13, color: '#a0a0b0', marginBottom: 20 },
  contactCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#16213e', padding: 15, borderRadius: 12, marginBottom: 10 },
  avatar: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: '#e94560', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarText: { fontSize: 18, fontWeight: 'bold', color: '#ffffff' },
  contactInfo: { flex: 1 },
  contactName: { fontSize: 16, fontWeight: '600', color: '#ffffff' },
  contactPhone: { fontSize: 13, color: '#a0a0b0', marginTop: 2 },
  contactRelation: { fontSize: 11, color: '#e94560', marginTop: 2 },
  callButton: { backgroundColor: '#0f3460', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 },
  callButtonText: { color: '#ffffff', fontSize: 14, fontWeight: '600' },
  addButton: { backgroundColor: '#0f3460', padding: 15, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  addButtonText: { color: '#e94560', fontSize: 16, fontWeight: '600' },
});

export default ContactsList;
