import React from 'react'
import ReactDOM from 'react-dom'


class ContactUs extends React.Component {
  render () {
    return (
    <div>
      Hello your in contact component
    </div>
    );
  }
}
const el = document.body
ReactDOM.render(<ContactUs />, el)

export default ContactUs;