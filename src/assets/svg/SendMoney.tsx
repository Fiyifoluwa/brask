import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const SendMoney = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0833 16.0417C11.0833 17.1733 11.9583 18.0833 13.0316 18.0833H15.2249C16.1582 18.0833 16.9166 17.29 16.9166 16.2983C16.9166 15.2367 16.4499 14.8517 15.7616 14.6067L12.2499 13.3817C11.5616 13.1367 11.0949 12.7633 11.0949 11.69C11.0949 10.71 11.8532 9.905 12.7866 9.905H14.9799C16.0532 9.905 16.9283 10.815 16.9283 11.9467" stroke="#031867" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8.75V19.25" stroke="#031867" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.6666 14C25.6666 20.44 20.4399 25.6667 13.9999 25.6667C7.55992 25.6667 2.33325 20.44 2.33325 14C2.33325 7.56001 7.55992 2.33334 13.9999 2.33334" stroke="#031867" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.6667 7.00001V2.33334H21" stroke="#031867" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8333 8.16668L25.6666 2.33334" stroke="#031867" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

export default () => <SvgXml xml={SendMoney} width="28" height="28" />;
