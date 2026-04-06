import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

const EmergencyButton = () => {
  const [pressed, setPressed] = useState(false);
  const handleEmergency = () => {
    setPressed(true);
    Alert.alert('Emergency Alert', 'Emergency services will be contacted and your location will be shared with your emergency contacts.', [
      { text: 'Cancel', style: 'cancel', onPress: () => setPressed(false) },
      { text: 'Confirm', style: 'destructive', onPress: () => { setPressed(false); } },
    ]);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, pressed && styles.buttonPressed]} onPress={handleEmergency} activeOpacity={0.8}>
        <Text style={styles.buttonText}>SOS</Text>
        <Text style={styles.buttonSubtext}>Tap for Emergency</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 30, alignItems: 'center' },
  button: { width: 180, height: 180, borderRadius: 90, backgroundColor: '#e94560', justifyContent: 'center', alignItems: 'center', elevation: 10, shadowColor: '#e94560', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5, shadowRadius: 15 },
  buttonPressed: { backgroundColor: '#c73650' },
  buttonText: { fontSize: 42, fontWeight: 'bold', color: '#ffffff' },
  buttonSubtext: { fontSize: 12, color: '#ffffff', opacity: 0.8, marginTop: 5 },
});

export default EmergencyButton;
