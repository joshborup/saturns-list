import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import axios from 'axios'



export default class UserSignUpData extends Component {
    constructor(props){
        super(props)
        this.state = {
            jan: 0,
            feb: 0,
            mar: 0,
            apr: 0,
            may: 0,
            jun: 0,
            jul: 0,
            aug: 0,
            sep: 0,
            oct: 0,
            nov: 0,
            dec: 0,
        }
    }

    componentDidMount(){
        axios.get('/api/getUserSignUpData').then(response => {
            
            this.setState({
                jan: response.data[0].count,
                feb: response.data[1].count,
                mar: response.data[2].count,
                apr: response.data[3].count,
                may: response.data[4].count,
                jun: response.data[5].count,
                jul: response.data[6].count,
                aug: response.data[7].count,
                sep: response.data[8].count,
                oct: response.data[9].count,
                nov: response.data[10].count,
                dec: response.data[11].count,
            })
        })
    }
    

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
              {
                label: 'User Sign-Ups',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [this.state.jan, this.state.feb, this.state.mar, this.state.apr, this.state.may, this.state.jun, this.state.jul, this.state.aug, this.state.sep, this.state.oct, this.state.nov, this.state.dec]
              }
            ]
          }
        return (
            <div className='user-bar-graph'>
                <h3>New Users Sign Ups</h3>
                <HorizontalBar 
                data={data}
                height={350}
                />
            </div>
        );
    }
}