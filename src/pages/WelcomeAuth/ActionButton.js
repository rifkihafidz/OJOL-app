import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '../../components'
import { colors } from '../../utils'

const ActionButton = ({ desc, title, onPress }) => {
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.text.description}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  )
}

const styles = {
  wrapper: {
    component: {
      marginBottom: 43, maxWidth: 225
    }
  },
  text: {
    description: {
      fontSize: 10, color: colors.text.default, textAlign: 'center', paddingHorizontal: '15%', marginBottom: 6
    }
  }
}

export default ActionButton
