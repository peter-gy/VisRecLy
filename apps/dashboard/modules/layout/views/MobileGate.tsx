import { ReactNode } from 'react';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type MobileGateProps = {
  minWidth?: number;
  minHeight?: number;
  standardChild: ReactNode;
  mobileChild: ReactNode;
};

function MobileGate({
  minWidth,
  minHeight,
  standardChild,
  mobileChild,
}: MobileGateProps) {
  const theme = useTheme();
  const { lg } = theme.breakpoints.values;
  const _minWidth = minWidth ?? lg;
  const widthMatch = useMediaQuery(`(min-width: ${_minWidth}px)`);

  const _minHeight = minHeight ?? lg / 1.5;
  const heightMatch = useMediaQuery(`(min-height: ${_minHeight}px)`);
  return <>{widthMatch && heightMatch ? standardChild : mobileChild}</>;
}

export default MobileGate;
