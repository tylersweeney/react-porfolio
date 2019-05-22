import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Grid >
                        <Cell style ={{marginTop: '50px'}} col={12}>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#666262', height: '176px', background: 
                        'url(https://i.imgur.com/SpFiqYF.png) bottom /cover'}}>Mario Planner</CardTitle>
                        <CardText>A simple project management tool with authentication and cloud functions created with React, Redux & Firebase.</CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/tylersweeney/marioPlanner" target="_blank" rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a href="https://ty-sweeney-planner.firebaseapp.com/" target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </Cell>
                </Grid>
                </div>

            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Grid>
                        <Cell col={6}>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://i.imgur.com/eYP0NWb.png) center /cover'}}>Futurama Hangman</CardTitle>
                        <CardText>Guess letters based on the clue. The game will restart after a loss or win. Images edited in Photoshop and Illustrator and dynamically updated with JavaScript and jQuery in the HTML DOM.</CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/tylersweeney/futuramaHangman" target="_blank" rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a href="https://tylersweeney.github.io/futuramaHangman/" target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card>
                    </Cell>
                    <Cell col={6}>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://i.imgur.com/Xjj8Ueq.png) center /cover'}}>SpaceBalls: The RPG</CardTitle>
                        <CardText>Choose a character, and then and enemy and play until they defeat the enemy or are defeated and then pick a new enemy. RPG game using Javascript, jQuery, and timers. </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/tylersweeney/spaceBallsTheGame" target="_blank" rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a href="https://tylersweeney.github.io/spaceBallsTheGame/" target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card>
                    </Cell>
                    </Grid>
                    </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Grid>
                        <Cell col={6}>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://i.imgur.com/QKB2yuL.png) center /cover'}}>Firebase Train Time</CardTitle>
                        <CardText>An app that incorporates Firebase to host arrival and departure data. App retrieves and manipulate this information with Moment.js. Providea up-to-date information about various trains, arrival times and how many minutes remain until they arrive at their station.</CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/tylersweeney/train-time" target="_blank" rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a href="https://tylersweeney.github.io/train-time/" target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card>
                    </Cell>

                    <Cell col={6}>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://i.imgur.com/3SWVyrv.png) center /cover'}}>Firebase Train Time</CardTitle>
                        <CardText>A web app that lets users view and leave comments on the latest news. Uses Mongoose and Cheerio muscles to scrape news from the New York Times site.</CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/tylersweeney/mongo_scraper" target="_blank" rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a href="https://nyt-scraper-42.herokuapp.com/" target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card>
                    </Cell>
                    </Grid>
                    </div>
            )
        } 
        // else if (this.state.activeTab === 3){
        //     return(
        //         <div><h1>This is Full Stack Site</h1></div>
        //     )
        // }
    }

   

    render() {
        return(
            <div style = {{marginTop: '70px'}} className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Databases</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12} >
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;