import React, { ReactNode } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TextStyle,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import { PRIMARY, SECONDARY, WHITE, BLACK } from '../../styles/colors';

interface CardProps {
  cardStyle?: ViewStyle;
  navigation: any;
  data?: any;
}

const TransactionCard = ({ cardStyle, navigation, data }: CardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('DetailScreen');
      }}
      style={[styles.cardStyle, cardStyle]}>
      <View
        style={{
          width: 53,
          height: 53,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 300,
          backgroundColor: PRIMARY,
          marginRight: 17,
        }}>
        <Text style={{ color: WHITE }}>pic</Text>
      </View>
      <View
        style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1 }}>
        <Text
          style={{
            fontFamily: 'Inter',
            fontSize: 14,
            fontWeight: '500',
            marginBottom: 8,
          }}>
          {data.accountName}
        </Text>
        <Text
          style={{
            fontFamily: 'Inter',
            fontSize: 12,
            fontWeight: '400',
            color: '#999EA1',
          }}>
          {data.date}
        </Text>
      </View>
      <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
        <Text
          style={{
            fontFamily: 'Inter',
            fontSize: 14,
            fontWeight: '600',
            marginBottom: 8,
            color: PRIMARY,
          }}>
          - ₦{data.amount}
        </Text>
        <Text
          style={{
            fontFamily: 'Inter',
            fontSize: 12,
            fontWeight: '500',
            color: '#999EA1',
          }}>
          {data.time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default TransactionCard;
