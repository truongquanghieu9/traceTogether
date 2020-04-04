import React from "react";
import {Row, Col} from "reactstrap";

import Img1 from "../assets/img/main/img1.png";
import Img2 from "../assets/img/main/img2.png";
import Img3 from "../assets/img/main/img3.png";
import Img4 from "../assets/img/main/img4.png";
import LogoTao from "../assets/img/main/logo-AppStore.png";
import LogoGG from "../assets/img/main/logo-GooglePlay.png";
import LogoFis from "../assets/img/main/logo-Fis.png";
import logoBoYTe from "../assets/img/main/logo-BoYTe.png";
import logoQuocHuy from "../assets/img/main/quocHuy.png";

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
                        <h3>
                            Tham gia với cộng đồng ngăn chặn sự lây lan của COVID-19 thông qua theo dõi liên lạc dựa vào cộng đồng.
                        </h3>
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
                <Col xs="12" md="12" sm="12">Content</Col>
            </Row>
            <Row className="main-info">
                <Col xs="4">Information 1</Col>
                <Col xs="4">Information 2</Col>
                <Col xs="4">Information 3</Col>
            </Row>
            <Row className="main-download">
                <Col xs="6" sm="4">Label</Col>
                <Col xs="6" sm="4">Image</Col>
            </Row>
            <Row className="main-contact">
                <Col sm={{ size: 6, order: 2, offset: 1 }}>Contact</Col>
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
