import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Experience extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px', fontWeight: "bold"}}>{this.props.jobName}</h4>
                    <h6 style = {{fontWeight: "bold"}}>{this.props.jobLocation}</h6>
                    <p style={{marginTop:'0px', marginBottom:'0px'}}>{this.props.jobDescription}</p>
                    <p style={{marginTop:'0px', marginBottom:'0px'}}>{this.props.bulletOne}</p>
                    <p>{this.props.bulletTwo}</p>
                    <p>{this.props.bulletThree}</p>
                    <p>{this.props.bulletFour}</p>
                    <p>{this.props.bulletFive}</p>
                    <p>{this.props.groupProjectOne}</p>
                    <h5 style={{marginTop:'0px', marginBottom:'0px'}}>{this.props.techUsedOne}</h5>
                    <p>{this.props.bulletFive}</p>
                    <p>{this.props.groupProjectTwo}</p>
                    <p>{this.props.techUsedTwo}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience