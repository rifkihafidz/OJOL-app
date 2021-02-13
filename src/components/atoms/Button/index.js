import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { colors } from '../../../utils'

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  wrapper: {
    component: {
      backgroundColor: colors.default, borderRadius: 25
    }
  },
  text: {
    title: {
      fontSize: 12, fontWeight: 'bold', color: 'white', textTransform: 'uppercase', textAlign: 'center', paddingVertical: 13
    }
  }
}

export default Button
