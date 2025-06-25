import logo from '../../assets/0_logo.png'
import CartIcon from '../../utils/cartIcon'
import SearchIcon from '../../utils/searchIcon'
import UserIcon from '../../utils/userIcon'
import { DropDown } from '../HeaderDropDown'
import { Container, Li, Logo, Ul } from './styles.js'
export function Header() {
  return (
    <Container id="start">
      <Logo src={logo} />
      <Ul>
        <Li>Microsoft</Li>
        <Li>Teams</Li>
        <Li>Copilot</Li>
        <Li>Windows</Li>
        <Li>Xbox</Li>
        <Li>Suporte</Li>
      </Ul>

      <Ul>
        <Li>
          <DropDown />
        </Li>
      </Ul>

      <Ul>
        <Li>
          <SearchIcon />
        </Li>

        <Li>
          <CartIcon />
        </Li>

        <Li>
          <UserIcon />
        </Li>
      </Ul>
    </Container>
  )
}
