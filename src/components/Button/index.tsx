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

interface ButtonProps {
  loading?: boolean;
  title?: string;
  titleStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  buttonIcon?: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}

const Button = ({
  loading,
  title,
  titleStyle,
  buttonStyle,
  containerStyle,
  onPress,
  disabled,
  buttonIcon,
}: ButtonProps) => {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        disabled={disabled || loading}
        style={[
          styles.buttonStyle,
          buttonStyle,
          { opacity: disabled ? 0.6 : 1 },
        ]}>
        {loading ? (
          <ActivityIndicator size="small" color={PRIMARY} />
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
            }}>
            {buttonIcon ? buttonIcon : null}
            <Text style={[styles.title, titleStyle]}>{title}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // position: 'absolute',
    // bottom: 30,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: BLACK,
    fontSize: 17,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Inter',
    paddingLeft: 15,
    fontWeight: '500',
  },
  buttonStyle: {
    height: 55,
    width: '100%',
    backgroundColor: WHITE,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Button;
