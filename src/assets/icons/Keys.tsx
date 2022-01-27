import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface KeysProps {
  width: number;
  height: number;
  color: string;
}

function Keys({width, color, height}: KeysProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 61 61">
      <G transform="translate(-328 -743)">
        <Path
          data-name="Ret\xE2ngulo 4945"
          transform="translate(328 743)"
          fill="none"
          d="M0 0H61V61H0z"
        />
        <Path
          data-name="Subtra\xE7\xE3o 10"
          d="M10.239 20.81V19.4h-3.12v-8.838l1.27-.584a4.279 4.279 0 001.78-1.51 3.921 3.921 0 00.664-2.181A4.225 4.225 0 006.5 2.19a4.225 4.225 0 00-4.333 4.1A4.112 4.112 0 004.661 10l1.294.576V20.81h4.283M6.5 3.631a2.658 2.658 0 11-2.65 2.658A2.656 2.656 0 016.5 3.631M12.405 23H3.789V12.007A6.3 6.3 0 010 6.289 6.4 6.4 0 016.5 0 6.4 6.4 0 0113 6.289a6.121 6.121 0 01-1.033 3.4 6.45 6.45 0 01-2.681 2.28v5.241h3.12zM6.5 5.822a.468.468 0 10.483.467.476.476 0 00-.483-.467z"
          transform="translate(352 762)"
          fill={color}
        />
      </G>
    </Svg>
  );
}

export default Keys;
