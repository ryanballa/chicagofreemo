import React from 'react'
import styled from '@emotion/styled'
import AnchorButton from '../components/anchorButton'
import { colors, fonts } from '../utils/styling'

const StyledSection = styled('section')({
    '& h1' : {
        color: colors.headerContent,
        fontSize: fonts.xl,
        fontFamily: 'LatoLight',
        fontWeight: 'lighter',
        margin: '60px 10px 30px 10px',
    },
    '& p': {
      fontSize: fonts.s,
      lineHeight: fonts.l,
      marginBottom: '60px',
    },
    color: '#4B4B4B',
    margin: '0 auto',
    maxWidth: '500px',
    textAlign: 'center',
    width: '50%',
})

const Block = ({ children }) => (
  <StyledSection>
    {children}
  </StyledSection>
)

export default Block


