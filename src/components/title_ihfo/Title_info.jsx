import {
  TITLE_SECTION,
  HERO_DIV,
  LEFT_HERO_DIV,
  LINK_LIST_UL,
  VK_A,
  WATS_A,
  SMS_A,
  CENTER_HERO_DIV,
  RIGHT_HERO_DIV,
  BTN_TOP,
  ICON_TELEGRAM_SPAN,
  EMAIL_A,
  SKYPE_A,
} from './Title_info.styled';
import iconVk from './img/iconVk.png';
import iconEmeil from './img/iconEmail.png';
import iconWatsApp from './img/iconWatsApp.png';
import iconSms from './img/iconSms.png';
import iconSkype from './img/iconSkype.png';
import iconTelegram from './img/iconTelegram.svg';

export const TitleInfo = () => {
  return (
    <TITLE_SECTION>
      <HERO_DIV>
        <LEFT_HERO_DIV>
          <h3>
            Сделайте шаг <br /> к лучшей жизни <br /> вместе со мной
          </h3>
          <p>
            Здесь Вы найдете инструменты и советы, которые помогут Вам раскрыть
            свой потенциал, преодолеть трудности и создать более счастливую
            жизнь. Давайте <span>вместе</span> исследовать мир психологии и{' '}
            <span>делать шаги</span> к лучшей версии себя!
          </p>

          <LINK_LIST_UL>
            <li>
              <VK_A href="/">
                <img src={iconVk} alt="iconVk" />
              </VK_A>
            </li>
            <li>
              <WATS_A href="/">
                <img src={iconWatsApp} alt="watsApp" />
              </WATS_A>
            </li>
            <li>
              <SMS_A href="/">
                <img src={iconSms} alt="iconSms" />
              </SMS_A>
            </li>
          </LINK_LIST_UL>
        </LEFT_HERO_DIV>
        <CENTER_HERO_DIV>
          <button>
            Записаться на <br /> консультацию
          </button>
        </CENTER_HERO_DIV>
        <RIGHT_HERO_DIV>
          <BTN_TOP>
            <ICON_TELEGRAM_SPAN>
              <img src={iconTelegram} alt="iconTelegram" />
            </ICON_TELEGRAM_SPAN>
            Предлагаю обсудить терапию в мессенджере
          </BTN_TOP>
          <p>
            Привет! Меня зовут Яна Кравченко. Рада видеть на своем сайте! Я
            практикующий психолог. Работаю в интегративном подходе с
            гуманистическим уклоном. У меня вы можете получить как единоразовую
            консультацию по интересующей вас проблеме, так и
            <span> пройти курс</span> длительной психотерапии
          </p>
          <ul>
            <li>
              <EMAIL_A href="/">
                <img src={iconEmeil} alt="iconEmeil" />
              </EMAIL_A>
            </li>
            <li>
              <SKYPE_A href="/">
                <img src={iconSkype} alt="iconSkype" />
              </SKYPE_A>
            </li>
          </ul>
        </RIGHT_HERO_DIV>
      </HERO_DIV>
    </TITLE_SECTION>
  );
};
