import React, { ReactNode } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TextStyle,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import { PRIMARY, SECONDARY, WHITE, BLACK } from '../../styles/colors';

interface WrapperProps {
  children?: ReactNode;
}

const FullWidthWrapper = ({ children }: WrapperProps) => {
  return <View style={[styles.wrapperStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default FullWidthWrapper;
