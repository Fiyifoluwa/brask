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
import { colors } from '../../styles';
import { typo } from '../../styles/typography';

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
          <ActivityIndicator size="small" color={colors.PRIMARY} />
        ) : (
          <View style={styles.buttonContent}>
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
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: colors.BLACK,
    ...typo.font17,
    alignSelf: 'center',
    textAlign: 'center',
    paddingLeft: 15,
    fontWeight: '500',
  },
  buttonStyle: {
    height: 55,
    width: '100%',
    backgroundColor: colors.WHITE,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default Button;
