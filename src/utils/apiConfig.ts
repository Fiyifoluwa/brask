import axios from 'axios';
import { FLW_KEY, BASE_URL } from '@env';

export const paystack = {
  fetchBanks: () => {
    axios.get(`${BASE_URL}banks/NG`),
      {
        headers: {
          Authorization: `Bearer ${FLW_KEY}`,
          'Content-Type': 'application/json',
        },
      };
  },
  getAccountDetails: () => {
    axios
      .post(`${BASE_URL}accounts/resolve`, {
        headers: {
          Authorization: `Bearer ${FLW_KEY}`,
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        console.log(res);
      });
  },
  sendMoney: () => {
    axios.post(`${BASE_URL}transfers`),
      {
        amount: '100',
        currency: 'NGN',
        email: '',
      };
  },
};
