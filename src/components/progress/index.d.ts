/// <reference path="../common.d.ts" />

import { SFC, HTMLAttributes } from 'react';

declare module '@elastic/eui' {
  /**
   * @see './progress.js'
   */
  export type EuiProgressColor =
    | 'accent'
    | 'danger'
    | 'primary'
    | 'secondary'
    | 'subdued';

  export type EuiProgressSize = 'xs' | 's' | 'm' | 'l';

  export type EuiProgressPosition = 'fixed' | 'absolute' | 'static';

  export type EuiProgressProps = CommonProps &
    HTMLAttributes<HTMLProgressElement> & {
      size?: EuiProgressSize;
      color?: EuiProgressColor;
      position?: EuiProgressPosition;
      max?: number;
    };

  export const EuiProgress: SFC<EuiProgressProps>;
}
