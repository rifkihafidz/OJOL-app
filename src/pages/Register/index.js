import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, Input } from '../../components'
import { colors } from '../../utils'
import { IconBack, IllustrationRegister } from '../../assets'
import { useSelector } from 'react-redux'

const Register = () => {
  const RegisterReducer = useSelector(state => state.RegisterReducer)

  useEffect(() => {
    console.log(RegisterReducer)
  })

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: ''
  })

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    })
  }

  const sendData = () => {
    console.log('Data berhasil dikirim!', form)
  }
  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IconBack width={25} height={25} />
        <IllustrationRegister width={115} height={106} style={styles.illustration} />
        <Text style={styles.text.desc}>Mohon isi beberapa data untuk proses pendaftaran anda</Text>
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
