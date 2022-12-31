import { useState, useRef } from 'react';
import { PanResponder, Dimensions, Animated } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const SWIPE_THRESHOLD = windowWidth / 2;

const useSwipe = () => {
  const [dx, setDx] = useState();

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),

      onPanResponderRelease: (_evt, gestureState) => {
        const { dx } = gestureState;
        setDx(dx);
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  return { panResponder, pan, dx, SWIPE_THRESHOLD };
};

export default useSwipe;
