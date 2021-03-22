import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#222B39`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: "100vw",
        padding: `10px 20px`
      }}
    >
      <Link to={"http://instagram.com/tctrl_uk"}>
        <StaticImage
          alt="Traction CTRL Car Group"
          src="../images/tctrl.png"
          height={45}
          style={{ marginBottom: `1.45rem`, float: "right" }}
        />
      </Link>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{ color: `white`, textDecoration: `none` }}
        >{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
