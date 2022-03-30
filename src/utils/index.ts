import { useState } from 'react';

import { paystack } from './apiConfig';

export const useGetRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRequest = (endpoint: string) => {
    setLoading(true);
    // paystack({
    //   method: 'GET',
    //   url: endpoint,
    // })
    //   .then(res => {
    //     // console.log(res.data);
    //     setData(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  return {
    data,
    loading,
    getRequest,
  };
};
