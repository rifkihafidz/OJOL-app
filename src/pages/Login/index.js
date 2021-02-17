import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, Input } from '../../components'
import { colors } from '../../utils'
import { IllustrationLogin } from '../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { setForm } from '../../redux'

const Login = ({ navigation }) => {
  const { form } = useSelector(state => state.LoginReducer)

  const dispatch = useDispatch()

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value))
  }

  const sendData = () => {
    console.log('Data berhasil dikirim!', form)
  }
  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button type="icon" name="back" onPress={() => navigation.goBack()} />
        <IllustrationLogin width={115} height={106} style={styles.illustration} />
        <Text style={styles.text.desc}>Silahkan isi email dan password anda untuk melakukan login</Text>
        <View style={styles.space(64)} />
        <Input placeholder="Email" value={form.email} onChangeText={value => onInputChange(value, 'email')} />
        <View style={styles.space(33)} />
        <Input placeholder="Password" value={form.password} onChangeText={value => onInputChange(value, 'password')} secureTextEntry={true} />
        <View style={styles.space(83)} />
        <Button title="Login" onPress={sendData} />
      </ScrollView>
    </View>
  )
}

const styles = {
  wrapper: {
    page: {
      padding: 20
    }
  },
  illustration: {
    marginTop: 8
  },
  text: {
    desc: {
      fontSize: 14, fontWeight: 'bold', color: colors.default, marginTop: 16, maxWidth: 200
    }
  },
  space: value => {
    return {
      height: value
    }
  }
}

export default Login
