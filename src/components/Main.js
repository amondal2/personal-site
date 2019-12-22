import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            Thanks for visiting! I'm a software engineer based in Boston, MA. I
            graduated from Johns Hopkins in 2016 and since have been working in
            the humanitarian, media, and biotech industries. In my current role,
            I work on the data visualization / reporting team at Foundation
            Medicine, a cancer genomics company. I've been working primarily in
            the Javascript (Node / React) ecosystem, but I have extensive
            experience with Python as well. I am particulary interested in the
            intersection of biology, data science, and software.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CV</h2>
          <iframe
            title="amondal_cv"
            src="https://drive.google.com/file/d/1Gg5DmOhip1b_D1XTNfCOcnV8TGLaKUtu/preview"
            width="100%"
            height="480"
          ></iframe>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Blog</h2>
          <p>Coming soon!</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            In true millennial fashion, I can be found all over the internet.
            Don't hesitate to reach out!
          </p>
          <ul className="icons">
            <li></li>
            <li>
              <a href="mailto:amondal13@gmail.com" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/agastya.mondal"
                className="icon fa-instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/amondal2"
                className="icon fa-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/agastyamondal"
                className="icon fa-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
