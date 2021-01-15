import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

//uso do keyoff do TS - vai ser usadao para pegar as chaves dos breakpoints dos defaultBreakpoints do styled-media-query,ex : 'huge', 'large', 'medium', ...

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const MediaMatchMofifier = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`display: block`}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`display: block`}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && MediaMatchMofifier.lessThan(lessThan)}
    ${!!greaterThan && MediaMatchMofifier.greaterThan(greaterThan)}
  `}
`
