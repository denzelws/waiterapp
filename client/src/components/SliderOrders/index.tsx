import OrderBox from "../OrderBox"
import Slider from "../Slider"
import { ordersData } from '../SectionOrders/mock'

import {ArrowBackIos as ArrowLeft} from '@styled-icons/material-outlined/ArrowBackIos'
import {ArrowForwardIos as ArrowRight} from '@styled-icons/material-outlined/ArrowForwardIos'

import * as S from './styles'

const SliderOrders = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />
  }

  const colors = ['#FFD954', '#FF5454', '#9FFF54']

  return (
    <S.Wrapper>
    <Slider settings={settings}>
      {ordersData.map((order, index) => (
        <S.Slide key={index}>
        <OrderBox {...order} color={colors[index % colors.length]}/>
        </S.Slide>
      ))}
    </Slider>
    </S.Wrapper>
  )
}

export default SliderOrders
