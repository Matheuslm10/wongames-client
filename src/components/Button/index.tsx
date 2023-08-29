import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  fullWidth?: boolean
  icon?: JSX.Element
  minimal?: boolean
  size?: 'small' | 'medium' | 'large'
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  icon,
  fullWidth = false,
  minimal = false,
  size = 'medium',
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
