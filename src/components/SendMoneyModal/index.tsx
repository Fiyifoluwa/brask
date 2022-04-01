import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { BackButton, ClearInput } from '../../assets/svg';
import BorderedWrapper from '../BorderedWrapper';
import Button from '../Button';
import Input from '../Input';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { Picker, PickerItem } from 'react-native-woodpicker';
import { useDispatch, useSelector } from 'react-redux';
import { account, addTransaction } from '../../redux/slices/bankSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'react-native-toast-notifications';
import { colors } from '../../styles';
import { typo } from '../../styles/typography';

const validationSchema = yup.object().shape({
  account: yup
    .number()
    .min(10, 'Account Number must be at least 10 digits')
    .required('Account Number is required'),
  amount: yup
    .number()
    .positive()
    .min(100, 'You cannot send less than ₦100.')
    .max(10000000, 'Your current transfer limit is ₦10,000,000.')
    .required('Amount is required'),
});

interface SendMoneyProps {
  isVisible: boolean;
  closeModal: () => void;
  banks: any[];
  banksReady?: boolean;
}

const SendMoneyModal: FC<SendMoneyProps> = ({
  isVisible,
  closeModal,
  banks,
  banksReady,
}) => {
  const [selectedBank, setSelectedBank] = useState<any>();
  const [accountNumber, setAccountNumber] = useState<string>();
  const [accountName, setAccountName] = useState<string>();
  const [amount, setAmount] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    if (accountNumber?.length !== 10) {
      setAccountName('');
    }
  }, [accountNumber]);

  // this block of code until banksArr is used to order the banks alphabetically
  const order = (a: any, b: any) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const banksArr = banks.slice().sort(order);

  const pickerData: Array<PickerItem> = banksArr?.map((bank: any) => ({
    label: bank.name,
    value: bank.id,
    code: bank.code,
  }));

  // this block of code resolves the name of the account holder the user is trying to query
  const resolveAccount = async (acctNo: string) => {
    if (acctNo?.length === 10) {
      setLoading(true);
      dispatch(
        account({
          accountNumber: acctNo,
          bank: selectedBank?.code,
        }),
      )
        .then(unwrapResult)
        .then((res: any) => {
          const result = JSON.parse(res);
          setAccountName(result.data.account_name);
          console.log(result.data);

          setLoading(false);
        })
        .catch((err: any) => {
          toast.show('Account not found, please try again.', {
            type: 'danger',
          });
          setLoading(false);
        });
    }
  };

  // realtime redux state for transactions
  const { transactions } = useSelector((state: RootState) => state.banks);

  // this block of code updates local storage with the new transaction. Occurs immediately after a successful transaction
  useEffect(() => {
    // console.log('after each transaction, update', transactions);
    AsyncStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // this block of code updates the redux state of transactions. Validation occurs before an update occurs
  const updateTransactions = () => {
    if (
      +amount >= 100 &&
      +amount <= 10000000 &&
      accountName &&
      selectedBank &&
      amount &&
      accountNumber?.length === 10
    ) {
      try {
        dispatch(
          addTransaction({
            accountName,
            amount,
            time: new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
            date: new Date().toLocaleDateString('en-UK', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }),
            selectedBank: selectedBank?.label,
            id: Math.floor(Math.random() * 1000000),
          }),
        );
        closeModal();
        setAccountName('');
        setSelectedBank(undefined);
      } catch (err) {
        toast.show('An error occurred with your transfer');
      }
    } else if (accountNumber?.length !== 10) {
      toast.show('Please enter a valid account number');
    } else {
      toast.show(
        'A problem occurred. Please check the details of this transfer.',
      );
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      coverScreen={true}
      hasBackdrop={true}
      avoidKeyboard
      onBackdropPress={() => {
        closeModal();
        setAccountName('');
        setSelectedBank(undefined);
      }}
      onBackButtonPress={() => {
        closeModal();
        setAccountName('');
        setSelectedBank(undefined);
      }}
      backdropOpacity={0.4}
      style={styles.bottomModalView}>
      <View style={styles.modal}>
        <View>
          <View style={styles.headerView}>
            <TouchableOpacity onPress={closeModal}>
              <BackButton />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Send Money</Text>
            <View style={{ opacity: 0 }}>
              <BackButton />
            </View>
          </View>

          <Formik
            initialValues={{
              account: '',
              bank: '',
              amount: '',
            }}
            onSubmit={async () => {
              updateTransactions();
            }}
            validationSchema={validationSchema}>
            {({ handleSubmit, setFieldValue, values }) => (
              <>
                <BorderedWrapper
                  title="Transfer To:"
                  wrapperStyle={styles.wrapperStyle}
                  titleStyle={styles.titleStyle}>
                  <View style={{ paddingHorizontal: 16 }}>
                    <View>
                      <View>
                        <Picker
                          item={
                            selectedBank || {
                              value: 'select',
                              label: 'Select Bank',
                            }
                          }
                          items={pickerData}
                          onItemChange={item => {
                            setFieldValue('bank', item.value);
                            console.log(item);
                            setSelectedBank(item);
                          }}
                          placeholder="Select Bank"
                          style={{
                            maxHeight: 52,
                          }}
                          containerStyle={styles.dropdownCont}
                          textInputStyle={styles.dropdownInputText}
                          isNullable={false}
                          mode="dialog"
                          disabled={loading || !banksReady}
                        />
                      </View>

                      <View style={{ marginVertical: 18 }}>
                        <Text style={styles.fieldTitle}>Account Number</Text>
                        <Field
                          component={Input}
                          name="account"
                          placeholder="1234567890"
                          placeholderTextColor={colors.GRAY40}
                          rightIcon={values.account !== '' ? true : false}
                          rightIconView={<ClearInput />}
                          editable={
                            selectedBank && loading !== true ? true : false
                          }
                          rightIconPress={
                            values.account.length > 0
                              ? () => {
                                  setFieldValue('account', '');
                                  setAccountNumber('');
                                }
                              : undefined
                          }
                          onChangeText={(text: any) => {
                            if (text.length === 10) {
                              setLoading(true);
                            }
                            setFieldValue('account', text);
                            resolveAccount(text);
                            setAccountNumber(text);
                          }}
                          loading={loading}
                          props={{
                            maxLength: 10,
                            keyboardType: 'number-pad',
                          }}
                        />
                      </View>

                      <View style={styles.accountNameView}>
                        {accountName ? (
                          <Text style={styles.accountName}>{accountName}</Text>
                        ) : null}
                      </View>

                      <View style={{ marginVertical: 24 }}>
                        <Text style={styles.fieldTitle}>Amount</Text>
                        <Field
                          component={Input}
                          name="amount"
                          placeholder="20000"
                          placeholderTextColor={colors.GRAY40}
                          rightIcon
                          onChangeText={(text: any) => {
                            setFieldValue('amount', text);
                            setAmount(text);
                          }}
                          rightIconView={
                            <View style={{ marginLeft: -10 }}>
                              <Text style={styles.amountRightIcon}>NGN</Text>
                            </View>
                          }
                          props={{
                            maxLength: 10,
                            keyboardType: 'number-pad',
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </BorderedWrapper>
                <Button
                  title="Transfer"
                  buttonStyle={{
                    backgroundColor: colors.PRIMARY,
                    borderRadius: 4,
                  }}
                  onPress={handleSubmit}
                  containerStyle={{ marginTop: 33 }}
                  titleStyle={{ color: colors.WHITE }}
                />
              </>
            )}
          </Formik>
        </View>
      </View>
    </Modal>
  );
};

export default SendMoneyModal;

const styles = StyleSheet.create({
  bottomModalView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modal: {
    width: '100%',
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    padding: 32,
    backgroundColor: colors.WHITE,
  },
  headerView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  headerTitle: {
    fontWeight: '500',
    ...typo.font18,
    color: colors.BROWN,
  },
  dropdownCont: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: 20,
    backgroundColor: colors.WHITE,
    borderRadius: 4,
    borderWidth: 0.6,
    borderColor: colors.PRIMARY,
  },
  dropdownInputText: {
    marginTop: -12,
    ...typo.font15,
    color: colors.BLACK,
    width: '100%',
  },
  wrapperStyle: { width: '100%', marginTop: 33 },
  titleStyle: { color: colors.BROWN, ...typo.font13 },
  accountNameView: {
    alignSelf: 'center',
    backgroundColor: colors.LIGHTBLUE,
    paddingHorizontal: 21,
    paddingVertical: 8,
    borderRadius: 4,
    minWidth: 180,
    minHeight: 32,
  },
  accountName: { color: colors.BROWN, letterSpacing: 0.1 },
  fieldTitle: { color: colors.BROWN, ...typo.font13 },
  amountRightIcon: {
    color: colors.GRAY50,
    ...typo.font13,
  },
});
