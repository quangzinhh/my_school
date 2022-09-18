import styles from './Footer.module.css'
import { AiOutlineHome, AiFillPushpin, AiOutlineMail, AiFillPhone, AiFillFacebook} from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { ImNewspaper } from "react-icons/im";
import { FiMapPin } from "react-icons/fi";
import clsx from 'clsx';
 
function Footer () {
    return (
        <div> <footer>
        <div className={styles.container}>
            <div className={clsx(styles.noi_dung, styles.about)}>
                <h2>Lời khẳng định</h2>
                <p> Trên bước đường hội nhập và phát triển, trường THPT Nguyễn Hữu Cảnh luôn có những bước chuyển mình đầy hứa hẹn cho chất lượng giáo dục và đào tạo. Có thể khẳng định rằng: Trường THPT Nguyễn Hữu Cảnh mãi là ngôi trường tự hào với truyền thống “Rèn đức – Luyện tài”, là nơi phụ huynh có thể gửi gắm niềm tin cho tương lai con em mình, nơi chấp cánh cho những ước mơ bay cao, bay xa.</p>
            </div>
            <div className={clsx(styles.noi_dung, styles.links )}>
                <h2>Đường Dẫn</h2>
                <ul>
                    <li><AiOutlineHome className={styles.iconZ}/><a href="/">Trang Chủ</a></li>
                    <li><AiFillPushpin className={styles.iconZ}/><a href="/About">Về Chúng Tôi</a></li>
                    <li><GiClothes className={styles.iconZ}/><a href="/Uniform">Đồng Phục</a></li>
                    <li><ImNewspaper className={styles.iconZ}/><a href="/Blog">Tin tức</a></li>
                    <li><AiOutlineMail className={styles.iconZ}></AiOutlineMail><a href="/Contact">Liên hệ</a></li>
                </ul>
            </div>
            <div className={clsx(styles.noi_dung, styles.contact)}>
                <h2>Thông Tin Liên Hệ</h2>
                <ul className={styles.info}>
                    <li>
                    <FiMapPin className={styles.iconZ}/>
                        <span>Số 1B
                            , đường Nguyễn Hữu Cảnh<br />
                            Chợ Mới, An Giang, Việt Nam</span>
                    </li>
                    <li>
                        <p>
                            <AiFillPhone className={styles.iconZ}/><a href='https://www.facebook.com/'>0296 3611 406</a>
                            <br />
                            <AiFillFacebook className={styles.iconZ}/><a href="https://www.facebook.com/doantruongthptnguyenhuucanhag">Contact</a></p>
                    </li>
                    <li>
                        <p><AiOutlineMail className={styles.iconZ}/><a href='https://www.google.com/intl/vi/gmail/about/'>maithanhtungnhc@gmail.com</a></p>
                   </li>
                </ul>
            </div>
        </div>
    </footer>
    </div>
    );
}

export default Footer;