import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                       <div style={{textAlign: 'center', marginTop: "50px"}}>
                           <img 
                           src="https://cdn3.iconfinder.com/data/icons/hipster-trendy-vintage-swag/512/beard2-512.png"
                           alt="avatar"
                           style={{height: '200px'}}
                           />
                       </div>
                       <h2 style={{paddingTop: '2em'}}>Tyler J. Sweeney</h2>
                       <h4 style={{color: 'gray'}}>Full Stack Web Developer</h4>
                       <hr style={{borderTop: '3px solid #833fb2', width: '100%'}} />
                       <p>Full-Stack Engineer developing websites and applications from the ground up -- from concept, navigation, layout and programming to UX and SEO. Strong background in Javascript, React.js, Firebase, and RESTful APIs. Skilled at writing well designed, testable and efficient code using current best practices in Web development.
 </p>
                       <hr style={{borderTop: '3px solid #833fb2', width: '100%'}} />
                       <h5>Location</h5>
                       <p>Costa Mesa, CA</p>
                       <h5>Phone</h5>
                       <p>714.501.6400</p>
                       <h5>Email</h5>
                       <p>ty@tylersweeney.com</p>
                       <h5>Web</h5>
                       <p><a href = "https://www.linkedin.com/in/tylerjsweeney/">LinkedIn</a></p>
                       <p><a href = "https://github.com/tylersweeney">GitHub</a></p>
                       <p><a href ="tylerjsweeney.com">tylersweeney.com</a></p>
                       <hr style={{borderTop: '3px solid #833fb2', width: '100%'}} />
                   </Cell>
                   <Cell style = {{marginTop: "50px" }}className="resume-right-col" col={8}>

                       <Education
                        startYear={2017}
                        endYear={2018} 
                        schoolName="UCI Division of Continuing Education"
                        schoolDescription="The Coding Bootcamp Full Stack Web Developer Certification"/>

                        <Education
                        startYear={2016}
                        endYear={2017} 
                        schoolName="Orange Coast College"
                        schoolDescription="Java and Python"/>

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <Experience
                        startYear={2019}
                        endYear={"Present"}
                        jobName = {"Cosmic Surf City"}
                        jobLocation = {"Hunting Beach, CA"}
                        jobDescription = {"Developed a full Shopify store and customized theme and layout."}
                        />

                        <Experience
                        startYear={2017}
                        endYear={2018}
                        jobName = {"ACRB Supply Co."}
                        jobLocation = {"Haiku, HI"}
                        jobDescription = {"Worked with client to build their vision as they had no website to start with."}
                        />
                        
                        <Experience 
                        startYear={2016}
                        endYear={2017}
                        jobName="UCI Web Dev Bootcamp"
                        jobDescription= "24 week intensive Full Stack Developer Bootcamp."
                        bulletOne = "Participated in several group projects that involved coming up with an idea for an app and creating the project start to finish backend to front end."
                        bulletTwo = "Created personal projects weekly."
                        bulletThree =  "Challenge of coding a project while learning the languages used."
                        bulletFour = "Required fast learning and self-starting."

                        groupProjectOne = "MoodBrews.com - An exercise in designing reusable and scalable code. Facial recognition API in the back-end analyzes user image. Data driven tools in the back-end evaluate results and returns a suggested beer."
                        techUsedOne = "Technologies used: "
                        bulletFive = "Node, Express, Mongoose, MongoDB, Ejs, Javascript, jQuery, AJAX, APIs, and Materialize"

                        groupProjectTwo = "WeAreStillCool.com - A social media hub for parents to connect, meet up, and share product reviews. Users can create a profile and upload profile pictures or use their Google ID. The site shows local data from Meetup.com, Facebook events, and Google calendar for parents to create or attend events."
                        techUsedTwo = "Technologies used: React, Node, Express, Mongoose, MongoDB, Passport.js, Oauth, Webpack"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills 
                            skill='JavaScript'
                            progress={75}
                        />
                        <Skills 
                            skill='HTML/CSS'
                            progress={85}
                        />
                        <Skills 
                            skill='Node.js'
                            progress={65}
                        />
                        <Skills 
                            skill='ReactJS'
                            progress={60}
                        />
                        <Skills 
                            skill='jQuery'
                            progress={50}
                        />
                        <Skills 
                            skill='RESTful'
                            progress={65}
                        />
                        <Skills 
                            skill='Git'
                            progress={80}
                        />
                        <Skills 
                            skill='RMongoDB'
                            progress={60}
                        />
                        <Skills 
                            skill='Mocha.js'
                            progress={55}
                        />
                        <Skills 
                            skill='Firebase'
                            progress={70}
                        />
                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default Resume;