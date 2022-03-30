import React, { useEffect } from 'react';
import {
  PermissionsAndroid,
  Platform,
  StatusBar,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { ToastProvider } from 'react-native-toast-notifications';
import { FLW_KEY, BASE_URL } from '@env';

import Toast from './src/components/Toast';
import { spacing, typography } from './src/styles';
import BalanceCard from './src/components/BalanceCard';
import Button from './src/components/Button';
import { PRIMARY, WHITE } from './src/styles/colors';
import BorderedWrapper from './src/components/BorderedWrapper';
import Routes from './src/navigation/Routes';

const App = () => {
  // useEffect(() => {
  //   console.log(BASE_URL);
  //   console.log(FLW_KEY);
  // }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ToastProvider
          placement="top"
          duration={2000}
          style={{ marginBottom: 10 }}
          successColor="green"
          dangerColor="red"
          warningColor="orange"
          normalColor="#6610F2"
          swipeEnabled={true}
          renderType={{
            normal: toast => <Toast text={toast.message} bgColor="#6610F2" />,
            danger: toast => <Toast text={toast.message} bgColor="#F83C33" />,
            success: toast => <Toast text={toast.message} bgColor="#45D988" />,
          }}>
          <Routes />
        </ToastProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
