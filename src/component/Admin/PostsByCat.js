import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';

export default class PostsByCat extends Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get('/api/get_item_count_by_cat').then(response => {
            this.setState({
                data: response.data
            })
        })
    }
    
    render() {
        const label = this.state.data.map((e,i) => {
            return (e.name)
        })

        const inputData = this.state.data.map((e,i) => {
            return (e.count)
        })
        

        const data = {
            labels: label,
            datasets: [{
                data: inputData,
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#F33A30',
                '#E8F549',
                '#C39BD3',
                '#E67E22',
                '#85929E',
                '#186A3B',
                '#F2D7D5',
                '#212F3C',
                '#D5F5E3',
                '#00FFFF',
                '#00FF00',
                '#FF00FF',
                '#800000',
                '#C0C0C0',
                '#808000'

                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#F33A30',
                '#E8F549',
                '#C39BD3',
                '#E67E22',
                '#85929E',
                '#186A3B',
                '#F2D7D5',
                '#212F3C',
                '#D5F5E3',
                '#00FFFF',
                '#00FF00',
                '#FF00FF',
                '#800000',
                '#C0C0C0',
                '#808000'
                ]
            }]
        };

        return (
            <div>
                <h2>Item Count by Cat</h2>
                <Pie 
                    data={data}
                    height={350}
                />
            </div>
        );
    }
}