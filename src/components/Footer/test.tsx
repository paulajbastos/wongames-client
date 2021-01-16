import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('it should render4 columns topics', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getByLabel, getByTest, ...

    const { container } = renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
