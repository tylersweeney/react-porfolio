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
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>JavaScript has become one of the more important and widely used programming langauges today. Web applications are expected to give users a rich user interface experience.</p>
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
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        ty@tylersweeney.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        <a href = "https://www.linkedin.com/in/tylerjsweeney/">LinkedIn</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-github-square" aria-hidden="true"/>
                                        <a href = "https://github.com/tylersweeney">GitHub</a>
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