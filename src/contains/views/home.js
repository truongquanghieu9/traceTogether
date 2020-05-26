import React from "react";
import {Container, Row, Col} from "reactstrap";

import Img1 from "../../assets/img/main/img1.png";
import Img2 from "../../assets/img/main/img2.png";
import Img3 from "../../assets/img/main/img3.png";
import Img4 from "../../assets/img/main/img4.png";
import LogoTao from "../../assets/img/main/logo-AppStore.png";
import LogoGG from "../../assets/img/main/logo-GooglePlay.png";
import LogoFis from "../../assets/img/main/logo-Fis.png";
import logoBoYTe from "../../assets/img/main/logo-BoYTe2.png";
import logoQuocHuy from "../../assets/img/main/quocHuy2.png";

function Home() {
    return (
        <Container fluid>
            <Row className="header-home">
                <Col sm="1"/>
                <Col sm="11">
                    <img src={logoBoYTe}/>
                    <span>Bộ Y Tế Việt Nam Cổng thông tin điện tử</span>
                </Col>
                <Col sm="12">
                    <Row>
                        <Col xs="12" sm="12" md={{ size: 5, offset: 1 }} lg={{ size: 5, offset: 1 }} xl={{ size: 6, offset: 1 }}>
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
                        <Col xs="12" sm="8" md="5" lg="5" xl="5" >
                            <img src={Img1} className="header-img"/>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <div className="container">
                <Row className="main-content">
                    <h1>Ứng dụng <span className='corona'>Corona</span> hoạt động như thế nào?</h1>
                    <h3>Chúng tôi sử dụng tín hiệu Bluetooth để xác định nếu bạn đang ở gần<br/>
                        người sử dụng ứng dụng <span className='corona'>Corona</span> khác.</h3>
                    <h3>Dữ liệu được mã hóa và chỉ được lưu trữ trên điện thoại của bạn.</h3>
                    <h3>Khi bạn đồng ý và chủ động tải dữ liệu lên hệ thống thì Bộ Y tế <br/> mới có thể sử dụng dữ liệu của bạn.</h3>
                </Row>
            </div>

            <Row className="main-information">
                <h1>Tại sao cần tải ứng dụng <span className='corona'>Corona</span>?</h1>
                <ul>
                    <li>
                        <img src={Img2}/>
                        <h3>Bảo vệ bản thân</h3>
                        <p>Nếu bạn có tiếp xúc gần với một trường hợp nhiễm COVID-19, chúng tôi giúp Bộ Y tế liên hệ với bạn nhanh chóng để hướng dẫn và chăm sóc.</p>
                    </li>
                    <li>
                        <img src={Img3}/>
                        <h3>Bảo vệ người thân</h3>
                        <p>Được liên lạc sớm hơn cho phép chúng tôi bảo vệ tốt hơn những người xung quanh bạn, giảm thiểu sự lây lan của COVID-19.</p>
                    </li>
                    <li>
                        <img src={Img4}/>
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

            <Row className="footer-home">
                <Col className="inFooter1" xl="4" md="4">
                    <div>Được thực hiện bởi</div>
                    <img src={LogoFis} />
                </Col>
                <Col xl="2" md="1"/>
                <Col xl="2" md="1"/>
                <Col className="inFooter3" xl="4" md="4">
                    <div>Là sự hợp tác giữa</div>
                    <div>
                        <img src={logoQuocHuy} />
                        <img src={logoBoYTe} />
                    </div>
                </Col>
                <Col className="inFooter2">
                    <div>Last updated at: 04/03/2020</div>
                    <div>©2020 Bộ Y tế Việt Nam</div>
                    <div>Development by: Quang Hieu</div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
