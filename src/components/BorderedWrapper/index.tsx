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
  wrapperStyle?: ViewStyle;
  children: ReactNode;
  title?: string;
  titleStyle?: TextStyle;
}

const BorderedWrapper = ({
  wrapperStyle,
  children,
  title,
  titleStyle,
}: WrapperProps) => {
  return (
    <View style={[styles.wrapperStyle, wrapperStyle]}>
      {title ? (
        <View
          style={{
            width: '99.8%',
            padding: 16,
            backgroundColor: '#FBFBFB',
            borderTopEndRadius: 4,
            borderTopStartRadius: 4,
          }}>
          <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
        </View>
      ) : null}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    backgroundColor: WHITE,
    borderRadius: 4,
    borderColor: PRIMARY,
    borderWidth: 0.6,
  },
  titleStyle: {
    fontSize: 14,
    color: '#390000',
  },
});

export default BorderedWrapper;
