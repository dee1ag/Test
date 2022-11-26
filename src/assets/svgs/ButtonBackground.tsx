import * as React from 'react';
import Svg, {G, Rect, Defs, LinearGradient, Stop} from 'react-native-svg';

const ButtonBackground = () => {
  return (
    <Svg width={82} height={45} viewBox="0 0 82 45" fill="none">
      <G filter="url(#filter0_dd_1_8)">
        <Rect
          x={10}
          y={10}
          width={62}
          height={25}
          rx={12.5}
          fill="url(#paint0_linear_1_8)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1_8"
          x1={10}
          y1={35}
          x2={24.8108}
          y2={-7.2413}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FF6E6D" />
          <Stop offset={0.0539493} stopColor="#FF3183" />
          <Stop offset={0.874705} stopColor="#8559F3" />
          <Stop offset={0.938372} stopColor="#657BEA" />
          <Stop offset={1} stopColor="#34B0DC" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default ButtonBackground;
