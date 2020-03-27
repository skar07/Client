// @flow

import * as React from 'react'
import { Switch as Toggle } from 'react-native'

type Props = {
      disabled: boolean,

      onChange?: Function
}

const Switch = (props: Props) => (
      <Toggle
            {...props}
      />
)

Switch.defaultProps = {
      disabled: false
}

export default Switch