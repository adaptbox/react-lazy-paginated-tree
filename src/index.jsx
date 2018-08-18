// @flow

import React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import ReactLazyPaginatedTree from './components/Tree';
import theme from './themes/default';
import nodes from './data/sample';

const elem = document.getElementById('app');
if (elem) {
  render(<ReactLazyPaginatedTree nodes={nodes} theme={theme} />, elem);
}

export default ReactLazyPaginatedTree;
