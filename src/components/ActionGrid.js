import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

export default function ActionGrid() {
  const quickActions = [
    { icon: 'bar-chart-outline', title: 'Trading', onPress: () => {} },
    { icon: 'cash-outline', title: 'Withdraw', onPress: () => {} },
    { icon: 'wallet-outline', title: 'Payments', onPress: () => {} },
    { icon: 'document-text-outline', title: 'Subscription', onPress: () => {} },
    { icon: 'settings-outline', title: 'Settings', onPress: () => {} },
    { icon: 'gift-outline', title: 'Rewards', onPress: () => {} },
    { icon: 'help-circle-outline', title: 'Help', onPress: () => {} },
    { icon: 'document-outline', title: 'Terms', onPress: () => {} },
  ];

  return (
    <View style={styles.actionsGrid}>
      {quickActions.map((action, index) => (
        <View key={index} style={styles.actionItem}>
          <TouchableOpacity style={styles.actionButton} onPress={action.onPress}>
            <Ionicons name={action.icon} size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.sectionText}>{action.title.toUpperCase()}</Text>
        </View>
      ))}
    </View>
  );
}