import Container from "../Container/Container";
import style from './Footer.module.css';
import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as TGIcon } from '../../img/tg.svg';
import { ReactComponent as PIIcon } from '../../img/pinterest.svg';
import { ReactComponent as STIcon } from '../../img/stumbleupon.svg';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.wrapper}>

          <div className={style.contacts}>
            <p>Design:
              <a href="https://t.me/Mrshmallowww"
                target="_blank"
                rel="noreferrer"> Anastasia Ilina</a></p>
            <p>Сoder:
              <a href="https://t.me/quper24"
                target="_blank"
                rel="noreferrer"> DG</a></p>
            <p>© HBCard, 2022</p>
          </div>


          <ul className={style.social}>
            <li className={style.item}>
              <a href="https://vk.com/methed" className={style.link}>
                <VKIcon />
              </a>
            </li>
            <li className={style.item}><a href="https://t.me/methed_chat_frontend" className={style.link}>
              <TGIcon />
            </a>
            </li>
            <li className={style.item}><a href="https://pinterest.com" className={style.link}>
              <PIIcon />
            </a>
            </li>
            <li className={style.item}><a href="https://stumbleupon.com" className={style.link}>
              <STIcon />
            </a>
            </li>

          </ul>

        </div>
      </Container>
    </footer>
  )
};

export default Footer;
