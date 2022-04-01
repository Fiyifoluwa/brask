import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  ScrollView,
} from 'react-native';
import { CaretDown } from '../../assets/svg';
import { colors } from '../../styles';
import { typo } from '../../styles/typography';
import TransactionCard from '../TransactionCard';

interface TSProps {
  wrapperStyle?: ViewStyle;
  navigation: any;
  showMore: () => void;
  transactions: any[];
}

const TransactionSection = ({
  wrapperStyle,
  navigation,
  showMore,
  transactions,
}: TSProps) => {
  let transactionsData: any[] = [];

  if (transactions) {
    transactions.forEach((transaction: any) => {
      transactionsData.unshift(transaction);
    });
  }

  // this line of code returns the 5 most recent transactions
  const fiveTransactions = transactionsData.slice(0, 5);

  return (
    <>
      <View style={styles.transactionSection}>
        <Text style={styles.transactionSectionTitle}>Recent Activity</Text>
        <TouchableOpacity
          onPress={showMore}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.viewMore}>All</Text>
          <View>
            <CaretDown />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={[styles.wrapperStyle, wrapperStyle, { flex: 1 }]}
        contentContainerStyle={{ alignItems: 'center' }}>
        {transactions &&
          fiveTransactions.map(transaction => (
            <TransactionCard
              data={transaction}
              key={transaction.id}
              navigation={navigation}
            />
          ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 20,
  },
  transactionSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  transactionSectionTitle: {
    ...typo.font16,
    fontWeight: '500',
    color: '#9C9FA0',
  },
  viewMore: {
    marginRight: 4,
    ...typo.font13,
    fontWeight: '500',
    color: colors.PRIMARY,
  },
});

export default TransactionSection;
