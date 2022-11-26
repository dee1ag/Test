import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Checkmark = () => {
  return (
    <Svg width={14} height={10} viewBox="0 0 14 10" fill="none">
      <Path
        d="M1.667 5l4 4 6.666-8"
        stroke="#FBFAFC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Checkmark;
