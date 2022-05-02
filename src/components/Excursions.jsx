import { Row, Col, ListGroup, Tab, Image } from "react-bootstrap";

const Excursions = () => {
  return (
    <div className="excursionsContainer" id="excursions">
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={3}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                <span className="excursionTitle">Link 1</span>
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                <span className="excursionTitle">Link 2</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <Image
                  className="excursionOneImage"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2d9b0d3-236d-488f-8b8f-5b05eedb717c/ddb8ugy-371e8371-d327-47bb-9ae5-49f822988301.png/v1/fill/w_1192,h_670,q_70,strp/beach_day_thumbnail_by_d_reamzrblx_ddb8ugy-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZDJkOWIwZDMtMjM2ZC00ODhmLThiOGYtNWIwNWVlZGI3MTdjXC9kZGI4dWd5LTM3MWU4MzcxLWQzMjctNDdiYi05YWU1LTQ5ZjgyMjk4ODMwMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NSeAsZ36bskI4buLsM-WpGqkPUDzKp4UbftmiB_ffiI"
                  thumbnail
                />{" "}
                <p className="excurstionText">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt quia ipsam quaerat iusto tempore ipsum esse ad
                  delectus itaque numquam architecto enim et doloremque voluptas
                  laborum sit veritatis, voluptatum veniam possimus? Tempore,
                  eligendi. Quae doloremque ab quas neque obcaecati earum quasi
                  nulla in labore reprehenderit? poo poo
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <Image
                  className="excursionOneImage"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2d9b0d3-236d-488f-8b8f-5b05eedb717c/ddb8ugy-371e8371-d327-47bb-9ae5-49f822988301.png/v1/fill/w_1192,h_670,q_70,strp/beach_day_thumbnail_by_d_reamzrblx_ddb8ugy-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZDJkOWIwZDMtMjM2ZC00ODhmLThiOGYtNWIwNWVlZGI3MTdjXC9kZGI4dWd5LTM3MWU4MzcxLWQzMjctNDdiYi05YWU1LTQ5ZjgyMjk4ODMwMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NSeAsZ36bskI4buLsM-WpGqkPUDzKp4UbftmiB_ffiI"
                  thumbnail
                />{" "}
                <p className="excurstionText">
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
