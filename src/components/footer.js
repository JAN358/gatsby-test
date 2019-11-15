import React from "react"
import PropTypes from "prop-types"
import {Layout} from 'antd'
const {Footer} = Layout;

const FooterSite = ({ siteTitle }) => (
  <Footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a
      href="https://www.gatsbyjs.org"
    >
      {siteTitle}
    </a>
  </Footer>
)

FooterSite.propTypes = {
  siteTitle: PropTypes.string,
}

FooterSite.defaultProps = {
  siteTitle: ``,
}

export default FooterSite