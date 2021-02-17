import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IllustrationRegister } from '../../assets'
import { Button, Input } from '../../components'
import { setForm } from '../../redux'
import { colors } from '../../utils'

const Register = ({ navigation }) => {
  const { form } = useSelector(state => state.RegisterReducer)

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
        <IllustrationRegister width={115} height={106} style={styles.illustration} />
        <Text style={styles.text.desc}>Mohon isi beberapa data untuk proses pendaftaran anda {name}</Text>
        <View style={styles.space(64)} />
        <Input placeholder="Nama lengkap" value={form.fullName} onChangeText={value => onInputChange(value, 'fullName')} />
        <View style={styles.space(33)} />
        <Input placeholder="Email" value={form.email} onChangeText={value => onInputChange(value, 'email')} />
        <View style={styles.space(33)} />
        <Input placeholder="Password" value={form.password} onChangeText={value => onInputChange(value, 'password')} secureTextEntry={true} />
        <View style={styles.space(83)} />
        <Button title="Daftar" onPress={sendData} />
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

export default Register
