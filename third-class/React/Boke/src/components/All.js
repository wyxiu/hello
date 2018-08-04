import React ,{Component} from 'react';
import {
Logo
} from './components/logo/Logo';
import {
Nav
} from './components/nav/Nav'
export default class All extends Component {
    render() {
        return (      	
         <Logo />
        <Nav />
        )
    }
}