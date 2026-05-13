import * as React from 'react';
import { createRoot } from 'react-dom/client';

const ReactDOM = { createRoot };

window.React = React;
window.ReactDOM = ReactDOM;

export { React, ReactDOM };
