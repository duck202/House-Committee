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
      <div className="borderg bcon"> 
          <Row className="borderg">
            <Col className="borderg">
              <div className="scon">
                <Row>
                  <Col>
                  <div  className="borderg uline">
                  </div>
                  </Col>
                </Row>
                <Row>
                  <Col><div className="borderg bline">3</div></Col>
                  <Col><div className="borderg bline"> 2</div></Col>
                  <Col><div className="borderg bline">1</div></Col>
                </Row>
              </div>
            </Col>
          </Row>
      </div>
    )
  }
}











// <div className="topbox">
// <img src="https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%"/> 
//                 <div>
//    מלמטה עד למעלה - מערכת ניהול בתים המשותפים מלאה.
//    </div>
//    <br></br>
//    <div>
//    ברוכים הבאים למערכת ניהול ועדי בית. כאן תוכלו למצוא את כל אשר תצטרכו לצורך ניהול הבית המשותף בצורה קלה פשוטה וידידותית. 
//    </div>
// </div>



//  <Figure className="figure-top border" >
// <Figure.Image 
//   width={500}
//   height={180}
//   alt="171x180"
//   src="
// >
  
// </Figure.Image>
//   <Figure.Caption>
// מלמטה עד למעלה - מערכת ניהול בתים המשותפים מלאה.
// </Figure.Caption>
// <Figure.Caption width={500} >
//   ברוכים הבאים למערכת ניהול ועדי בית. כאן תוכלו למצוא את כל אשר תצטרכו לצורך ניהול הבית המשותף בצורה קלה פשוטה וידידותית. 
// </Figure.Caption>
// </Figure>   