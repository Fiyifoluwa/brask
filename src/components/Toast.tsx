import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  GestureResponderEvent,
  TextStyle,
  TouchableOpacity,
  TextInputProps,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { typography } from '../styles/';

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
      color: '#fff',
      // fontFamily: Fonts.DMSansMedium,
      fontSize: typography.FONT_SIZE_14,
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
