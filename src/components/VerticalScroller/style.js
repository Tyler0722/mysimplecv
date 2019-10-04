import styled from 'styled-components';

export const ScrollerWrapper = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
`;

export const Scroller = styled.div`
  overflow-y: scroll;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;

  ::-webkit-scrollbar {
    width: 14px;
    height: 14px;
  }

  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-track {
    background-clip: padding-box;
    border-width: 3px;
    border-style: solid;
    border-color: transparent;
    border-radius: 8px;
    background-color: #2c2c2d;
  }
  ::-webkit-scrollbar-track {
    border-width: initial;
    border-color: transparent;
    background-color: transparent;
  }
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;
