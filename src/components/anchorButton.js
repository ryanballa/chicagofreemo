import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledSpan = styled('span')(props => ({
  '& a:link, & a:visited, & a:active': {
    boxShadow: 'none',
    color: (props.intention === 'inverse' ? '#FFFFFF': '#F9F9F9'),
    fontSize: (props.intention === 'inverse') && '12px',
    textDecoration: 'none',
  },
  background: (props.intention === 'inverse' ? '#647C4C' : '#849E6B'),
  border: (props.intention !== 'inverse') && '2px solid #647C4C',
  boxSizing: 'borderBox',
  borderRadius: '4px',
  display: 'inline-block',
  padding: (props.intention === 'inverse'? '5px 15px' : '10px'),
  textShadow: (props.intention !== 'inverse') && '0px 1px 1px rgba(0, 0, 0, 0.4)', 
}));

const AnchorButton = ({ intention, location, size, title }) => (
  <StyledSpan intention={intention} size={size}>
    <Link to={location}>{title}</Link>
  </StyledSpan>
)

export default AnchorButton
