import React from 'react'
import ModularScale from 'modular-scale'


const ms = ModularScale({
    ratio: ModularScale.ratios.majorThird,
    base: '1em'
})

export const breakPoints = {
    phone: '@media (max-width: 420px)',
    tablet: '@media (max-width: 720px)',
    computer: '@media (max-width: 900px)',
}

export const colors = {
    headerWhite: '#F9F9F9',
    headerContent: '#0A424E',
}

export const fonts = {
    xll: `${ms(4)}rem`,
    xl: `${ms(3)}rem`,
    l: `${ms(2)}rem`,
    m: `${ms(1)}rem`,
    s: `${ms(0)}rem`,
    xs: `${ms(-1)}rem`,
}
