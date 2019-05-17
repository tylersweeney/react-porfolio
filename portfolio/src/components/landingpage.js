import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl'

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                        src="https://cdn3.iconfinder.com/data/icons/hipster-trendy-vintage-swag/512/beard2-512.png"
                        alt="logo"
                        className="logo"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>
                        <p> JavaScript | React | NodeJS | HTML/CSS | Firebase | Responsive Web Design</p>

                        <div className="social-links">
                            
                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/tylerjsweeney/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>
                            {/* Github */}
                            <a href="https://github.com/tylersweeney" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>
                            {/* Github */}
                            <a href="https://stackoverflow.com/users/8525667/tyler-sweeney" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-stack-overflow"  aria-hidden="true" />
                            </a>
                            
                        </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;