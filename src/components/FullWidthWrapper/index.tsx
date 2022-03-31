import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

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
