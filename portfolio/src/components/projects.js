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
                    <Grid>
                        <Cell col={4}>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 
                        'url(https://i.imgur.com/SpFiqYF.png) center /cover'}}>React Project #1</CardTitle>
                        <CardText>A simple project management tool with authentication and cloud functions created with React, Redux & Firebase.</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored><a href="https://ty-sweeney-planner.firebaseapp.com/" target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </Cell>
                    <Cell col={4}>
                    {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center /cover'}}>React Project #1</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, qui nostrum quo excepturi aperiam eveniet, perspiciatis beatae omnis laudantium, natus dolores tempora cupiditate modi. Modi vitae eaque fugit porro dicta!</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                </Card>
                </Cell>
                <Cell col={4}>
                    {/* // Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center /cover'}}>React Project #1</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, qui nostrum quo excepturi aperiam eveniet, perspiciatis beatae omnis laudantium, natus dolores tempora cupiditate modi. Modi vitae eaque fugit porro dicta!</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
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
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, qui nostrum quo excepturi aperiam eveniet, perspiciatis beatae omnis laudantium, natus dolores tempora cupiditate modi. Modi vitae eaque fugit porro dicta!</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
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
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, qui nostrum quo excepturi aperiam eveniet, perspiciatis beatae omnis laudantium, natus dolores tempora cupiditate modi. Modi vitae eaque fugit porro dicta!</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
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
                <div><h1>This is VueJS</h1></div>
            )
        } else if (this.state.activeTab === 3){
            return(
                <div><h1>This is Full Stack Site</h1></div>
            )
        }
    }

   

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Databases</Tab>
                    <Tab>Full Stack Site</Tab>
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