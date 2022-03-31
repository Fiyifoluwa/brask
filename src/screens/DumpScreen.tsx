import React, { useEffect } from 'react';
import {
  PermissionsAndroid,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-native-toast-notifications';

import Toast from '../components/Toast';
import { spacing, typography } from '../styles';
import {
  BackButton,
  CaretLeft,
  CaretRight,
  ClearInput,
  CaretDown,
  OtherBanks,
  OwnAccount,
  ReceiveMoney,
  SendMoney,
  ShowBalance,
} from '../assets/svg';
import BalanceCard from '../components/BalanceCard';
import Button from '../components/Button';
import { PRIMARY, WHITE } from '../styles/colors';
import BorderedWrapper from '../components/BorderedWrapper';
import TransactionCard from '../components/TransactionCard';

export default function DumpScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <View
          style={{
            backgroundColor: 'yellow',
            width: '100%',
            height: 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <ShowBalance />
          <SendMoney />
          <ReceiveMoney />
          <CaretDown />
          <OwnAccount />
          <OtherBanks />
          <ClearInput />
          <BackButton />
          <CaretLeft />
          <CaretRight />
        </View>
        <View
          style={{
            backgroundColor: 'lightblue',
            width: '100%',
            height: 150,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <BalanceCard />
        </View>
        <View
          style={{
            backgroundColor: 'beige',
            width: '100%',
            // height: 120,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: 20,
          }}>
          <BorderedWrapper
            title="Transfer From:"
            wrapperStyle={{ width: '100%' }}>
            <View
              style={{
                height: 50,
              }}></View>
          </BorderedWrapper>
        </View>
        <View
          style={{
            backgroundColor: 'pink',
            height: 150,
            padding: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Button
              title="Send"
              disabled
              buttonIcon={<SendMoney />}
              containerStyle={{ width: '45%' }}
              titleStyle={{
                color: PRIMARY,
              }}
            />
            <Button
              title="Receive"
              buttonIcon={<ReceiveMoney />}
              containerStyle={{ width: '45%' }}
              titleStyle={{
                color: PRIMARY,
              }}
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Button
              title="Transfer"
              buttonStyle={{
                backgroundColor: PRIMARY,
                borderRadius: 4,
              }}
              titleStyle={{ color: WHITE }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'beige',
            width: '100%',
            // height: 120,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: 20,
          }}>
          {/* <TransactionCard navigation={navigation} /> */}
        </View>
        {/* <Text
            style={{
              color: 'white',
              fontSize: typography.FONT_SIZE_40,
              marginBottom: spacing.SCALE_16,
            }}></Text> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
