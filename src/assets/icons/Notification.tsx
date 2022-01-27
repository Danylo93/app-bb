import * as React from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';

interface NotificationProps {
  width: number;
  height: number;
  color: string;
}

function Notification({width, color, height}: NotificationProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 61 61">
      <G transform="translate(-328 -744)">
        <Path
          data-name="Ret\xE2ngulo 4945"
          transform="translate(328 744)"
          fill="none"
          d="M0 0H61V61H0z"
        />
        <Path
          data-name="Uni\xE3o 220"
          d="M763.7 591.15h4.888a2.444 2.444 0 01-4.888 0zm11-1.21h-19.558v-2.421h2.444v-8.474a8.556 8.556 0 0117.112 0v8.474h2.444v2.421zm-2.444-2.421v-8.474a6.112 6.112 0 00-12.223 0v8.474z"
          transform="translate(-791.091 612.045) translate(383.948 -419.616)"
          fill={color}
        />
        <G
          data-name="Elipse 20"
          transform="translate(-791.091 612.045) translate(1151.091 150.955)"
          fill="#d42a2a"
          stroke="#fff"
          strokeWidth={1.8}>
          <Circle cx={5} cy={5} r={5} stroke="none" />
          <Circle cx={5} cy={5} r={4.1} fill="none" />
        </G>
      </G>
    </Svg>
  );
}

export default Notification;
