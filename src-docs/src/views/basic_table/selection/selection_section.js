import React from 'react';
import {
  EuiBasicTable,
  EuiCode
} from '../../../../../src/components';
import { GuideSectionTypes } from '../../../components';
import { renderToHtml } from '../../../services';

import { Table } from './selection';
const source = require('!!raw-loader!./selection');
const html = renderToHtml(Table);

export const section = {
  title: 'Selection',
  source: [
    {
      type: GuideSectionTypes.JS,
      code: source,
    }, {
      type: GuideSectionTypes.HTML,
      code: html,
    }
  ],
  text: (
    <p>
      The following example shows how to configure selection via the <EuiCode>selection</EuiCode>
      property.
    </p>
  ),
  components: { EuiBasicTable },
  demo: <Table/>,
};
