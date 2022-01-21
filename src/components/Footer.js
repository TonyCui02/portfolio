import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <a target="_blank" href="https://github.com/TonyCui02" className="logo">
      <span className="icon fa-github"></span>
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/tonycui02" className="logo">
      <span className="icon fa-linkedin"></span>
    </a>
    {/* <p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p> */}
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
