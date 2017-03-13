import React from 'react';

const DOWN = (
  <svg width="12px" height="9px" viewBox="174 217 12 9" version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(174.000000, 217.500000)">
      <polygon fill="" points="10.6 0.6 6 5.2 1.4 0.6 0 2 6 8 12 2"></polygon>
    </g>
  </svg>
);

const INFO = (
  <svg width="20px" height="20px" viewBox="86 296 20 20" version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(86.000000, 296.000000)">
      <path d="M9,15 L11,15 L11,9 L9,9 L9,15 L9,15 Z M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z M9,7 L11,7 L11,5 L9,5 L9,7 L9,7 Z" fill=""></path>
    </g>
  </svg>
);

const CLOSE = (
  <svg width="14px" height="14px" viewBox="299 89 14 14" version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(299.000000, 89.000000)">
      <polygon id="Shape" fill="" points="14 1.4 12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4 12.6 14 14 12.6 8.4 7"></polygon>
    </g>
  </svg>
);

export default {
  down: DOWN,
  info: INFO,
  close: CLOSE
};
