import React from 'react'
import styled from '@emotion/styled'
import AnchorButton from '../components/anchorButton'

const StyledHR = styled('hr')({
    background: '#B1B1B1',
    height: '1px',
    margin: '30px auto',
    width: '50%',
})

const HR = ({ children }) => (
  <StyledHR />
)

export default HR


