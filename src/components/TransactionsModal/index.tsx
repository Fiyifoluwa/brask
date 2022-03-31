import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import { ClearInput } from '../../assets/svg';
import { colors } from '../../styles';
import TransactionCard from '../TransactionCard';

interface TMProps {
  wrapperStyle?: ViewStyle;
  navigation: any;
  isVisible: boolean;
  closeModal: () => void;
  transactions: any[];
}

const TransactionsModal = ({
  wrapperStyle,
  navigation,
  isVisible,
  closeModal,
  transactions,
}: TMProps) => {
  let transactionsData: any[] = [];

  if (transactions) {
    transactions.forEach((transaction: any) => {
      transactionsData.unshift(transaction);
    });
  }

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
          {transactions &&
            transactionsData.map(transaction => (
              <TransactionCard
                data={transaction}
                key={transaction.id}
                navigation={navigation}
                closeModal={closeModal}
              />
            ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    backgroundColor: colors.WHITE,
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
  },
  modal: {
    width: '100%',
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    padding: 20,
    paddingBottom: 32,
    flex: 0.9,
    backgroundColor: colors.WHITE,
  },
});

export default TransactionsModal;
