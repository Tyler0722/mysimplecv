import React from 'react';
import styled from 'styled-components';

export const SVGWrapper = styled.div`
  display: inline-block;
  width: ${(props) => props.size / 10}rem;
  height: ${(props) => props.size / 10}rem;
  position: relative;
  color: inherit;
`;

export const SVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  fill: currentColor;
  width: 100%;
  height: 100%;
`;

export const Glyph = ({ glyph }) => {
  switch (glyph) {
    case 'download':
      return (
        <g>
          <path
            d="M16.049,31.137H4.001l20.08,19.971l20.08-19.971H32.113c0,0-4.292-17.735,16.064-29.849
c0,0-15.536-3.02-26.794,10.51C21.382,11.797,15.651,17.927,16.049,31.137z"
          />
          <path
            d="M24.081,52.519L1.577,30.137H15.03c-0.092-12.759,5.383-18.767,5.622-19.022
		C28.691,1.45,38.933,0,44.318,0c2.446,0,3.985,0.294,4.049,0.307l2.574,0.5l-2.253,1.341C31.371,12.453,32.394,26.663,32.94,30.137
		h13.645L24.081,52.519z M6.425,32.137l17.656,17.562l17.656-17.562H31.326l-0.185-0.765c-0.043-0.177-3.881-17.082,14.041-29.358
		c-4.784-0.15-15.02,0.795-23.031,10.423c-0.091,0.1-5.481,6.089-5.103,18.67l0.03,1.03H6.425z"
          />
        </g>
      );
  }
};

const viewBoxes = {
  download: '0 0 52.519 52.519'
};

const Icon = (props) => {
  const { size = 16, onClick, glyph } = props;

  return (
    <SVGWrapper size={size} className="icon" onClick={onClick}>
      <SVG viewBox={viewBoxes[glyph]}>
        <Glyph glyph={glyph} />
      </SVG>
    </SVGWrapper>
  );
};

export default Icon;
