import React from 'react';
import {Pressable, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import ButtonBackground from '../../assets/svgs/ButtonBackground';
import Checkmark from '../../assets/svgs/Checkmark';
import {styles} from './Button.style';

const Button = () => {
  const checkmark = useSharedValue(0);
  const text = useSharedValue(1);
  const background = useSharedValue(1);

  const checkMarkStyles = useAnimatedStyle(() => {
    return {
      opacity: checkmark.value,
    };
  });

  const textStyles = useAnimatedStyle(() => {
    return {
      opacity: text.value,
    };
  });

  const backgroundStyles = useAnimatedStyle(() => {
    return {
      opacity: background.value,
    };
  });

  const config = {
    duration: 600,
  };

  const onPress = () => {
    text.value = withTiming(0, config);
    checkmark.value = withDelay(
      config.duration,
      withTiming(1, config, finished => {
        if (finished) {
          checkmark.value = withTiming(0, config);
          background.value = withTiming(0, config);
        }
      }),
    );
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Animated.Text style={[styles.text, textStyles]}>Join</Animated.Text>
      <Animated.View style={[styles.checkmark, checkMarkStyles]}>
        <Checkmark />
      </Animated.View>
      <Animated.View style={backgroundStyles}>
        <ButtonBackground />
      </Animated.View>
      <Text style={styles.completedText}>Joined</Text>
    </Pressable>
  );
};

export default Button;
