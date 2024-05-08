import TotalIcons from '../logo.svg';
import Vector from './Vector.png'
import {
  HEADER_SECTION,
  FIXED_DIV,
  MENU_NAV,
  IMG,
  A_DIV,
  PHONE_DIV,
} from './Header.styled.jsx';

export const Header = () => {
  return (
    <FIXED_DIV>
      <HEADER_SECTION>
        <IMG src={TotalIcons} alt="totalLogo" />
        <MENU_NAV>
          <A_DIV>
            <a href="/">Меню</a>
          </A_DIV>
          <A_DIV>
            <a href="/">Обо мне</a>
          </A_DIV>
          <A_DIV>
            <a href="/">Отзывы</a>
          </A_DIV>
          <A_DIV>
            <a href="/">Услуги</a>
          </A_DIV>
          <A_DIV>
            <a href="/">Информация</a>
            <img src={Vector} alt="Vector" width/>
          </A_DIV>
          <A_DIV>
            <a href="/">Статьи</a>
          </A_DIV>
        </MENU_NAV>
        <PHONE_DIV>
          <p>8(905) 495-95-28</p>
          <p>8(918) 042-76-87</p>
        </PHONE_DIV>
      </HEADER_SECTION>
    </FIXED_DIV>
  );
};
