//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const MyButton = requireNativeComponent('MyButton', MyButtonView)

export default class MyButtonView extends Component {
  render () {
    return <MyButton {...this.props} />
  }
}

// MyButtonView.propTypes = {
//   exampleProp: React.PropTypes.string
// }
