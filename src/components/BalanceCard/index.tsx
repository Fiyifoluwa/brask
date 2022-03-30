import { View, Text } from 'react-native';
import React from 'react';
import { ShowBalance } from '../../assets/svg';

const cardData = [
  {
    name: 'Hazel Grace',
    cardNumber: '**** **** **** ****',
    balance: '***, ***.**',
  },
  {
    name: 'Hazel Grace',
    cardNumber: '**** **** **** ****',
    balance: '***, ***.**',
  },
  {
    name: 'Hazel Grace',
    cardNumber: '**** **** **** ****',
    balance: '***, ***.**',
  },
];

export default function BalanceCard() {
  return (
    <>
      {/* {cardData.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: '#fff',
            borderRadius: 5,
            marginTop: 10,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 10 }}>
              <Text>{item.name}</Text>
              <Text>{item.cardNumber}</Text>
            </View>
            <View>
              <Text>{item.balance}</Text>
            </View>
          </View>
        </View>
      ))} */}
      <View
        // key={index}
        style={{
          width: 299,
          height: 125,
          backgroundColor: '#fff',
          borderRadius: 8,
          marginVertical: 15,
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 5,
        }}>
        <View style={{ position: 'absolute', top: 16, right: 16 }}>
          <ShowBalance />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontSize: 12,
                color: '#828282',
                marginBottom: 12,
                fontFamily: 'Inter',
              }}>
              Hazel Grace
            </Text>
            <Text style={{ fontSize: 20, color: '#333333' }}>
              ₦ ***, ***, ***
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 12, color: '#333333', marginBottom: 12 }}>
              Prepaid Card: *****43
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
