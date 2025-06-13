import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('./assets/profile.jpg')} 
        style={styles.profileImage}
      />
      <Text style={styles.name}>Аятова Алима</Text>
      <Text style={styles.group}>Группа: cs-202(c)</Text>
      <Text style={styles.email}>Email: Alima@example.com</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>О себе:</Text>
        <Text style={styles.sectionText}>
          Хобби: рисование, йога, чтение{"\n"}
          Любимые увлечения: путешествия, фотография
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    flexGrow: 1,
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  group: {
    fontSize: 18,
    color: '#555',
    marginVertical: 4,
  },
  email: {
    fontSize: 16,
    color: '#007aff',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
  },
});
