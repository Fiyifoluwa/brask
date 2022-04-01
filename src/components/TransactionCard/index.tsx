import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { colors } from '../../styles';
import { typo } from '../../styles/typography';

interface CardProps {
  cardStyle?: ViewStyle;
  navigation: any;
  data?: any;
  closeModal?: () => void;
}

const TransactionCard = ({
  cardStyle,
  navigation,
  data,
  closeModal,
}: CardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('DetailScreen', { data });
        closeModal && closeModal();
      }}
      style={[styles.cardStyle, cardStyle]}>
      <View
        style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1 }}>
        <Text style={styles.accountName}>{data.accountName}</Text>
        <Text style={styles.date}>{data.date}</Text>
      </View>
      <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
        <Text style={styles.amount}>- ₦{data.amount}</Text>
        <Text style={styles.time}>{data.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 20,
  },
  accountName: {
    ...typo.font16,
    fontWeight: '500',
    marginBottom: 8,
    color: colors.BLACK,
  },
  date: {
    ...typo.font12,
    fontWeight: '400',
    color: colors.GRAY45,
  },
  amount: {
    ...typo.font14,
    fontWeight: '600',
    marginBottom: 8,
    color: colors.PRIMARY,
  },
  time: {
    ...typo.font12,
    fontWeight: '500',
    color: colors.GRAY45,
  },
});

export default TransactionCard;
