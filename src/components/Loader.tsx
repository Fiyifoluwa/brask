import React from 'react';
import { ActivityIndicator, View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

import { colors } from '../styles';

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return loading ? (
    <View style={styles.fullPageLoader}>
      <ActivityIndicator color={colors.PRIMARY} size={'large'} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  fullPageLoader: {
    position: 'absolute',
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    opacity: 0.4,
  },
});

export default Loader;
