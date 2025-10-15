import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const dummyResults = [
    { id: '1', name: 'Sony WH-1000XM5', price: '$399', store: 'Best Buy' },
    { id: '2', name: 'Sony WH-1000XM5', price: '$379', store: 'Staples' },
  ];

  const handleSearch = () => {
    // Replace with API call later
    setResults(dummyResults);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a product"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.result}>
            {item.name} - {item.price} @ {item.store}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20 },
  result: { marginBottom: 10 },
});