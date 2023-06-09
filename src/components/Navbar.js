import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export class Navbar extends Component {
// constructor(){
//   super()

// }

  render() {
let {mode,handleMode,txtColor}=this.props
    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg bg-${mode} text-${mode==='light'?'dark':'light'}`}>
  <div className="container-fluid ">
    <Link className={`navbar-brand text-${mode==='light'?'dark':'light'}` }to="/newsmonk">NewsMonk </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-primary" aria-current="page" to="/general">Home</Link>
        </li>
        <li className="nav-item"> <Link className="nav-link text-primary" to="/business">Business</Link></li>
      
        <li className="nav-item"> <Link className="nav-link text-primary" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"> <Link className="nav-link text-primary" to="/health">Health</Link></li>
        <li className="nav-item"> <Link className="nav-link text-primary" to="/science">Science</Link></li>
        <li className="nav-item"> <Link className="nav-link text-primary" to="/sports">Sports</Link></li>
        <li className="nav-item"> <Link className="nav-link text-primary" to="/technology">Technology</Link></li>
       </ul>
      
    </div>
  <div className="form-check form-switch " onClick={handleMode}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked"> {txtColor} Mode</label>
  </div>
</div>
</nav>
{/* _________ */}
      </div>
    )
  }
}

export default Navbar
