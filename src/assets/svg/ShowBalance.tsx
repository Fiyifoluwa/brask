import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const ShowBalance = `<svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8974 4.73583C17.7255 4.54167 13.6323 0 9 0C4.3677 0 0.2745 4.54167 0.1026 4.73583C-0.0342 4.89 -0.0342 5.11083 0.1026 5.265C0.2745 5.45833 4.3677 10 9 10C13.6323 10 17.7255 5.45833 17.8974 5.26417C18.0342 5.11083 18.0342 4.88917 17.8974 4.73583ZM9 9.16667C5.4018 9.16667 1.9863 5.95583 1.0494 5C1.9863 4.04417 5.4027 0.833333 9 0.833333C12.5973 0.833333 16.0137 4.04417 16.9506 5C16.0137 5.95583 12.5982 9.16667 9 9.16667Z" fill="#390000"/>
<path d="M9.00005 2.5C7.51145 2.5 6.30005 3.62167 6.30005 5C6.30005 6.37833 7.51145 7.5 9.00005 7.5C10.4886 7.5 11.7 6.37833 11.7 5C11.7 3.62167 10.4886 2.5 9.00005 2.5ZM9.00005 6.66667C8.00735 6.66667 7.20005 5.91917 7.20005 5C7.20005 4.08083 8.00735 3.33333 9.00005 3.33333C9.99275 3.33333 10.8 4.08083 10.8 5C10.8 5.91917 9.99275 6.66667 9.00005 6.66667Z" fill="#390000"/>
</svg>
`;

export default () => <SvgXml xml={ShowBalance} width="18" height="10" />;
