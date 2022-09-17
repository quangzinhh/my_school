import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Blog.module.css'

function Blog() {
  return (
    <div className={styles.body}>
      <div className={styles.blogGrade10}>
      <h1 className={styles.title1}>Thông tin tuyển sinh 10</h1>
      <Card className={styles.item}>
        <Card.Body>
          <Card.Title>Thông báo về các loại sách giáo khoa lớp 10</Card.Title>
          <Card.Text className={styles.date}>
            27/07/2022
          </Card.Text>
          <Card.Text className={styles.content}>
          Danh mục sách giáo khoa lớp 10, năm học 2022 - 2023 của trường THPT Nguyễn Hữu Cảnh.
          </Card.Text>
          <Card.Img className={styles.imgIncard}src={require("../img/sach10.jpg")}></Card.Img>
          <Button variant="primary">Xem chi tiết</Button>
        </Card.Body>
      </Card>
      <Card className={styles.item}>
        <Card.Body>
          <Card.Title>Họp phụ huynh đầu năm khối 10 năm học 2022 - 2023</Card.Title>
          <Card.Text className={styles.date}>
            18/08/2022
          </Card.Text>
          <Card.Text className={styles.content}>
          Học sinh trúng tuyển vào lớp 10 năm học 2022 – 2023 có mặt tại trường THPT Nguyễn Hữu Cảnh lúc 08 giờ 00 ngày 23/8/2022 để biết danh sách lớp tạm thời và nghe sinh hoạt một số quy định đầu năm.
          </Card.Text>
          <Card.Img className={styles.imgIncard}src={require("../img/hph.jfif")}></Card.Img>
          <Button variant="primary">Xem chi tiết</Button>
        </Card.Body>
      </Card>
      <Card className={styles.item}>
        <Card.Body>
          <Card.Title>Thống kê số lượng học sinh nhập học</Card.Title>
          <Card.Text className={styles.date}>
            10/08/2022
          </Card.Text>
          <Card.Text className={styles.content}>
          Áp dụng chương trình GDPT mới lớp 10, năm học 2022 -  2023 trường THPT Nguyễn Hữu Cảnh tuyển sinh 13 lớp 10 với 593 học sinh mới nhập học.
          </Card.Text>
          <Card.Img className={styles.imgIncard} src={require("../img/ct_moi.jpg")}></Card.Img>
          <Button variant="primary">Xem chi tiết</Button>
        </Card.Body>
      </Card>
      </div>
      <div className={styles.blogGradeAll}>
      <h1 className={styles.title1}>Thông tin chung cho học sinh toàn trường</h1>
      <Card className={styles.item}>
        <Card.Body>
          <Card.Title>Lễ khai giảng năm học mới 2022 - 2023</Card.Title>
          <Card.Text className={styles.date}>
            05/09/2022
          </Card.Text>
          <Card.Text className={styles.content}>
          Ngày 5/9/2022, hòa chung trong không khí vui tươi của ngày khai trường, ngày “toàn dân đưa trẻ đến trường”, trường THPT Nguyễn Hữu Cảnh long trọng tổ chức Lễ Khai giảng năm học 2022 - 2023.
          </Card.Text>
          <Card.Img className={styles.imgIncard}src={require("../img/lekhaigiang.jpg")}></Card.Img>
          <Button variant="primary">Xem chi tiết</Button>
        </Card.Body>
      </Card>
      <Card className={styles.item}>
        <Card.Body>
          <Card.Title>Họp phụ huynh đầu năm năm học 2022 - 2023</Card.Title>
          <Card.Text className={styles.date}>
            18/08/2022
          </Card.Text>
          <Card.Text className={styles.content}>
          Học sinh trúng tuyển vào lớp 10 năm học 2022 – 2023 có mặt tại trường THPT Nguyễn Hữu Cảnh lúc 08 giờ 00 ngày 23/8/2022 để biết danh sách lớp tạm thời và nghe sinh hoạt một số quy định đầu năm.
          </Card.Text>
          <Card.Img className={styles.imgIncard}src={require("../img/hph.jfif")}></Card.Img>
          <Button variant="primary">Xem chi tiết</Button>
        </Card.Body>
      </Card>
      <Card className={styles.item}>
        <Card.Body>
          <Card.Title>Ngày hội chiến sĩ tình nguyện Hoa phượng đỏ năm 2022</Card.Title>
          <Card.Text className={styles.date}>
            21/08/2022
          </Card.Text>
          <Card.Text className={styles.content}>
          Thực hiện chỉ đạo của Trung ương Đoàn, ngày 21/8/2022, Đoàn trường THPT Nguyễn Hữu Cảnh Ngày hội chiến sĩ tình nguyện "Hoa phượng đỏ" năm 2022 nhằm phát huy tinh thần xung kích, tình nguyện trong đoàn viên học sinh.  
          </Card.Text>
          <Card.Img className={styles.imgIncard}src={require("../img/hoaphuongdo.jpg")}></Card.Img>
          <Button variant="primary">Xem chi tiết</Button>
        </Card.Body>
      </Card>
      </div>
      <div className={styles.blogGrade12}>
      <h1 className={styles.title1}>Thông tin cho học sinh khối 12</h1>
      <Card className={styles.item}>
        <Card.Body>
          <Card.Title>Mốc thời gian xét tốt nghiệp và tuyển sinh đại học cần nhớ</Card.Title>
          <Card.Text className={styles.date}>
            21/07/2022
          </Card.Text>
          <Card.Text className={styles.content}>
          Thí sinh biết điểm thi tốt nghiệp THPT vào ngày 24/7 nhưng từ mai (22/7), các em đã có thể vào hệ thống của Bộ Giáo dục và Đào tạo để đăng ký nguyện vọng xét tuyển đại học.
          </Card.Text>
          <Card.Img className={styles.imgIncard}src={"https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/292596426_2353438774817893_9218030376596852605_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y0twhWM9Th4AX8vDNjc&tn=DLjs7djf9zyGAE7x&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT_ivLjQUt9eSZOoEgpesyjavPd9aFeF4kvNz22uN7Qcmg&oe=63288D6A"}></Card.Img>
          <Button variant="primary">Xem chi tiết</Button>
        </Card.Body>
      </Card>
      <Card className={styles.item}>
        <Card.Body>
          <Card.Title>Bộ Giáo dục công bố đáp án tất cả môn thi tốt nghiệp THPT</Card.Title>
          <Card.Text className={styles.date}>
            15/07/2022
          </Card.Text>
          <Card.Text className={styles.content}>
          Tối 15.7, Bộ Giáo dục và Đào tạo công bố đáp án các môn thi trắc nghiệm trong kỳ thi tốt nghiệp THPT 2022. Theo kế hoạch của Bộ Giáo dục và Đào tạo, kết quả kỳ thi tốt nghiệp THPT dự kiến được công bố đồng loạt trên cả nước vào ngày 24.7
          </Card.Text>
          <Card.Img className={styles.imgIncard}src={"https://vcdn1-vnexpress.vnecdn.net/2022/07/15/Tieng-Anh-8630-1657884010.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=YxDclB9Gzbo-5UZqpholZA"}></Card.Img>
          <Button variant="primary">Xem chi tiết</Button>
        </Card.Body>
      </Card>
      <Card className={styles.item}>
        <Card.Body>
          <Card.Title>Hoàn thành kỳ thi tốt nghiệp THPT</Card.Title>
          <Card.Text className={styles.date}>
            10/08/2022
          </Card.Text>
          <Card.Text className={styles.content}>
          Chúc mừng các sĩ tử 2k4 trường THPT Nguyễn Hữu Cảnh đã hoàn thành xuất sắc kỳ thi Tốt nghiệp THPT 2022. Cùng xem lại một số hình ảnh đẹp trong 2 ngày nay của lực lượng tiếp sức mùa thi nhé.
          </Card.Text>
          <Card.Img className={styles.imgIncard}src={"https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/292733531_2351048218390282_6108933937889058070_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VTHO4PVm260AX8MRyFO&_nc_ht=scontent-sin6-2.xx&oh=00_AT8BP9feDPCsdqf_iupeU2WgWLbhA-UhzdSdNdLm4etMFQ&oe=6328AB8A"}></Card.Img>
          <Button variant="primary">Xem chi tiết</Button>
        </Card.Body>
      </Card>
      </div>
      
    </div>
    
  );
}

export default Blog;