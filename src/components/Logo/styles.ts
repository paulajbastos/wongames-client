import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;

    svg {
      height: 100%;
    }
  `,

  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
    width:5.8rem;
    height: 4.5rem

    svg {
      height: 4.5rem;
      points-event: none
    }

    .text {
      display: none
    }
  `}
  `
}

// !!*se* tiver size && *chama* o size
export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color = 'white', size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
