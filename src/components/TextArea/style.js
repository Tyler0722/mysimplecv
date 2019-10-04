import styled from 'styled-components';

import { Input } from 'src/components/TextField/style';

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledTextArea = styled(Input).attrs({
    as: 'textarea'
})`
  resize: none;
`;
