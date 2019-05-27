import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import ModularScale from 'modular-scale'
import AnchorButton from '../components/anchorButton'
import { breakPoints, colors, fonts } from '../utils/styling'

const ms = ModularScale({
    ratio: ModularScale.ratios.majorThird,
    base: '1em'
  })

const StyledSection = styled('section')({
    '& .colorFill': {
        background: 'rgba(0, 0, 0, 0.4)',
        height: '100%',
        maxHeight: '600px',
        position: 'absolute',
        width: '100%',
        zIndex: 2,
    },
    '& figure': {
        height: '100%',
        margin: 0,
        maxHeight: '600px',
        overflow: 'hidden',
        position: 'absolute',
        width: '100%',
        zIndex: 1,
    },
    '& img': {
        height: 'auto',
        width: '100%',
        [breakPoints.phone]: {
            height: '100%',
            width: 'auto',
        }
    },
    '& .content': {
        '& h1': {
            color: colors.headerWhite,
            fontSize: fonts.xll,
            fontWeight: 'normal',
            marginBottom: '10px',
            [breakPoints.phone]: {
                fontSize: fonts.xl,
            }
        },
        '& h2': {
            color: colors.headerWhite,
            fontSize: fonts.m,
            fontWeight: 'normal',
            margin: '0 0 10px 0',
            [breakPoints.phone]: {
                fontSize: fonts.s,
                padding: '0 10%',
            }
        },
        padding: '15% 0',
        position: 'relative',
        zIndex: 3,
    },
    position: 'relative',
    textAlign: 'center',
})

const HeroBanner = ({ actionLocation, actionTitle, title, subtitle, image }) => (
  <StyledSection>
      <figure>
        <div className="colorFill" />
        <img src={image} alt="" />
      </figure>
      <div className="content">
        <hgroup>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </hgroup>
        {actionLocation && <AnchorButton location={actionLocation} title={actionTitle} />}
      </div>
      
  </StyledSection>
)

export default HeroBanner
