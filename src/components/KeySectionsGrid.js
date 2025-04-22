import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

export default function KeySectionsGrid() {
  const keySections = [
    { icon: 'trending-up', title: 'START TRADING', backgroundColor: '#BBDEFB', onPress: () => {} },
    { icon: 'download', title: 'WITHDRAW NOW', backgroundColor: '#F0F4C3', onPress: () => {} },
    { icon: 'card', title: 'MAKE A PAYMENT', backgroundColor: '#E1BEE7', onPress: () => {} },
    { icon: 'book', title: 'BOOK NOW', backgroundColor: '#B2DFDB', onPress: () => {} },
  ];

  return (
    <View style={styles.keySectionsGrid}>
      {keySections.map((section, index) => (
        <View key={index} style={styles.sectionCard}>
          <View style={[styles.iconWrapper, { backgroundColor: section.backgroundColor }]}>
            <Ionicons name={section.icon} size={24} color="#000" />
          </View>
          <Text style={styles.sectionTitle}>Trading</Text>
          <TouchableOpacity style={styles.actionRow} onPress={section.onPress}>
            <Text style={styles.actionText}>{section.title}</Text>
            <Ionicons name="arrow-forward" size={18} color="#1E90FF" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}