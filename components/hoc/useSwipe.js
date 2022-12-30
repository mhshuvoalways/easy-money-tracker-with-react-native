import { useState } from 'react';
import { PanResponder, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const SWIPE_THRESHOLD = windowWidth / 2;

const useSwipe = () => {
  const [dx, setDx] = useState();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, _gestureState) => {
      console.log(evt);
    },
    onPanResponderRelease: (_evt, gestureState) => {
      const { dx } = gestureState;
      setDx(dx);
    },
  });

  return { panResponder, dx, SWIPE_THRESHOLD };
};

export default useSwipe;
