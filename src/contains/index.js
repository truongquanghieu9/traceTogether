import React from "react";
import {Row, Col} from "reactstrap";

import Img1 from "../assets/img/main/img1.png";
import Img2 from "../assets/img/main/img2.png";
import Img3 from "../assets/img/main/img3.png";
import Img4 from "../assets/img/main/img4.png";
import LogoTao from "../assets/img/main/logo-AppStore.png";
import LogoGG from "../assets/img/main/logo-GooglePlay.png";
import LogoFis from "../assets/img/main/logo-Fis.png";
import logoBoYTe from "../assets/img/main/logo-BoYTe2.png";
import logoQuocHuy from "../assets/img/main/quocHuy2.png";

function Index() {
    return (
        <div className="main-container">
            <Row className="header-page">
                <Col>
                    <img src={logoBoYTe}/>
                    <span>Bộ Y Tế Việt Nam Cổng thông tin điện tử</span>
                </Col>
            </Row>
            <Row className="main-label">
                <Col>
                    <div className="main-label-content">
                        <h1>Cùng tải ứng dụng <span>Corona</span>,<br/>cùng nhau an toàn.</h1>
                        <div className="left-content">
                            Tham gia với cộng đồng ngăn chặn <br/> sự lây lan của COVID-19 thông qua <br/> theo dõi lịch sử tiếp xúc cộng đồng.
                        </div>
                        <div>
                            <img src={LogoTao}/>
                            <img src={LogoGG}/>
                        </div>
                    </div>
                </Col>
                <Col>
                    <img src={Img1} />
                </Col>
            </Row>
            <Row className="main-content">
                <h1>Ứng dụng <span className='corona'>Corona</span> hoạt động như thế nào?</h1>
                <h3>Chúng tôi sử dụng tín hiệu Bluetooth để xác định nếu bạn đang ở gần<br/>
                người sử dụng ứng dụng <span className='corona'>Corona</span> khác.</h3>
                <h3>Dữ liệu được mã hóa và chỉ được lưu trữ trên điện thoại của bạn.</h3>
                <h3>Khi bạn đồng ý và chủ động tải dữ liệu lên hệ thống thì Bộ Y tế <br/> mới có thể sử dụng dữ liệu của bạn.</h3>
            </Row>
            <Row className="main-info">
                <h1>Tại sao cần tải ứng dụng <span className='corona'>Corona</span>?</h1>
                <ul>
                    <li>
                        <img src={Img2} alt=""/>
                        <h3>Bảo vệ bản thân</h3>
                        <p>Nếu bạn có tiếp xúc gần với một trường hợp nhiễm COVID-19, chúng tôi giúp Bộ Y tế liên hệ với bạn nhanh chóng để hướng dẫn và chăm sóc.</p>
                    </li>
                    <li>
                        <img src={Img3} alt=""/>
                        <h3>Bảo vệ người thân</h3>
                        <p>Được liên lạc sớm hơn cho phép chúng tôi bảo vệ tốt hơn những người xung quanh bạn, giảm thiểu sự lây lan của COVID-19.</p>
                    </li>
                    <li>
                        <img src={Img4} alt=""/>
                        <h3>Bảo vệ cộng đồng</h3>
                        <p>Ứng dụng Corona giúp theo dõi lịch sử tiếp xúc ở cấp quốc gia một cách nhanh chóng. Khi càng nhiều người sử dụng nó, chúng ta sẽ an toàn hơn.</p>
                    </li>
                </ul>
            </Row>
            <Row className="main-download">
                <div>
                    <h1>Hãy tải ứng dụng <span className='corona'>Corona</span> từ bây giờ!<br/>Và cài đặt cho cả những người xung quanh.</h1>
                    <div>
                        <img src={LogoTao}/>
                        <img src={LogoGG}/>
                    </div>
                </div>
            </Row>
            <Row className="main-contact">
                <h1>Bạn có thắc mắc?</h1>
                <button>Liên hệ với chúng tôi</button>
            </Row>
            <Row className="footer-page">
                <Col className="inFooter1">
                    <div>Được thực hiện bởi</div>
                    <img src={LogoFis} />
                </Col>
                <Col className="inFooter2">
                    <div>Cập nhật lần cuối: 04/03/2020</div>
                    <div>©2020 Bộ Y tế Việt Nam</div>
                </Col>
                <Col className="inFooter3">
                    <div>Là sự hợp tác giữa</div>
                    <div>
                        <img src={logoQuocHuy} />
                        <img src={logoBoYTe} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Index;
