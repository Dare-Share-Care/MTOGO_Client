import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

const Home = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Food Takeaway App</Text>
      <TextInput placeholder="Search for food" style={{ marginTop: 20, marginBottom: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10 }} />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Featured</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Add featured food items here */}
      </ScrollView>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Categories</Text>
      <ScrollView>
        {/* Add food categories here */}
      </ScrollView>
    </View>
  );
};

export default Home;