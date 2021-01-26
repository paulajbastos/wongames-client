import * as S from './styles'

import SliderSLick, { Settings } from 'react-slick'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SliderSLick {...settings}>{children}</SliderSLick>
  </S.Wrapper>
)

export default Slider
