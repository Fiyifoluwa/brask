import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { ToastProvider } from 'react-native-toast-notifications';

import Routes from './src/navigation/Routes';

import Toast from './src/components/Toast';
import { PRIMARY } from './src/styles/colors';

const App = () => {
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
          normalColor={PRIMARY}
          swipeEnabled={true}
          renderType={{
            normal: toast => <Toast text={toast.message} bgColor={PRIMARY} />,
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
