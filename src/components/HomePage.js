import React from 'react'
import bgImage from './asia.jpeg'
import divImage from './mainpagepic.jpeg'
import Card from 'react-bootstrap/Card';



const HomePage = () => {
  return (
    <>
      <div className="bgimage" style={{ backgroundImage: `url(${bgImage})`, color: 'white' }}>
        <Card className="homecard" style={{ width: '22rem', height: '40%' }}>
          <Card.Body>
            <Card.Title style={{marginTop:'12px'}}><h2>LITTLE ASIA</h2></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">43 Nishimasu Rd, Tokyo</Card.Subtitle>
            <Card.Text>
              <i>Konichiwa! Little Asia in Northern Tokyo now serves delicacies from Nepal, India, China and Thailand. Konichiwa! Little Asia in Northern Tokyo now serves delicacies from Nepal, India, China and Thailand.</i>
            </Card.Text>
            <hr/>
            <Card.Link className="links" href={`tel:${2014660294}`}>  📞 CONTACT US  </Card.Link>
            <Card.Link className="links" href="https://goo.gl/maps/ErLhwuctWqKYgbLc9">  📍LOCATION</Card.Link>
          </Card.Body>
        </Card>
      <br />
      
      <Card className="homecard" style={{ width: '22rem', height: '50%' }}>
          <Card.Body>
            <Card.Title style={{marginTop:'12px'}}><h2>LOREUM IPSUM</h2></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Athens, Greece</Card.Subtitle>
            <Card.Text style={{textAlign:'justify'}}>
              <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/><br/></i>
              <u><b>CopyRight - Ayush Mainali</b></u>
            </Card.Text>
            {/* <hr/> */}
            {/* <Card.Link className="links" href={`tel:${2014660294}`}>  📞 CONTACT US  </Card.Link>
            <Card.Link className="links" href="https://goo.gl/maps/ErLhwuctWqKYgbLc9">  📍LOCATION</Card.Link> */}
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default HomePage