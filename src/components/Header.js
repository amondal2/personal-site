import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>agastya mondal</h1>
        <p>
          Software engineer, analog photographer, zine designer, espresso
          consumer, and archaeology junkie based in Boston, MA.{' '}
          <div className="text" />
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            style={{ cursor: 'pointer' }}
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            style={{ cursor: 'pointer' }}
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            CV
          </a>
        </li>
        <li>
          <a
            style={{ cursor: 'pointer' }}
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            style={{ cursor: 'pointer' }}
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
