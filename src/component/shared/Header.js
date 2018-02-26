import React, { Component } from 'react';
import saturn from '../../media/saturn.svg'
import './shared.css'



export default class Header extends Component {
    constructor(props){
        super()
        this.state = {
            isAnimating: false,
          }
          this.toggleAnimation = this.toggleAnimation.bind(this)
        }

      
        toggleAnimation(){
          if(!this.state.isAnimating){
          this.setState({
            isAnimating: true
          })
        }else{
          this.setState({
            isAnimating: false
          })
        }
        
        }

 

    render() {

        return (
            <div className={this.state.isAnimating ? 'header grow' : 'header shrink'} >
                <div>
                    <div>
                        <img src={saturn}/>   
                        <h1>
                            Saturn's List
                        </h1>
                    </div>
                    
                    <div className='button-menu'>
                        <button onClick={this.toggleAnimation}>	&#9776;</button>
                        <ul className={this.state.isAnimating ? 'show-menu' : 'hide-menu'}>
                            <li>Home</li>
                            <li>Profile</li>
                            <li>Account</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
        </div>
        );
    }
}
