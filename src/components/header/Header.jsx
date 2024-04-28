import TotalIcons from './icons.svg';
import { HEADER_SECTION, MENU_DIV } from './Header.styled.jsx';
export const Header = () => {
  return (
    <>
      <HEADER_SECTION>
        <img src={TotalIcons} alt="totalIcons" width={'60px'}/>
        <MENU_DIV>
          <div>
            <a href="/">Меню</a>
          </div>
          <div>
            <a href="/">Обо мне</a>
          </div>
          <div>
            <a href="/">Отзывы</a>
          </div>
          <div>
            <a href="/">Услуги</a>
          </div>
          <div>
            <a href="/">Информация</a>
          </div>
          <div>
            <a href="/">Статьи</a>
          </div>
        </MENU_DIV>
        <div>
          <p>8(905) 495-95-28</p>
          <p>8(918) 042-76-87</p>
        </div>
      </HEADER_SECTION>
    </>
  );
};
