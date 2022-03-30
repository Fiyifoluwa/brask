import React, { ReactNode } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TextStyle,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { CaretDown } from '../../assets/svg';
import { PRIMARY, SECONDARY, WHITE, BLACK } from '../../styles/colors';
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

  transactions.forEach((transaction: any) => {
    transactionsData.unshift(transaction);
  });

  const fiveTransactions = transactionsData.slice(0, 5);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingVertical: 24,
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#9C9FA0',
          }}>
          Recent Activity
        </Text>
        <TouchableOpacity
          onPress={showMore}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginRight: 4,
              fontSize: 12,
              fontWeight: '500',
              color: PRIMARY,
            }}>
            All
          </Text>
          <View>
            <CaretDown />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={[styles.wrapperStyle, wrapperStyle, { flex: 1 }]}
        contentContainerStyle={{ alignItems: 'center' }}>
        {fiveTransactions.map((transaction, index) => (
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
    backgroundColor: WHITE,
    // alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default TransactionSection;
