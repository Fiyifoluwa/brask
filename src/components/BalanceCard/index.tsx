import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ShowBalance } from '../../assets/svg';
import { colors } from '../../styles';
import { typo } from '../../styles/typography';

export default function BalanceCard() {
  return (
    <>
      <View style={styles.balanceCard}>
        <View style={styles.hideBalance}>
          <ShowBalance />
        </View>
        <View>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.accountName}>Hazel Grace</Text>
            <Text style={styles.balance}>₦ ***, ***, ***</Text>
          </View>
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.cardNo}>Prepaid Card: *****43</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  balanceCard: {
    width: 299,
    height: 125,
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    marginVertical: 15,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
  accountName: {
    color: colors.GRAY55,
    marginBottom: 12,
    ...typo.font14,
  },
  balance: { color: colors.GRAY80, ...typo.font24 },
  cardNo: { ...typo.font14, color: colors.GRAY80 },
  hideBalance: { position: 'absolute', top: 16, right: 16 },
});
