import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { ReceiveMoney, SendMoney } from '../assets/svg';
import BalanceCard from '../components/BalanceCard';
import Button from '../components/Button';
import { colors } from '../styles/';
import TransactionSection from '../components/TransactionSection';
import SendMoneyModal from '../components/SendMoneyModal';
import TransactionsModal from '../components/TransactionsModal';
import { getBanks } from '../redux/slices/bankSlice';
import { RootState } from '../redux/store';
import { unwrapResult } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'react-native-toast-notifications';
import { boxShadow } from '../styles/mixins';

export default function HomeScreen({ navigation }: any) {
  const [sendMoneyModal, setSendMoneyModal] = useState(false);
  const [transactionsModal, setTransactionsModal] = useState(false);
  const [banks, setBanks] = useState([]);

  const dispatch = useDispatch();
  const toast = useToast();

  const { transactions } = useSelector((state: RootState) => state.banks);

  useEffect(() => {
    try {
      dispatch(getBanks())
        .then(unwrapResult)
        .then((res: any) => {
          if (res) {
            setBanks(res);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.WHITE }}>
      <View style={styles.mainView}>
        <View style={[{ marginBottom: 50 }, boxShadow(colors)]}>
          <BalanceCard />
        </View>

        <View style={styles.buttonView}>
          <Button
            title="Send"
            buttonIcon={<SendMoney />}
            containerStyle={{ width: '42%' }}
            titleStyle={{
              color: colors.PRIMARY,
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
              color: colors.PRIMARY,
            }}
            buttonStyle={{
              height: 60,
            }}
            onPress={() => {
              AsyncStorage.clear();
              toast.show('Local storage cleared');
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
        banksReady={banks.length > 0}
        banks={banks}
        isVisible={sendMoneyModal}
        closeModal={() => setSendMoneyModal(false)}
      />
      <TransactionsModal
        isVisible={transactionsModal}
        closeModal={() => setTransactionsModal(false)}
        navigation={navigation}
        transactions={transactions}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.GRAY5,
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 32,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});
