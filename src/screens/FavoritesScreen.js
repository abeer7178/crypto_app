import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

export default function FavoritesScreen() {
  const favorites = [
    { icon: 'flash', title: 'Electricity', onPress: () => {} },
    { icon: 'flame', title: 'Gas', onPress: () => {} },
    { icon: 'water', title: 'Water', onPress: () => {} },
    { icon: 'globe', title: 'Internet', onPress: () => {} },
    { icon: 'call', title: 'Telephone', onPress: () => {} },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>Favorites</Text>
      </View>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.favoriteItem}>
            <Ionicons name={item.icon} size={24} color="#000" />
            <Text style={styles.favoriteText}>{item.title}</Text>
            <Ionicons name="heart" size={20} color="#FF0000" />
          </View>
        )}
      />
      <TouchableOpacity style={styles.addFavoriteButton}>
        <Text style={styles.addFavoriteText}>Add Favorite</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}