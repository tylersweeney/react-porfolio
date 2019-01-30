import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>

                        <h2>Tyler Sweeney</h2>
                        <img 
                        src='https://cdn3.iconfinder.com/data/icons/hipster-trendy-vintage-swag/512/beard2-512.png'
                        alt="avatar"
                        style={{height:'250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>I'm a Full Stack Web Developer with 3+ years experience developing apps and websites. I have worked on contract jobs and individual projects that required knowledge of all aspects from front end to back end, start to finish. I have experience using both Angular and React frameworks. I like to use Angular because it is expressive, readable, and quick to develop. However, I do like to use react when I am looking for a simple and dependable programming solution. I always use JQuery in my RESTful API components that involve DOM Traversal, Event Handling, and AJAX calls. I prefer to use Test Driven Development methods because it is the simplest way to achieve both good quality code and good test coverage. When I first go to implement a new feature, the first question that I ask is whether the existing design is the best design possible that enables me to implement that functionality. My experience, skill set, and methodology allow me to provide complete solutions at any stage and scope of a project.</p>
                    </Cell>
                    <Cell col={6}>

                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        714.501.6400
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-fax" aria-hidden="true"/>
                                        714.501.6400
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        tjs@tylerjsweeney.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        tyler.sweeney
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                     
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;