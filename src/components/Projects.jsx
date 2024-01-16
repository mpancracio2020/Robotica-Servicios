import React from "react";
import Accordion from '../Accordion';
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Data
import { filteredProjects } from "../data";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";


var laserD = require('../images/laser_p3.png')

export default function Projects() {
  const [mainProjects, setMainProjects] = React.useState([]);
  const { theme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);

  React.useEffect(
    function () {
      const tempData = [];
      data.forEach((el, i) => (tempData[i] = Object.create(el)));
      if (data.length !== 0 && filteredProjects.length !== 0) {
        const tempArray = tempData.filter((obj) =>
          filteredProjects.includes(obj.name)
        );
        tempArray.length !== 0
          ? setMainProjects([...tempArray])
          : setMainProjects([...tempData.slice(0, 3)]);
      } else {
        setMainProjects([...tempData.slice(0, 3)]);
      }
    },
    [data]
  );

   const accordionData = [
    {
      title: 'Section 1',
      content: `This practice consists of developing an iterative pseudo-navigation algorithm.
                        I have used the bumper and laser sensor to avoid collisions. The laser will predominate in the measurements, 
                        but it may be the case that in some turns it does not sense a corner and that is where the bumper comes into play.`
    }
  ];

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {isLoading && (
            <Container className="d-flex">
              <Loading />
            </Container>
          )}
          {error && <h2 className="text-center">{error}</h2>}
          
          {!error && data.length === 0 && (
            <h2 className="text-center">
              Oops, you do not have any GitHub projects yet...
            </h2>
          )}
         
          {
          }
          {/* P1 - LOCALIZED VACUUM CLEANER -*/}
          <div>
            <h1>Autoparking <Icon icon="icon-park-outline:parking" className="display-4" /></h1>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={'More content..'} 
                  content={
                  <p>
                  <span></span>
                   This practice encompasses the task of rescuing survivors. For this we need a drone. We will use your GPS and camera to perform the task. {"\n"}
                    First of all, you have to know an estimate of the position of the survivors. Which is (x,y) in my case. 
                    <br>
                  <span></span>
                        
                  
                    Once here, we need to sweep the area. There are many methods, we can do spirals, up-down sweeps, etc...
                    I have implemented a spiral, controlled by speed on the incremental x axis and a constant yaw value{"\n"}
                    
                    <br>
                    </br>
                    {"\n"}
                    Now it's time to recognize faces, for this we use the Haar tool, which has a fairly low computational cost compared to other tools.{"\n"}
                    Haar needs to have a "straight" face{"\n"}
                    to be able to recognize it,therefore, we implemented an algorithm that allows us to detect faces with any rotation

                    <br>
                    </br>
                    At this point, you just need not to repeat faces, comparing the position in which you detect a face, once you store 6 different faces, 
                    {"\n"}
                    return to the base and land using HAL.landed()
                    <br>
                    </br>
                    {"\n"}

                  <pre>
        
                  <span> </span>
                    {"\n"}
                    
                
                      Here is an example video: {"\n"} {"\n"}
                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/pWLZbrcnBuA?si=FN8QzS648ruP2o_T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </center>
                  <span></span>

                    
                    </pre>
                  </p>
                
                    } />
                 
              ))}
            </div>
          </div>
           
           
          {/* P1 -END*/}

          {/* P2 - RESCUE PEOPLE -*/}
           <div>
            <h1>Rescue People <Icon icon="gis:drone" className="display-4" /></h1>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={'More content..'} 
                  content={
                  <p>This practice encompasses the task of rescuing survivors. For this we need a drone. We will use your GPS and camera to perform the task. {"\n"}
                    First of all, you have to know an estimate of the position of the survivors. Which is (x,y) in my case. 
                    <br>
                    </br>

                    Once here, we need to sweep the area. There are many methods, we can do spirals, up-down sweeps, etc...
                    I have implemented a spiral, controlled by speed on the incremental x axis and a constant yaw value{"\n"}
                    
                    <br>
                    </br>
                    {"\n"}
                    Now it's time to recognize faces, for this we use the Haar tool, which has a fairly low computational cost compared to other tools.{"\n"}
                    Haar needs to have a "straight" face{"\n"}
                    to be able to recognize it,therefore, we implemented an algorithm that allows us to detect faces with any rotation

                    <br>
                    </br>
                    At this point, you just need not to repeat faces, comparing the position in which you detect a face, once you store 6 different faces, 
                    {"\n"}
                    return to the base and land using HAL.landed()
                    <br>
                    </br>
                    {"\n"}
                
                    Here is an example video: {"\n"} {"\n"}
                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/GbOMlcvZUxs?si=nZPCvAFe2eF66ALc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>
                    
                  </p>

                                  } />
              ))}
            </div>
          </div>
          {/* P2 -END*/}
          {/* P3 - Autoparking*/}

          <div>
            <h1>Autoparking <Icon icon="icon-park-outline:parking" className="display-4" /></h1>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={'More content..'} 
                  content={
                  <p>
                  <span></span>
                   In this practice we have 2 versions of the same task. On the one hand, a holonomic car where mobility is quite intuitive,{"\n"} 
                   and on the other, a car with Ackerman dynamics. {"\n"}
                  <span></span>
                        
                  <center>
                      <img src={laserD} width={550} height={350} alt='Large Pizza' />
                    </center>  
                    <center>
                     State diagram {"\n"}
                    </center>
                  <pre>
                    
                  The functionality can be summarized as follows: {"\n"}
                  <span> </span>
                    {"\n"}
                    
                  I have followed the scheme of a somewhat special state machine. First of all we keep the initial orientation of the car in case its use is necessary later.{"\n"} 
                  Later we will advance until our right laser detects enough space to park. {"\n"}
                  Once we have found the space, we proceed to maneuver, starting a forward movement while turning left to facilitate parking. {"\n"}
                  Then the car will go backwards, turning very subtly to better square the car until the distance of the rear sensor allows it.{"\n"}
                  And finally we will use the front laser to move forward by turning to the right to finish squaring the car

                   <span> </span>
                  The differences between cars at the code level have been minimal. {"\n"}
                    
                   <span> </span>
                  The vast majority of changes are due to differences between simulators between ros and ros2. {"\n"}
                  As well as modification of parameters. For the holonomic car I have implemented p3_holonimic.py {"\n"} 
                  and later p3_ackermann.py for the ackermann car.{"\n"}
                               
  
                  <span></span>
                    {"\n"}
                    {"\n"}
                      Here is an example video: {"\n"} {"\n"}
                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/pWLZbrcnBuA?si=FN8QzS648ruP2o_T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </center>
                  <span></span>

                    
                    </pre>
                  </p>
                
                    } />
                 
              ))}
            </div>
          </div>
           
           
          {/* P3 -END*/}
          
        </Container>
      </section>
    </Element>
  );
}
