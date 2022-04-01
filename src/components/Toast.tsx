import React from 'react';
import { StyleSheet, View, TextStyle, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography } from '../styles/';
import { typo } from '../styles/typography';

interface ToastProps {
  text: string | number | any;
  containerStyle?: TextStyle;
  textStyle?: TextStyle;
  bgColor: any;
}

const Toast: React.FC<ToastProps> = ({
  text,
  containerStyle,
  textStyle,
  bgColor,
}) => {
  const styles = StyleSheet.create({
    toastStyle: {
      backgroundColor: bgColor,
      paddingVertical: 16,
      paddingHorizontal: 24,
      marginBottom: 8,
      overflow: 'scroll',
      borderRadius: 16,
      width: '100%',
    },
    toastTextStyle: {
      color: colors.WHITE,
      ...typo.font12,
      fontWeight: '700',
    },
  });

  return (
    <SafeAreaView>
      <View style={[containerStyle, styles.toastStyle]}>
        <Text style={[textStyle, styles.toastTextStyle]}>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Toast;
