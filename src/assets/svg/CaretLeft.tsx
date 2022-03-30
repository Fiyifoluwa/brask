import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const CaretLeft = `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.89001 12.42L6.71001 13.6L0.110013 6.99999L6.71001 0.399994L7.89001 1.57999L2.47001 6.99999L7.89001 12.42H7.89001Z" fill="#011D85"/>
</svg>
`;

export default () => <SvgXml xml={CaretLeft} width="8" height="14" />;
