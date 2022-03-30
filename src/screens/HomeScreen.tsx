import React, { useEffect, useState } from 'react';
import {
  PermissionsAndroid,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ToastProvider } from 'react-native-toast-notifications';

import Toast from '../components/Toast';
import { spacing, typography } from '../styles';
import { ReceiveMoney, SendMoney } from '../assets/svg';
import BalanceCard from '../components/BalanceCard';
import Button from '../components/Button';
import { PRIMARY, WHITE } from '../styles/colors';
import BorderedWrapper from '../components/BorderedWrapper';
import TransactionSection from '../components/TransactionSection';
import SendMoneyModal from '../components/SendMoneyModal';
import TransactionsModal from '../components/TransactionsModal';
import { account, getBanks } from '../redux/slices/bankSlice';
import { RootState } from '../redux/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { BASE_URL_2 } from '@env';

export default function HomeScreen({ navigation }: any) {
  const [sendMoneyModal, setSendMoneyModal] = useState(false);
  const [transactionsModal, setTransactionsModal] = useState(false);
  const [banks, setBanks] = useState([]);

  const dispatch = useDispatch();

  const { transactions } = useSelector((state: RootState) => state.banks);

  useEffect(() => {
    dispatch(getBanks())
      .then(unwrapResult)
      .then((res: any) => setBanks(res));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{
          backgroundColor: '#F4F4F4',
          width: '100%',
          paddingVertical: 24,
          paddingHorizontal: 32,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{ marginBottom: 50 }}>
          <BalanceCard />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
          }}>
          <Button
            title="Send"
            buttonIcon={<SendMoney />}
            containerStyle={{ width: '42%' }}
            titleStyle={{
              color: PRIMARY,
            }}
            buttonStyle={{
              height: 60,
            }}
            onPress={() => setSendMoneyModal(true)}
          />
          <Button
            title="Receive"
            buttonIcon={<ReceiveMoney />}
            containerStyle={{ width: '42%' }}
            titleStyle={{
              color: PRIMARY,
            }}
            buttonStyle={{
              height: 60,
            }}
            onPress={() => {
              navigation.navigate('DumpScreen');
            }}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TransactionSection
          showMore={() => setTransactionsModal(true)}
          navigation={navigation}
          transactions={transactions}
        />
      </View>
      <SendMoneyModal
        banks={banks}
        isVisible={sendMoneyModal}
        closeModal={() => setSendMoneyModal(false)}
      />
      <TransactionsModal
        isVisible={transactionsModal}
        closeModal={() => setTransactionsModal(false)}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
