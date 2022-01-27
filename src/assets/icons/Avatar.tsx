import * as React from 'react';
import Svg, {Circle, ClipPath, Defs, G, Path} from 'react-native-svg';

interface AvatarProps {
  width: number;
  height: number;
}

function Avatar({width, height}: AvatarProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 30">
      <Defs>
        <ClipPath id="a">
          <Circle
            data-name="Elipse 34"
            cx={15}
            cy={15}
            r={15}
            transform="translate(356 45)"
            fill="#22a7f0"
          />
        </ClipPath>
      </Defs>
      <Circle data-name="Elipse 33" cx={15} cy={15} r={15} fill="#fff" />
      <G
        data-name="Grupo de m\xE1scara 1"
        transform="translate(-356 -45)"
        opacity={0.4}
        clipPath="url(#a)">
        <Path
          data-name="Uni\xE3o 188"
          d="M0 23.039a11.372 11.372 0 1111.372 11.422A11.4 11.4 0 010 23.039zM6.369 5.021a5 5 0 115 5.021 5.012 5.012 0 01-5-5.021z"
          transform="translate(359.429 50.514)"
          fill="#6d7882"
        />
      </G>
    </Svg>
  );
}

export default Avatar;
