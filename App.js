import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Linking
} from 'react-native'
import { Pressable } from 'react-native-web'

const colorGithub = '#010409'
const colorFontGithub = '#C9D1D9'
const colorDarkFontGithub = '#4F565E'
const imgProfileGithub = 'https://avatars.githubusercontent.com/u/102859028?v=4'
const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={'green'} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Adasms castilo"
          style={style.avatar}
          source={{ uri: imgProfileGithub }}
        />
        <Text
          accessibilityLabel="nome: Adams castillo"
          style={[style.defaultText, style.name]}
        >
          Adams Castillo
        </Text>
        <Text
          accessibilityLabel="nickname: @Adamscastillo"
          style={[style.defaultText, style.nickname]}
        >
          @AdamsCastillo
        </Text>
        <Text
          accessibilityLabel="description: Developer | Esposo | Pai. "
          style={[style.defaultText, style.description]}
        >
          "Developer | Esposo | Pai."
        </Text>

        <View style={style.button}>
          <Text style={[style.defaultText, style.textButton]}>
            Open in Github
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default App

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGithub,
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    padding: 20
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2
  },
  defaultText: {
    color: colorFontGithub
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 35
  },
  nickname: {
    fontSize: 25,
    color: colorDarkFontGithub,
    marginBottom: 10
  },
  description: {
    fontWeight: 'bold',
    fontesize: 18
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20
  },
  textButton: {
    fontWeight: 'bold',
    fontesize: 18
  }
})
