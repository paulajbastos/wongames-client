import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode // pode ser so um icone por ex, nao precisa ter children
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button