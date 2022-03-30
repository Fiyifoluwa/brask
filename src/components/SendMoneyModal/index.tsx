import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import {
  BLACK,
  BROWN,
  GRAY10,
  GRAY20,
  GRAY30,
  GRAY40,
  GRAY50,
  LIGHTBLUE,
  PRIMARY,
  WHITE,
} from '../../styles/colors';
import {
  BackButton,
  ClearInput,
  OtherBanks,
  OwnAccount,
} from '../../assets/svg';
import BorderedWrapper from '../BorderedWrapper';
import Button from '../Button';
import Input from '../Input';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { Picker, PickerItem } from 'react-native-woodpicker';
import { useDispatch, useSelector } from 'react-redux';
import { account, setTransactions } from '../../redux/slices/bankSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

const validationSchema = yup.object().shape({
  account: yup
    .number()
    .min(10, ({ min }) => `Account Number must be at least ${min} digits`)
    .required('Account Number is required'),
  amount: yup.number().required('Amount is required'),
});

interface SendMoneyProps {
  isVisible: boolean;
  closeModal: () => void;
  banks: any[];
  // onPressTrue: () => void;
}

const SendMoneyModal: FC<SendMoneyProps> = ({
  isVisible,
  // onPressTrue,
  closeModal,
  banks,
}) => {
  const [selectedBank, setSelectedBank] = useState<any>();
  const [accountNumber, setAccountNumber] = useState<string>();
  const [accountName, setAccountName] = useState<string>();
  const [amount, setAmount] = useState<string>();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const order = (a: any, b: any) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    if (accountNumber?.length !== 10) {
      setAccountName('');
    }
  }, [accountNumber]);

  const banksArr = banks.slice().sort(order);

  const pickerData: Array<PickerItem> = banksArr?.map((bank: any) => ({
    label: bank.name,
    value: bank.id,
    code: bank.code,
  }));

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
          // setAccountName(res?.data.account_name);
          const result = JSON.parse(res);
          setAccountName(result.data.account_name);
          console.log(result.data);

          setLoading(false);
        })
        .catch((err: any) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  const { transactions } = useSelector((state: RootState) => state.banks);

  useEffect(() => {
    console.log(transactions);
  }, [transactions]);

  const addTransaction = () => {
    try {
      dispatch(
        setTransactions({
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
          selectedBank: selectedBank?.value,
          id: Math.floor(Math.random() * 1000000),
        }),
      );
    } catch (err) {
      console.log(err);
    }
  };

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
        <View>
          <View style={styles.headerView}>
            <TouchableOpacity onPress={closeModal}>
              <BackButton />
            </TouchableOpacity>

            <Text
              style={{
                fontFamily: 'Inter',
                fontWeight: '500',
                fontSize: 18,
                color: BROWN,
              }}>
              Send Money
            </Text>
            <View style={{ opacity: 0 }}>
              <BackButton />
            </View>
          </View>

          <BorderedWrapper
            title="Transfer To:"
            wrapperStyle={{ width: '100%', marginTop: 33 }}
            titleStyle={{ color: BROWN, fontSize: 14 }}>
            <View style={{ paddingHorizontal: 16 }}>
              <Formik
                initialValues={{
                  account: '',
                  bank: '',
                  amount: '',
                }}
                onSubmit={async (values: any) => {}}
                validationSchema={validationSchema}>
                {({ handleSubmit, setFieldValue, values }) => (
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
                        onItemChange={(item, index) => {
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
                      />
                    </View>

                    <View style={{ marginVertical: 18 }}>
                      <Text style={{ color: BROWN, fontSize: 14 }}>
                        Account Number
                      </Text>
                      <Field
                        component={Input}
                        name="account"
                        placeholder="1234567890"
                        placeholderTextColor={GRAY40}
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

                    <View
                      style={{
                        alignSelf: 'center',
                        backgroundColor: LIGHTBLUE,
                        paddingHorizontal: 21,
                        paddingVertical: 8,
                        borderRadius: 4,
                        minWidth: 180,
                        minHeight: 32,
                      }}>
                      {accountName ? (
                        <Text style={{ color: BROWN, letterSpacing: 0.1 }}>
                          {accountName}
                        </Text>
                      ) : null}
                    </View>

                    <View style={{ marginVertical: 24 }}>
                      <Text style={{ color: BROWN, fontSize: 14 }}>Amount</Text>
                      <Field
                        component={Input}
                        name="amount"
                        placeholder="20, 000"
                        placeholderTextColor={GRAY40}
                        rightIcon
                        rightIconPress={() => {
                          console.log(values.amount);
                        }}
                        onChangeText={(text: any) => {
                          setFieldValue('amount', text);
                          setAmount(text);
                        }}
                        rightIconView={
                          <View style={{ marginLeft: -10 }}>
                            <Text
                              style={{
                                color: GRAY50,
                                fontSize: 14,
                                fontFamily: 'Inter',
                              }}>
                              NGN
                            </Text>
                          </View>
                        }
                        props={{
                          maxLength: 10,
                          keyboardType: 'number-pad',
                        }}
                      />
                    </View>
                  </View>
                )}
              </Formik>
            </View>
          </BorderedWrapper>

          <Button
            title="Transfer"
            buttonStyle={{
              backgroundColor: PRIMARY,
              borderRadius: 4,
            }}
            onPress={() => {
              addTransaction();
            }}
            containerStyle={{ marginTop: 33 }}
            titleStyle={{ color: WHITE }}
          />
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
    // flex: 1,
  },
  modal: {
    width: '100%',
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    padding: 32,
    // flex: 0.9,
    // paddingVertical: 35,
    // paddingTop: 35,
    backgroundColor: WHITE,
  },
  headerView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  dropdownCont: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginTop: 20,
    backgroundColor: WHITE,
    borderRadius: 4,
    borderWidth: 0.6,
    borderColor: PRIMARY,
  },
  dropdownInputText: {
    marginTop: -12,
    fontFamily: 'Inter',
    fontSize: 14,
    color: BLACK,
    width: '100%',
  },
});
