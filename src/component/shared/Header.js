import React, { Component } from 'react';
import saturn from '../../media/saturn.svg';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import './shared.css';


class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAnimating: false,
            user: ''
          }
          this.toggleAnimation = this.toggleAnimation.bind(this);
          this.logout = this.logout.bind(this);
        }


        logout(){
            axios.post('/logout').then((response) => {
                console.log(response);
                window.location.href = '/account_login'
            })

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
        const boldheader = {
            color: this.props.color
        }
        const boldheader1 = {
            color: this.props.color1
        }
        const boldheader2 = {
            color: this.props.color2
        }
        const boldheader3 = {
            color: this.props.color3
        }

        console.log(this.props.user)
        return (
            <div className={this.state.isAnimating ? 'header grow' : 'header shrink'} >
                <div>
                    <div>
                        <img src={saturn}/>   
                        <h1>
                            Saturn's List
                            {console.log(this.props.user)}
                        </h1>
                    </div>
                    
                    <div className='button-menu'>
                        <button onClick={this.toggleAnimation}>	&#9776;</button>
                        <ul className={this.state.isAnimating ? 'show-menu' : 'hide-menu'}>
                            <Link to='/'><li style={boldheader}>Home</li></Link>
                            <Link to='/add_post'><li style={boldheader1}>Post</li></Link>
                            <Link to='/account'><li style={boldheader2}>Account</li></Link>
                            { this.props.user ?
                            <li onClick={()=>this.logout()}>logout</li>
                            :
                            <Link to='/account_login'><li>Login/Register</li></Link>
                            }
                        </ul>
                    </div>
                </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header)