import React from 'react'
import ReactDOM from 'react-dom'


class ContactUs extends React.Component {
  render () {
    return <div>
      Hello {this.props.name}
    </div>
  }
}


const el = document.body
ReactDOM.render(<ContactUs />, el)