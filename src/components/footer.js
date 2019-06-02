import React from 'react'
import styled from '@emotion/styled'
import { colors, fonts } from '../utils/styling'

const StyledFooter = styled('footer')({
    color: colors.light,
    fontSize: fonts.xs,
    padding: '10px 20px',
    textAlign: 'center',
});

const Footer = ({ children }) => (
    <StyledFooter>
        &copy; 2019 Chicago Free-Mo
    </StyledFooter>
  )
  
  export default Footer

