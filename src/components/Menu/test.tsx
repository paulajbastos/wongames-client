import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import 'jest-styled-components'

import Menu from '.'

describe('<Menu />', () => {
  it('should render a white label by default', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getByLabel, getByTest, ...
    // expect - assertion - comparação - análise (espero que renderize a Menu branca)

    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('should render Open and Close Menu', () => {
    renderWithTheme(<Menu />)

    // selecionar o nosso menuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // Verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
})
