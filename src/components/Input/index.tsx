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
import { colors } from '../../styles';
import { typo } from '../../styles/typography';

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
  field: { name, onBlur, value },
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
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...props}
        />
        {rightIcon && !loading ? (
          <TouchableOpacity activeOpacity={1} onPress={rightIconPress}>
            {rightIconView}
          </TouchableOpacity>
        ) : null}
        {loading && <ActivityIndicator size={'small'} color={colors.PRIMARY} />}
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
    backgroundColor: colors.WHITE,
    paddingHorizontal: 16,
    marginTop: 12,
    paddingRight: 30,
    height: 52,
    color: colors.BLACK,
    borderWidth: 0.6,
    borderColor: colors.PRIMARY,
  },
  errorInput: {
    borderWidth: 0.6,
    borderColor: colors.RED,
  },
  textInput: {
    ...typo.font17,
    color: colors.BLACK,
    width: '100%',
    height: '100%',
    borderRadius: 8,
    paddingVertical: 18,
  },
  errorText: {
    ...typo.font11,
    color: colors.RED,
    marginTop: 6,
    fontWeight: '500',
  },
});
