import React, { Component } from 'react'
import './App.css';
import { Button, Container, Figure, R, Row, Col } from 'react-bootstrap';
import autoBind from 'react-autobind';
import shortid from 'shortid'
import './LandPage.css'


export default class LanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    autoBind(this);
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
                <Figure>
  <Figure.Image 
    width={500}
    height={180}
    alt="171x180"
    src="https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  />
    <Figure.Caption>
  מערכת ניהול בתים המשותפים מלאה - מלמטה עד למעלה.
  </Figure.Caption>
  <Figure.Caption>
    ברוכים הבאים למערכת ניהול ועדי בית. כאן תוכלו למצוא את כל אשר תצטרכו לצורך ניהול הבית המשותף בצורה קלה פשוטה וידידותית. 
  </Figure.Caption>
</Figure>  
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


