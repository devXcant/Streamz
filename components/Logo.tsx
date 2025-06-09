import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Polygon, Rect } from 'react-native-svg';

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
}

const Logo = ({ width = 48, height = 40, color = "#dc2626" }: LogoProps) => {
  return (
    <View style={{ width, height }}>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 48 40"
        fill="none"
      >
        {/* Main film reel circle */}
        <Circle
          cx="24"
          cy="20"
          r="18"
          fill={color}
          stroke="#ffffff"
          strokeWidth="2"
        />

        {/* Inner circle */}
        <Circle
          cx="24"
          cy="20"
          r="12"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
        />

        {/* Film holes */}
        <Circle cx="24" cy="8" r="2" fill="#ffffff" />
        <Circle cx="24" cy="32" r="2" fill="#ffffff" />
        <Circle cx="12" cy="20" r="2" fill="#ffffff" />
        <Circle cx="36" cy="20" r="2" fill="#ffffff" />

        {/* Play button in center */}
        <Polygon
          points="20,16 20,24 28,20"
          fill="#ffffff"
        />

        {/* Film strip accent */}
        <Rect
          x="2"
          y="18"
          width="44"
          height="4"
          fill={color}
          opacity="0.8"
        />
        <Rect x="4" y="19" width="2" height="2" fill="#ffffff" />
        <Rect x="8" y="19" width="2" height="2" fill="#ffffff" />
        <Rect x="12" y="19" width="2" height="2" fill="#ffffff" />
        <Rect x="34" y="19" width="2" height="2" fill="#ffffff" />
        <Rect x="38" y="19" width="2" height="2" fill="#ffffff" />
        <Rect x="42" y="19" width="2" height="2" fill="#ffffff" />
      </Svg>
    </View>
  );
};

export default Logo;
