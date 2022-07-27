import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import './Timeline.css'

function Timeline() {
  return (
    
    <div className="experience">
    <h2 className="title">Studies & Experience</h2>
      <VerticalTimeline lineColor="#3e497a">

      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - PRESENT"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            NTT Data Europe & LATAM
          </h3>
          <h4>Junior Developer</h4>
          
          <p>Software development with SQL</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="03/2022 - PRESENT"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='nnn'>
            Frontend Development Bootcamp, Upgrade Hub
          </h3>

          <p> Web Development</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="05/2022 - PRESENT"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='nnn'>
            Cloud Computing Course, Upgrade Hub
          </h3>

          <p>AWS & Azure</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Software Development Training Course (DAM)
          </h3>
          <h4>Centro Europeo de Estudios Profesionales</h4>
          {/* <p></p> */}
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          High School
          </h3>
          <h4>IES Profesor Máximo Trueba</h4>
          {/* <p></p> */}
        </VerticalTimelineElement>
        
        
        
        

        
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;