import TotalIcons from './icons.svg';
import { HEADER_SECTION, MENU_NAV, IMG,A_DIV,A ,PHONE_DIV} from './Header.styled.jsx';
export const Header = () => {
  return (
    <HEADER_SECTION>
      <IMG src={TotalIcons} alt="totalIcons"/>
      <MENU_NAV>
        <A_DIV>
          <A href="/">Меню</A>
        </A_DIV>
        <A_DIV>
          <A href="/">Обо мне</A>
        </A_DIV>
        <A_DIV>
          <A href="/">Отзывы</A>
        </A_DIV>
        <A_DIV>
          <A href="/">Услуги</A>
        </A_DIV>
        <A_DIV>
          <A href="/">Информация</A>
        </A_DIV>
        <A_DIV>
          <A href="/">Статьи</A>
        </A_DIV>
      </MENU_NAV>
      <PHONE_DIV>
        <p>8(905) 495-95-28</p>
        <p>8(918) 042-76-87</p>
      </PHONE_DIV>
    </HEADER_SECTION>
  );
};
