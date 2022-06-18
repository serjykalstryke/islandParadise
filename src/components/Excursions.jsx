import { Row, Col, ListGroup, Tab, Image } from "react-bootstrap";

const Excursions = () => {
  return (
    <div
      className="excursionsContainer px-4 justify-content-evenly"
      id="excursions"
    >
      <Tab.Container
        id="list-group-tabs-example tabContainer"
        defaultActiveKey="#link1"
      >
        <Row className="tabs row row-cols-lg-5 g-2">
          <Col lg={3} className="p-4">
            <ListGroup>
              <ListGroup.Item action href="#link1">
                <span className="excursionTitle">
                  Horse Back Riding, Sloth Hangout and Tour
                </span>
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                <span className="excursionTitle">Sloth and Monkey Hangout</span>
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                <span className="excursionTitle">Zip Line and Beach</span>
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                <span className="excursionTitle">Tour to the Beach</span>
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                <span className="excursionTitle">ATV Tours</span>
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                <span className="excursionTitle">
                  Little French Key Day Pass
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={9} className="p-10">
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <div className="excursionOneImage"></div>{" "}
                <p className="excursionText">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt quia ipsam quaerat iusto tempore ipsum esse ad
                  delectus itaque numquam architecto enim et doloremque voluptas
                  laborum sit veritatis, voluptatum veniam possimus? Tempore,
                  eligendi. Quae doloremque ab quas neque obcaecati earum quasi
                  nulla in labore reprehenderit? poo poo
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <div className="excursionTwoImage"></div>{" "}
                <p className="excursionText">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt quia ipsam quaerat iusto tempore ipsum esse ad
                  delectus itaque numquam architecto enim et doloremque voluptas
                  laborum sit veritatis, voluptatum veniam possimus? Tempore,
                  eligendi. Quae doloremque ab quas neque obcaecati earum quasi
                  nulla in labore reprehenderit?
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <div className="excursionThreeImage"></div>{" "}
                <p className="excursionText">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt quia ipsam quaerat iusto tempore ipsum esse ad
                  delectus itaque numquam architecto enim et doloremque voluptas
                  laborum sit veritatis, voluptatum veniam possimus? Tempore,
                  eligendi. Quae doloremque ab quas neque obcaecati earum quasi
                  nulla in labore reprehenderit?
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <div className="excursionFourImage"></div>{" "}
                <p className="excursionText">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt quia ipsam quaerat iusto tempore ipsum esse ad
                  delectus itaque numquam architecto enim et doloremque voluptas
                  laborum sit veritatis, voluptatum veniam possimus? Tempore,
                  eligendi. Quae doloremque ab quas neque obcaecati earum quasi
                  nulla in labore reprehenderit?
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <div className="excursionFiveImage"></div>{" "}
                <p className="excursionText">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt quia ipsam quaerat iusto tempore ipsum esse ad
                  delectus itaque numquam architecto enim et doloremque voluptas
                  laborum sit veritatis, voluptatum veniam possimus? Tempore,
                  eligendi. Quae doloremque ab quas neque obcaecati earum quasi
                  nulla in labore reprehenderit?
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <div className="excursionSixImage"></div>{" "}
                <p className="excursionText">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt quia ipsam quaerat iusto tempore ipsum esse ad
                  delectus itaque numquam architecto enim et doloremque voluptas
                  laborum sit veritatis, voluptatum veniam possimus? Tempore,
                  eligendi. Quae doloremque ab quas neque obcaecati earum quasi
                  nulla in labore reprehenderit?
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Excursions;
