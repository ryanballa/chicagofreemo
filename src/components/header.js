import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import AnchorButton from '../components/anchorButton'

const StyledHeader = styled('header')({
  '& h1': {
    color: '#F9F9F9',
    fontSize: '20px',
    margin: 0,
  },
  '& li': {
    display: 'inline',
    margin: '0 30px 0 0',
    listStyle: 'none',
    padding: 0,
  },
  '& li > a': {
    '&:hover': {
      textDecoration: 'underline',
    },
    color: '#F9F9F9',
    fontSize: '14px',
    textDecoration: 'none',
  },
  '& ol': {
    margin: 0,
    padding: 0,
  },
  alignItems: 'center',
  display: 'flex',
  left: 0,
  justifyContent: 'space-between',
  padding: '10px',
  position: 'absolute',
  top: '20px',
  width: '100%',
  zIndex: 5,
});

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1>Chicago Free-Mo</h1>
    <nav>
      <ol>
        <li><Link to="blog">Blog</Link></li>
        <li><Link to="plan">Plan</Link></li>
        <li><AnchorButton intention="inverse" title="Join Us" /></li>
      </ol>
    </nav>
  </StyledHeader>
)

export default Header
