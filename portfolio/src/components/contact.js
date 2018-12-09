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
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo id maiores voluptate fugit odit exercitationem itaque aliquam voluptates, beatae dolor optio error inventore, rerum, aut architecto blanditiis. Error, ipsa.</p>
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