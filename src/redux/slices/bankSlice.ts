import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FLW_KEY, BASE_URL, BASE_URL_2, API } from '@env';
import { useDispatch } from 'react-redux';

interface initialStateType {
  banks: Array<any>;
  account: null;
  status: null;
  transactions: Array<any>;
}

const initialState: initialStateType = {
  banks: [],
  account: null,
  status: null,
  transactions: [],
};

export const getBanks: any = createAsyncThunk('banks/getBanks', async () => {
  return axios
    .get(`${BASE_URL_2}bank`, {
      headers: {
        Authorization: `Bearer ${API}`,
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      console.log('===> getBanks error ', err);
      return err;
    });
});

export const account: any = createAsyncThunk(
  'banks/account',
  async (data: any) => {
    // return axios
    //   .get(
    //     `${BASE_URL_2}bank/resolve?account_number=${data.accountNumber}&bank_code=${data.bank}
    //   `,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${API}`,
    //       },
    //     },
    //   )
    //   .then(res => console.log(res))
    //   .catch(err => {
    //     console.log('===> account res err', err);
    //   });

    return fetch(
      `${BASE_URL_2}bank/resolve?account_number=${data.accountNumber}&bank_code=${data.bank}`,
      {
        headers: {
          Authorization: `Bearer ${API}`,
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.text())
      .then(result => {
        return result;
      })
      .catch(error => {
        return error;
      });
  },
);

export const bankSlice = createSlice({
  name: 'banks',
  initialState,
  reducers: {
    setTransactions: (state, { payload }) => {
      state.transactions.push(payload);
    },
  },
  extraReducers: {
    [getBanks.pending]: (state: any) => {
      state.status = 'loading';
    },
    [getBanks.fulfilled]: (state: any, action: any) => {
      state.banks = action.payload;
      state.status = 'success';
    },
    [getBanks.rejected]: (state: any) => {
      state.status = 'error';
    },
    [account.pending]: (state: any) => {
      state.status = 'loading';
    },
    [account.fulfilled]: (state: any, action: any) => {
      state.banks = action.payload;
      state.status = 'success';
    },
    [account.rejected]: (state: any) => {
      state.status = 'error';
    },
  },
});

export const { setTransactions } = bankSlice.actions;

export const selectBanks = (state: {
  banks: any[];
  account: any;
  status: any;
}) => state.banks;

export const selectTransactions = (state: { banks: { transactions: any[] } }) =>
  state.banks.transactions;

export default bankSlice.reducer;
