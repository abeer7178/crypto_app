import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';
import BalanceCard from '../components/BalanceCard';
import SearchBar from '../components/SearchBar';
import ActionGrid from '../components/ActionGrid';
import FavoritesCard from '../components/FavoritesCard';
import KeySectionsGrid from '../components/KeySectionsGrid';

export default function DashboardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.logo}>LOGO</Text>
          <View style={styles.notificationContainer}>
            <Ionicons name="notifications-outline" size={24} color="#000" />
            <View style={styles.notificationDot} />
          </View>
        </View>
        <BalanceCard />
        <SearchBar />
        <ActionGrid />
        <FavoritesCard navigation={navigation} />
        <Text style={styles.sectionTitle}>KEY SECTIONS</Text>
        <KeySectionsGrid />
      </ScrollView>
    </SafeAreaView>
  );
}