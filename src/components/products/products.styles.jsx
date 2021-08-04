import styled from 'styled-components';

export const Window = styled.div`
    width: 1110px;
    height: 946px;
    background: ${props => props.theme.color.blueWhite};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 32px;
`;