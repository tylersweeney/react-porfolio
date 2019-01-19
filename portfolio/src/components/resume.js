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
                       <div style={{textAlign: 'center'}}>
                           <img 
                           src="https://cdn3.iconfinder.com/data/icons/hipster-trendy-vintage-swag/512/beard2-512.png"
                           alt="avatar"
                           style={{height: '200px'}}
                           />
                       </div>
                       <h2 style={{paddingTop: '2em'}}>Tyler J. Sweeney</h2>
                       <h4 style={{color: 'gray'}}>Full Stack Web Developer</h4>
                       <hr style={{borderTop: '3px solid #833fb2', width: '100%'}} />
                       <p>I am a Full Stack Web Developer with 3+ years experience developing apps and websites. I have worked on contract jobs and individual projects that required knowledge of all aspects from front end to back end, start to finish. I have experience using both Angular and React frameworks. I like to use React because it is expressive, readable, and quick to develop.</p>
                       <hr style={{borderTop: '3px solid #833fb2', width: '100%'}} />
                       <h5>Address</h5>
                       <p>164 Albert Place, Costa Mesa, Ca 92627</p>
                       <h5>Phone</h5>
                       <p>714.501.6400</p>
                       <h5>Email</h5>
                       <p>tjs@tylerjsweeney.com</p>
                       <h5>Web</h5>
                       <p>tylerjsweeney.com</p>
                       <hr style={{borderTop: '3px solid #833fb2', width: '100%'}} />
                   </Cell>
                   <Cell className="resume-right-col" col={8}>

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
                        startYear={2016}
                        endYear={2017}
                        jobName="UCI Web Dev Bootcamp"
                        jobDescription= 
                            "Built a full-stack secure, stable, and scalable website and integrated Shopify e-commerce framework.
                            Perform keyword Analysis for Search Engine Optimization & Marketing.
                            Create monthly SEO strategy reports.
                            Wrote programs to perform regular search audits.
                            Author Pay Per Click (PPC) campaigns.
                            Make requested content changes in a fast-paced environment.
                            Technologies used: React, Node, Adsense, Express, Mongoose, MongoDB, Passport.js, Oauth, Webpack"
                       
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
                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default Resume;