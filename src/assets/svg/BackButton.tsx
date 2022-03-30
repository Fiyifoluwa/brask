import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const BackButton = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7.08335H3.83L9.42 1.95919L8 0.666687L0 8.00002L8 15.3334L9.41 14.0409L3.83 8.91669H16V7.08335Z" fill="#390000"/>
</svg>
`;

export default () => <SvgXml xml={BackButton} width="16" height="15" />;
