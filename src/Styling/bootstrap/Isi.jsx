import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Isian extends React.Component{
    render(){
        return(
            <Container>
      <Row>
        <Col sm={9} className="mt-4"><img src="https://cdn.antaranews.com/cache/730x487/2022/07/08/000_326927P.jpg" width="300px" alt="" /> <br></br>
		<p align='justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></Col>
        <Col sm={3} className="mt-3">
                <h2>Galeri</h2><br></br>
                <img src="https://static.republika.co.id/uploads/images/inpicture_slide/para-pemain-manchester-united-mengheningkan-cipta-selama-satu_220909111222-634.jpg" width="150px" alt="" />
                <img src="https://static.republika.co.id/uploads/images/inpicture_slide/para-pemain-manchester-united-mengheningkan-cipta-selama-satu_220909111222-634.jpg" width="150px" alt="" className="mt-3" />
                <img src="https://static.republika.co.id/uploads/images/inpicture_slide/para-pemain-manchester-united-mengheningkan-cipta-selama-satu_220909111222-634.jpg" width="150px" alt="" className="mt-3" />
                <img src="https://static.republika.co.id/uploads/images/inpicture_slide/para-pemain-manchester-united-mengheningkan-cipta-selama-satu_220909111222-634.jpg" width="150px" alt="" className="mt-3" />
        </Col>
      </Row>
      <div className='text-white p-2' style={{ backgroundColor: 'rgba(34, 40, 34, 1.0)' }}>
        <center>© Khoerulfajri</center>
      </div>
    </Container>
        )
    }
}