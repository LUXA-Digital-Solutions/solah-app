import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

type ProgressBarProps = {
  percent: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
}) => {
  const clampedPercent = Math.min(Math.max(percent, 0), 100);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: clampedPercent,
      duration: 500,
      useNativeDriver: false, // can't animate width with native driver
    }).start();
  }, [clampedPercent]);

  const widthInterpolated = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View
      style={[
        styles.container,
      ]}
    >
      <Animated.View
        style={[
          styles.filled,
          {
            width: widthInterpolated,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: '#E6D3C7',
  },
  filled: {
    height: '100%',
    backgroundColor: '#B37B56',
    borderRadius: 3,
  },
});
