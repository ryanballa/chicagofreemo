import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import AnchorButton from '../components/anchorButton'
import Logo from '../components/logo'
import { colors } from '../utils/styling'

const StyledHeader = styled('header')({
  '& h1': {
    '& a': {
      boxShadow: 'none',
    },
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
    '&.active': {
      color: colors.active,
      textDecoration: 'underline',
    },
    '&:hover': {
      textDecoration: 'underline',
    },
    boxShadow: 'none',
    color: '#575964',
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
  padding: '20px',
  width: '100%',
  zIndex: 5,
});

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1>
      <Link to="/">
        <Logo />
      </Link>
    </h1>
    <nav>
      <ol>
        <li><Link to="learn" activeClassName="active">Learn</Link></li>
        <li><Link to="blog" activeClassName="active">Blog</Link></li>
        <li><Link to="plan" activeClassName="active">Plan</Link></li>
        <li><AnchorButton location="contact" intention="inverse" title="Join Us" /></li>
      </ol>
    </nav>
  </StyledHeader>
)

export default Header
