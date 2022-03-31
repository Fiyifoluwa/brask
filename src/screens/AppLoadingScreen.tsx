import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { setTransactions } from '../redux/slices/bankSlice';

const { width, height } = Dimensions.get('screen');

import { colors } from '../styles';

const AppLoadingScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    function getTransactions() {
      setTimeout(async () => {
        const transactions: any = await AsyncStorage.getItem('transactions');

        let trans = JSON.parse(transactions);

        if (trans == null) {
          dispatch(setTransactions([]));
        } else {
          dispatch(setTransactions(trans));
        }

        navigation.navigate('HomeScreen');
      }, 2000);
    }

    getTransactions();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.fullPageLoader}>
        <ActivityIndicator color={colors.PRIMARY} size={'large'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullPageLoader: {
    position: 'absolute',
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    opacity: 1,
    flex: 1,
    zIndex: 999,
  },
});

export default AppLoadingScreen;
