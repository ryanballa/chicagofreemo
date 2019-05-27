import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledSpan = styled('span')(props => ({
  '& a:link, & a:visited, & a:active': {
    color: (props.intention === 'inverse' ? '#0A7289': '#F9F9F9'),
    fontSize: (props.intention === 'inverse') && '12px',
    textDecoration: 'none',
  },
  background: (props.intention === 'inverse' ? '#F5F5F5' : '#2DD2F6'),
  border: (props.intention !== 'inverse') && '2px solid #0A7289',
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
