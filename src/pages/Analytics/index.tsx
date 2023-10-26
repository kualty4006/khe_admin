import React from "react";
import { Link } from "react-router-dom";

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";

import { Col, Container, Row, Card, CardBody, CardHeader } from "reactstrap";

import User from "./User";
import Widget from "./Widget";
import UserActivity from "./UserActivity";
import VisitorGraph from "./VisitorGraph";
import VisitorbyBrowser from "./VisitorbyBrowser";
import VisitorSource from "./VisitorSource";
import TrafficSource from "./TrafficSource";
import VisitorbyLocation from "./VisitorbyLocation";
import Channels from "./Channels";

import Simple from "../AllCharts/pie/Simple";
import Radar from "../AllCharts/radar/Radar";
import ThreeDBubble from "../AllCharts/bubble/3DBubble";
import ImagesChart from "../AllCharts/scatter/ImagesChart";

const index = () => {
  document.title = "Analytics | Dashonic - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs
            title="Dashboard"
            breadcrumbItem="Analytics KHE Kualty"
          />

          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Scatter Images Chart</h4>
                  <Link
                    to="//www.npmjs.com/package/react-apexcharts"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-secondary-subtle"
                  >
                    Docs <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </CardHeader>
                <CardBody>
                  <div id="images_scatter" className="apex-charts" dir="ltr">
                    <ImagesChart />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Radar Chart - Multiple series</h4>
                  <Link
                    to="//www.npmjs.com/package/react-apexcharts"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-secondary-subtle"
                  >
                    Docs <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </CardHeader>
                <CardBody>
                  <div id="multi_radar" className="apex-charts" dir="ltr">
                    <Radar />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Simple Pie Chart</h4>
                  <Link
                    to="//www.npmjs.com/package/react-apexcharts"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-secondary-subtle"
                  >
                    Docs <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </CardHeader>
                <CardBody>
                  <div id="simple_pie_chart" className="apex-charts" dir="ltr">
                    <Simple />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">3D Bubble Chart</h4>
                  <Link
                    to="//www.npmjs.com/package/react-apexcharts"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-secondary-subtle"
                  >
                    Docs <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </CardHeader>
                <CardBody>
                  <div id="bubble_chart" className="apex-charts" dir="ltr">
                    <ThreeDBubble />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col className="col-xxl-9" lg={8}>
              <User />
            </Col>
            <Col className="col-xxl-3" lg={4}>
              <Widget />
              <UserActivity />
            </Col>
          </Row>

          <Row>
            <Col xl={3} md={6}>
              <VisitorGraph />
            </Col>
            <Col xl={3} md={6}>
              <VisitorbyBrowser />
            </Col>
            <Col xl={3} md={6}>
              <VisitorSource />
            </Col>
            <Col xl={3} md={6}>
              <TrafficSource />
            </Col>
          </Row>
          <Row>
            <Col xl={8}>
              <VisitorbyLocation />
            </Col>
            <Col xl={4}>
              <Channels />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default index;
