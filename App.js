import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import ImageViewer from './components/ImageViewer'
import { Button } from './components/Button'

const placeholderImage = require('./assets/images/image.jpg')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label='Choose a photo' />
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
