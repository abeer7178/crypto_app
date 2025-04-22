import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function BalanceCard() {
  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceLabel}>Total Crypto Value</Text>
      <Text style={styles.balanceApy}>+7.46% APR</Text>
      <Text style={styles.balanceAmount}>$10,500</Text>
      <View style={styles.cryptoIcons}>
        <Text style={[styles.cryptoIcon, { color: '#FFCA28' }]}>₿</Text>
        <Text style={[styles.cryptoIcon, { color: '#4CAF50' }]}>Ξ</Text>
        <Text style={[styles.cryptoIcon, { color: '#FF5722' }]}>T</Text>
        <Text style={[styles.cryptoIcon, { color: '#2196F3' }]}>S</Text>
        <Text style={[styles.cryptoIcon, { color: '#000' }]}>●</Text>
      </View>
    </View>
  );
}