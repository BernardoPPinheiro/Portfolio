import React from 'react'
import ReactDOM from 'react-dom'


class Footer extends React.Component {
  render () {
    return (
    <footer>
      Hello your in footer
    </footer>
    );
  }
}
const el = document.body
ReactDOM.render(<Footer />, el)

export default Footer;