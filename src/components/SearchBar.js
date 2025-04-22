import { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#B0BEC5" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search here"
        placeholderTextColor="#B0BEC5"
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
}