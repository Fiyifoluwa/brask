import {
  TextInput,
  StyleSheet,
  View,
  GestureResponderEvent,
  TextStyle,
  TouchableOpacity,
  TextInputProps,
  Text,
  ActivityIndicator,
} from 'react-native';
import React, { FC, ReactNode } from 'react';
import { BLACK, GRAY60, PRIMARY, RED, WHITE } from '../../styles/colors';

interface InputProps {
  value: string | number | any;
  placeholder: string | number | any;
  placeholderTextColor?: string;
  textInputStyle?: TextStyle;
  containerStyle?: TextStyle;
  props?: TextInputProps;
  onChangeText: (arg: string) => void;
  rightIcon?: boolean;
  loading?: boolean;
  rightIconPress?: (event: GestureResponderEvent) => void;
  rightIconView?: ReactNode;
  field?: any;
  form?: any;
  editable?: boolean;
}

const Input: FC<InputProps> = ({
  // value,
  placeholder,
  placeholderTextColor,
  textInputStyle,
  containerStyle,
  props,
  onChangeText,
  rightIcon,
  loading,
  rightIconPress,
  rightIconView,
  field: { name, onBlur, onChange, value },
  form: { errors, touched, setFieldTouched },
  editable,
}) => {
  const hasError = errors[name] && touched[name];

  return (
    <View>
      <View
        style={[
          containerStyle,
          styles.inputContainer,
          hasError && styles.errorInput,
        ]}>
        <TextInput
          style={[styles.textInput, textInputStyle]}
          onChangeText={onChangeText}
          value={value}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardAppearance="dark"
          // @ts-ignore
          // onChangeText={(text: String) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...props}
        />
        {rightIcon && !loading ? (
          <TouchableOpacity onPress={rightIconPress}>
            {rightIconView}
          </TouchableOpacity>
        ) : null}
        {loading && <ActivityIndicator size={'small'} color={PRIMARY} />}
      </View>
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor: WHITE,
    paddingHorizontal: 16,
    marginTop: 12,
    paddingRight: 30,
    height: 52,
    color: BLACK,
    borderWidth: 0.6,
    borderColor: PRIMARY,
  },
  errorInput: {
    borderWidth: 0.6,
    borderColor: RED,
  },
  textInput: {
    fontFamily: 'Inter',
    color: BLACK,
    width: '100%',
    height: '100%',
    borderRadius: 8,
    paddingVertical: 18,
  },
  errorText: {
    // ...Typography.font10,
    fontSize: 10,
    color: RED,
    marginTop: 6,
    fontWeight: '500',
  },
});
