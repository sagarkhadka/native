import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import ImageViewer from './components/ImageViewer'
import { Button } from './components/Button'

const placeholderImage = require('./assets/images/image.jpg')

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('You did not select any image.')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={placeholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme='primary'
          label='Choose a photo'
          onPress={pickImageAsync}
        />
        <Button label='User this photo' />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  }
})
