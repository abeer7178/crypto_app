import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function FavoritesCard({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.favoritesCard}
      onPress={() => navigation.navigate('Favorites')}
    >
      <Text style={styles.favoritesTitle}>SEE YOUR FAVORITES</Text>
      <Text style={styles.favoritesSubtitle}>
        Access your favorites instantly for a faster, more convenient experience!
      </Text>
      <Text style={styles.favoritesLink}>See Favorites →</Text>
    </TouchableOpacity>
  );
}