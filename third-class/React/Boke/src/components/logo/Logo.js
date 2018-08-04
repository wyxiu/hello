import React  from 'react';
import classNames from 'classnames'
import logo from './logo.svg';
import './logo.css';
<<<<<<< HEAD
import classNames from 'classnames'
export default class Logo extends Component {
 
  render() {
    return (
      <div className={classNames("logo-bar", {"logo-vertical":this.props.vertical})}>
=======
export default (props)=> {
    return (



      <div className="logo-bar tada">

>>>>>>> 48d3c6280eebca3b42246d05dfff8a792e89bae4
          <img className="logo" src={logo} alt="myBlog" />
          <h3>myBlog</h3>
      </div>
    )
}
