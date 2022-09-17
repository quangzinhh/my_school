import AwesomeSlider from 'react-awesome-slider';
import styles from './Home.module.css'
import clsx from 'clsx'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (

    
    <div> 
    <div>
      <div className={styles.slider}>
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={2000}
            className = {styles.slide}
          >
              <div className={styles.img_slider}> <img src={require("../img/anh_thayco.jpg")} /> </div>
              <div className={styles.img_slider}> <img src={require("../img/tiepsucmuathi.jpg")} /> </div>
              <div className={styles.img_slider}> <img src={require("../img/hoaphuongdo.jpg")} /> </div>
        </AutoplaySlider>
      </div>
      <div className={styles.content}>
        <div className={styles.about}>
            <div className={styles.nameband}>
                THPT NGUYỄN HỮU CẢNH
            </div>
            <div className={styles.slogan}>
                Huyện Chợ Mới, tỉnh An Giang
            </div>
            <div className={styles.intro}>
                <p>
                Trải qua chặng đường 26 năm từ lúc trường được vinh dự mang tên vị khai quốc công thần Nguyễn Hữu Cảnh, trường ngày càng được khẳng định là cơ sở giáo dục có chất lượng hàng đầu trong huyện nhà với đội ngũ giáo viên được đào tạo đúng chuẩn, có kinh nghiệm và tâm huyết với nghề. Đặc biệt, THPT Nguyễn Hữu Cảnh là ngôi trường đào tạo nhiều thế hệ học sinh ưu tú và đang gặt nhiều thành công vượt bậc trong tất cả các lĩnh vực trong xã hội.
                </p>
            </div>
            </div>
        </div>
        
        <div className={styles.about12c2}>
            <hr className={styles.top_hr_line}></hr>
            <div className={styles.video_12c2}>
            <div className={styles.about_video}>
            <h2>TẬP THỂ 12C2</h2>
            <p>Tập thể 12C2 là một tập thể đoàn 
            kết và vững mạnh của trường THPT Nguyễn Hữu Cảnh. Trong suốt 3 năm gắn
            bó, các thành viên luôn giúp đỡ nhau trong học tập, cùng nhau đi lên. 
            Những ngày đi học trễ, những giờ chơi vui vẻ, những tháng ngày ôn thi cùng nhau,...
            và rất nhiều kỷ niệm khác nữa chắc chắn sẽ không thể nào quên trong ký ức của những 
            con người 12c2 năm ấy.
            Bên đây là thước phim những kỷ niệm đẹp của lớp được ghi lại.</p>
            </div> 
            <div className={styles.linkvideo}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PU6St02e1VE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            
            </div>
            <hr className={styles.bottom_hr_line}></hr>
        </div>
        
        
        
    </div>
    <div className={styles.news_title}>TIN HỌC VỤ</div>
    <div className={styles.news_content}>
      <div className={clsx(styles.activity, styles.bg)}>
            <div className={clsx(styles.ac_line1,  styles.row, styles.color_text)}>
                <div className={styles.coverItem}>
                    <div className={clsx(styles.act1, styles.col, styles.three_column, styles.act)}>
                        <div className={clsx(styles.cover_act, styles.box_shadow)}>
                            <div className={styles.img_act}>
                            </div>
                            <div className={clsx(styles.content_act, styles.color_text)}>
                                Trường THPT Nguyễn Hữu Cảnh triển khai chiến dịch hoa phượng đỏ
                                <div className={clsx(styles.color_text, styles.time_act)}>
                                01/01/2021
                            </div>
                            <div className={styles.act_description}>Thực hiện chỉ đạo của Trung ương Đoàn, ngày 21/8/2022, Đoàn trường THPT Nguyễn Hữu Cảnh đã ra quân thực hiện....</div>
                            <Button variant="primary" className={styles.read_more}>ĐỌC THÊM</Button>{' '}
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                
                <div className={styles.coverItem}>
                    <div className={clsx(styles.act2, styles.col, styles.three_column, styles.act)}>
                        <div className={clsx(styles.cover_act, styles.box_shadow)}>
                            <div className={styles.img_act}>
                            </div>
                            <div className={clsx(styles.content_act, styles.color_text)}>
                            Lễ khai giảng của thầy và trò trường THPT Nguyễn Hữu Cảnh
                                <div className={clsx(styles.color_text, styles.time_act)}>
                                05/09/2022
                            </div>
                            <div className={styles.act_description}>Trong buổi Lễ khai giảng, nhà trường đã vinh danh và khen thưởng các tập thể, cá nhân đạt thành tích xuất sắc trong năm học 2021- 2022. Bên cạnh đó....</div>
                            <Button variant="primary" className={styles.read_more}>ĐỌC THÊM</Button>{' '}
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.coverItem}>
                    <div className={clsx(styles.act3, styles.col, styles.three_column, styles.act)}>
                        <div className={clsx(styles.cover_act, styles.box_shadow)}>
                            <div className={styles.img_act}>
                            </div>
                            <div className={clsx(styles.content_act, styles.color_text)}>
                            Tiếp sức mùa thi hỗ trợ kỳ thi THPT Quốc gia 2022
                                <div className={clsx(styles.color_text, styles.time_act)}>
                                08/07/2022
                            </div>
                            <div className={styles.act_description}>Nhằm mục tiêu hỗ trợ hết mình cho các sĩ tử 2k4, đội thanh niên tình nguyện trường THPT Nguyễn Hữu Cảnh đã cố gắng hết sức hỗ trợ các bạn trong ....</div>
                            <Button variant="primary" className={styles.read_more}>ĐỌC THÊM</Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className={clsx(styles.activity, styles.bg)}>
            <div className={clsx(styles.ac_line2,  styles.row, styles.color_text)}>
                <div className={styles.coverItem}>
                    <div className={clsx(styles.act4, styles.col, styles.three_column, styles.act)}>
                        <div className={clsx(styles.cover_act, styles.box_shadow)}>
                            <div className={styles.img_act}>
                            </div>
                            <div className={clsx(styles.content_act, styles.color_text)}>
                            Đạt giải cao trong hội thi tuyên truyền giới thiệu sách
                                <div className={clsx(styles.color_text, styles.time_act)}>
                                02/08/2022
                            </div>
                            <div className={styles.act_description}>Hội thi do Trung tâm Văn hoá và Thể thao huyện Chợ Mới tổ chức nhằm tuyên truyền về truyền thống lịch sử, văn hóa, vẻ đẹp thiên nhiên của đất nước, con người....</div>
                            <Button variant="primary" className={styles.read_more}>ĐỌC THÊM</Button>{' '}
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.coverItem}>
                    <div className={clsx(styles.act5, styles.col, styles.three_column, styles.act)}>
                        <div className={clsx(styles.cover_act, styles.box_shadow)}>
                            <div className={styles.img_act}>
                            </div>
                            <div className={clsx(styles.content_act, styles.color_text)}>
                            Tuyên truyền phòng chống tội phạm, phòng chống ma tuý, an toàn giao thông
                                <div className={clsx(styles.color_text, styles.time_act)}>
                                04/08/2022
                            </div>
                            <div className={styles.act_description}>Buổi tuyên truyền do Đội XDPT bảo vệ ANTQ Công an huyện Chợ Mới phối hợp với Công an Thị trấn Chợ Mới và trường THPT Nguyễn Hữu Cảnh....</div>
                            <Button variant="primary" className={styles.read_more}>ĐỌC THÊM</Button>{' '}
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.coverItem}>

                    <div className={clsx(styles.act6, styles.col, styles.three_column, styles.act)}>
                        <div className={clsx(styles.cover_act, styles.box_shadow)}>
                            <div className={styles.img_act}>
                            </div>
                            <div className={clsx(styles.content_act, styles.color_text)}>
                            Hoạt động Du khảo về nguồn dành cho học sinh
                                <div className={clsx(styles.color_text, styles.time_act)}>
                                01/08/2022
                            </div>
                            <div className={styles.act_description}>Hoạt động du khảo về nguồn là một trong những nội dung ngoại khóa để giáo dục kỹ năng sống cho học sinh. Hàng năm, Đoàn trường....</div>
                            <Button variant="primary" className={styles.read_more}>ĐỌC THÊM</Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    </div>
    
    </div>
    
  );
}
export default Home;
