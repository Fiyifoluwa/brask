import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const OwnAccount = `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="15.5" fill="#F5FAFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2727 7C17.2928 7 18.9594 8.66657 18.9594 10.6867C18.9594 12.7067 17.2928 14.3733 15.2727 14.3733C13.2526 14.3733 11.5861 12.7067 11.5861 10.6867C11.5861 8.66657 13.2526 7 15.2727 7Z" fill="#011D85"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.545 22.2692C22.545 22.8247 22.0905 23.2792 21.535 23.2792H9.01044C8.45491 23.2792 8.00039 22.8247 8.00039 22.2692C7.89939 12.4213 22.646 12.4213 22.545 22.2692Z" fill="#011D85"/>
</svg>`;

export default () => <SvgXml xml={OwnAccount} width="31" height="31" />;
