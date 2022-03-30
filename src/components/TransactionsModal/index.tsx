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
import Modal from 'react-native-modal';
import { CaretDown, ClearInput } from '../../assets/svg';
import { PRIMARY, SECONDARY, WHITE, BLACK } from '../../styles/colors';
import TransactionCard from '../TransactionCard';

interface TMProps {
  wrapperStyle?: ViewStyle;
  navigation: any;
  isVisible: boolean;
  closeModal: () => void;
}

const TransactionsModal = ({
  wrapperStyle,
  navigation,
  isVisible,
  closeModal,
}: TMProps) => {
  return (
    <Modal
      isVisible={isVisible}
      coverScreen={true}
      hasBackdrop={true}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      backdropOpacity={0.4}
      style={styles.bottomModalView}>
      <View style={styles.modal}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={closeModal}>
            <ClearInput />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={[styles.wrapperStyle, wrapperStyle]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center' }}>
          <TransactionCard navigation={navigation} />
          <TransactionCard navigation={navigation} />
          <TransactionCard navigation={navigation} />
          <TransactionCard navigation={navigation} />
          <TransactionCard navigation={navigation} />
          <TransactionCard navigation={navigation} />
          <TransactionCard navigation={navigation} />
          <TransactionCard navigation={navigation} />
          <TransactionCard navigation={navigation} />
          <TransactionCard navigation={navigation} />
          <TransactionCard navigation={navigation} />
          <TransactionCard navigation={navigation} />
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    backgroundColor: WHITE,
    // alignItems: 'center',
  },
  headerView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  bottomModalView: {
    justifyContent: 'flex-end',
    margin: 0,
    // flex: 1,
  },
  modal: {
    width: '100%',
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    padding: 20,
    paddingBottom: 32,
    flex: 0.9,
    // paddingVertical: 35,
    // paddingTop: 35,
    backgroundColor: WHITE,
  },
});

export default TransactionsModal;
