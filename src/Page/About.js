import styles from './About.module.css'
import clsx from 'clsx'
function About() {
    return (
      <>
        <main>
          <div className={styles.header}>LỊCH SỬ HÌNH THÀNH TRƯỜNG</div>
          <div className={styles.history_school}>
              <div className={styles.page}>
                <div className={styles.timeline}>
                  <div className={styles.timeline__group}>
                    <span className={clsx(styles.timeline__year, styles.time)} aria-hidden="true">2000</span>
                    <div className={styles.timeline__cards}>
                      <div className={clsx(styles.timeline__card, styles.card)}>
                        <header className={(styles.card__header)}>
                          <time className={styles.time} datetime="2008-12-28">
                            <span className={styles.time__day}>28</span>
                            <span className={styles.time__month}>Dec</span>
                          </time>
                        </header>
                        <div className={styles.card__content}>
                          <p>
                            Chủ tịch UBND tỉnh An Giang ký Quyết định số 
                            2612/QĐ-UB-TC về việc đổi tên Trường phổ thông trung học 
                            thành Trường trung học phổ thông, trong đó trường 
                            Trung học Nguyễn Hữu Cảnh được đổi tên thành trường 
                            Trung học phổ thông Nguyễn Hữu Cảnh.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.timeline__group}>
                    <span className={clsx(styles.timeline__year, styles.time)} aria-hidden="true">2004</span>
                    <div className={styles.timeline__cards}>
                      <div className={clsx(styles.timeline__card, styles.card)}>
                        <header className={(styles.card__header)}>
                          <time className={styles.time} datetime="2004-07-13">
                            <span className={styles.time__day}>13</span>
                            <span className={styles.time__month}>Jul</span>
                          </time>
                        </header>
                        <div className={styles.card__content}>
                          <p>Theo Quyết định số 720/QĐ.UB.TC của UBND huyện Chợ Mới ký ngày 13/07/2004 về việc thành lập trường THCS Thị Trấn Chợ Mới. 
                            Do đó, trường THPT Nguyễn Hữu Cảnh chỉ còn cấp THPT, 
                            tọa lạc tại số 01, đường Lê Lợi, thị trấn Chợ Mới, 
                            huyện Chợ Mới, tỉnh An Giang
                            (trong thời gian này cả hai trường có chung cơ sở).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.timeline__group}>
                    <span className={clsx(styles.timeline__year, styles.time)} aria-hidden="true">2006</span>
                    <div className={styles.timeline__cards}>
                      <div className={clsx(styles.timeline__card, styles.card)}>
                        <header className={(styles.card__header)}>
                          <time className={styles.time} datetime="2006-08-18">
                            <span className={styles.time__day}>08</span>
                            <span className={styles.time__month}>Aug</span>
                          </time>
                        </header>
                        <div className={styles.card__content}>
                          <p>Chủ tịch UBND tỉnh An Giang ký 
                            Quyết định số 1510/QĐ-UBND về việc xây dựng cơ sở mới 
                            cho trường THPT Nguyễn Hữu Cảnh để tách 
                            cơ sở vật chất ra khỏi trường THCS Thị Trấn Chợ Mới.
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.timeline__group}>
                    <span className={clsx(styles.timeline__year, styles.time)} aria-hidden="true">2006</span>
                    <div className={styles.timeline__cards}>
                      <div className={clsx(styles.timeline__card, styles.card)}>
                        <header className={(styles.card__header)}>
                          <time className={styles.time} datetime="2008-09-05">
                            <span className={styles.time__day}>05</span>
                            <span className={styles.time__month}>Sep</span>
                          </time>
                        </header>
                        <div className={styles.card__content}>
                          <p>Việc xây dựng mới cơ sở vật chất cho 
                            trường THPT Nguyễn Hữu Cảnh 
                            đã hoàn thành giai đoạn I và đưa vào sử dụng.
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.timeline__group}>
                    <span className={clsx(styles.timeline__year, styles.time)} aria-hidden="true">2006</span>
                    <div className={styles.timeline__cards}>
                      <div className={clsx(styles.timeline__card, styles.card)}>
                        <header className={(styles.card__header)}>
                          <time className={styles.time} datetime="2022-01-01">
                            <span className={styles.time__month}>NOW</span>
                          </time>
                        </header>
                        <div className={styles.card__content}>
                          <p>
                          Hiện nay, trường THPT Nguyễn Hữu Cảnh tọa lạc tại số 1B, 
                          đường Nguyễn Hữu Cảnh, thị trấn Chợ Mới, huyện Chợ Mới, 
                          tỉnh An Giang với cơ sở vật chất khang trang gồm 34 phòng học, khu hiệu bộ, các phòng bộ môn 
                          Ngoại ngữ, Vật lý, Hóa học, Sinh học và Tin học.
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className={styles.header}>LÃNH ĐẠO ĐƠN VỊ</div>
          <div className={clsx(styles.member, styles.row)}>
                <div className={clsx(styles.cover_member, styles.four_column, styles.col)}>
                  <div className={clsx(styles.john,styles.four_column, styles.col)}>
                      <img src={require("../img/nam.png")} alt=""/>
                      <div className={styles.name}>Lê Thanh Bình</div>
                      <div className={styles.position}>Phó hiệu trưởng</div>
                      <div className={styles.position}>Email: binhnguyenhuucanh@gmail.com</div>
                      <div className={styles.profile}>Phụ trách quản lý mảng học tập, chất lượng giáo dục và đào tạo</div>
                  </div>
                </div>
                
                <div className={clsx(styles.cover_member, styles.four_column, styles.col)}>
                  <div className={clsx(styles.jane, styles.four_column, styles.col)}>
                    <img src={require("../img/nu.jpg")} alt=""/>
                    <div className={styles.name}>Nguyễn Thị Hồng Huệ</div>
                    <div className={styles.position}>Hiệu trưởng</div>
                    <div className={styles.position}>Email: honghue.nhc@gmail.com</div>
                    <div className={styles.profile}>Quản lý chung, phân công và điều phối nhân sự cho các quyết định của cấp trên.</div>
                  </div>
                </div>
                
                <div className={clsx(styles.cover_member, styles.four_column, styles.col)}>
                  <div className={clsx(styles.mike, styles.four_column, styles.col)}>
                      <img src={require("../img/nam.png")} alt=""/>
                      <div className={styles.name}>Phan Việt Chương</div>
                      <div className={styles.position}>Phó hiệu trưởng</div>
                      <div className={styles.position}>Email: vietchuong@angiang.edu.vn</div>
                      <div className={styles.profile}>Phụ trách quản lý thiết bị giáo dục, chất lượng vật chất của trường</div>
                  </div>
                </div>
                
                <div className={clsx(styles.cover_member, styles.four_column, styles.col)}>
                <div className={clsx(styles.dan, styles.four_column, styles.col)}>
                    <div className="image_member"></div>
                    <img src={require("../img/nam.png")} alt=""/>
                    <div className={styles.name}>Cao Thành Lập</div>
                    <div className={styles.position}>Phó hiệu trưởng</div>
                    <div className={styles.position}>Email: thanhlap@angiang.edu.vn</div>
                    <div className={styles.profile}>Tham gia điều phối các hoạt động ngoài trường, các sự kiện, sân chơi cho học sinh.</div>
                </div>
                </div>
                
            </div>
        </main>
      </>
    );
  }
export default About;
