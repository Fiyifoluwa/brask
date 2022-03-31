import React, { ReactNode } from 'react';
import { View, Text, TextStyle, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../styles';
import { typo } from '../../styles/typography';
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
        <View style={styles.titleView}>
          <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
        </View>
      ) : null}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    backgroundColor: colors.WHITE,
    borderRadius: 4,
    borderColor: colors.PRIMARY,
    borderWidth: 0.6,
  },
  titleStyle: {
    ...typo.font16,
    color: '#390000',
  },
  titleView: {
    width: '99.8%',
    padding: 16,
    backgroundColor: colors.GRAY5,
    borderTopEndRadius: 4,
    borderTopStartRadius: 4,
  },
});

export default BorderedWrapper;
