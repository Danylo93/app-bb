import React, {forwardRef} from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TooltipProps, Tooltip, Icon} from 'react-native-elements';

import {useTheme} from 'styled-components';
import {Container, Text} from './styles';

interface ToolTipProps {
  size?: number;
  color?: string;
  icon: string;
  text: string;
  marginTop?: number;
  width?: number;
  height?: number;
}

const ToolTip = forwardRef<TooltipProps, ToolTipProps>(
  ({color, size, icon, text, marginTop = 0, width = 150, height = 40}, ref) => {
    const theme = useTheme();

    const containerColor = color || theme.mvnoTheme.principal.primaria;
    const iconSize = size ? size / 2 : 12;
    return (
      <Container marginTop={marginTop}>
        <Tooltip
          ref={ref}
          popover={<Text>{text}</Text>}
          backgroundColor={containerColor}
          {...{width, height}}
          withOverlay={false}>
          <Icon
            name={icon}
            type="material-community"
            reverse
            color={containerColor}
            size={iconSize}
          />
        </Tooltip>
      </Container>
    );
  },
);
export default ToolTip;
