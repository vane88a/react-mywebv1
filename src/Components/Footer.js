import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">

           <ul className="copyright">
              <li>&copy; Copyright 2020 Gabriel Wong</li>
              <li>Design by <a href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
