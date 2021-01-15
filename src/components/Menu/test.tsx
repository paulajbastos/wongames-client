import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import 'jest-styled-components'

import Menu from '.'

describe('<Menu />', () => {
  it('should render a white label by default', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getByLabel, getByTest, ...
    // expect - assertion - comparação - análise (espero que renderize a Menu branca)

    renderWithTheme(<Menu />)
    expect(
      screen.getByLabelText(/open menu/i).parentElement
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/search/i).parentElement).toBeInTheDocument()

    expect(
      screen.getByLabelText(/open shopping cart/i).parentElement
    ).toBeInTheDocument()
  })
})
