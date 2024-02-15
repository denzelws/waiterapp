import logo from '../../assets/images/logo.svg'
import menu from '../../assets/images/menu.svg'

import * as S from './styles'

const Header = () => {
  return (
    <S.Wrapper>
      <S.Content>
      <S.Logo src={logo} alt="" />
      <S.Menu src={menu} alt="" />
      </S.Content>
    </S.Wrapper>
  )
}

export default Header
