import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Empty = styled(Link)`
    margin-bottom: 35px;
    display: block;
`;

export const Line = styled.div`
    background: #efefef;
    border-radius: 1000px;
    width: 100%;
    display: inline-block;
    vertical-align: middle;
`;

export const Title = styled(Line)`
    height: 16px;
    margin-bottom: 14px;
    width: 60%;
`;

export const Paragraph = styled(Line)`
    height: 15px;
    margin-bottom: 8px;
`;

export const Timeframe = styled(Line)`
    height: 13px;
    width: 75%;
`;

export const Skill = styled(Link)`
    background: #efefef;
    border-radius: 1000px;
    width: 73%;
    height: 16px;
    display: block;
    margin-bottom: 8px;

    :nth-child(even) {
        width: 27%;
    }

    :nth-child(5n) {
        width: 48%;
    }
`;

const Placeholder = ({ type }) => {
    switch (type) {
        case 'experience':
            return (
                <Empty to="/experience">
                    <Title />
                    <Paragraph />
                    <Paragraph
                        style={{
                            marginRight: '10px',
                            width: '40%'
                        }}
                    />
                    <Paragraph
                        style={{
                            width: '40%'
                        }}
                    />
                    <Timeframe />
                </Empty>
            );
        case 'education':
            return (
                <Empty to="/education">
                    <Title />
                    <Paragraph />
                    <Timeframe />
                </Empty>
            );
        case 'skills':
            return <Skill to="/skills" />;
    }
};

Placeholder.propTypes = {
    type: PropTypes.oneOf(['experience', 'education', 'skills']).isRequired
};

export default Placeholder;
