import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import ImageViewer from './components/ImageViewer'
import { Button } from './components/Button'
import { CircleButton } from './components/CircleButton'
import { IconButton } from './components/IconButton'
import { EmojiPicker } from './components/EmojiPicker'

const placeholderImage = require('./assets/images/image.jpg')

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [showAppOptions, setShowAppOptions] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert('You did not select any image.')
    }
  }

  const onReset = () => {
    setShowAppOptions(false)
  }

  const onAddSticker = () => {
    setIsModalVisible(true)
  }

  const onSaveImageAsync = async () => {
    //
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={placeholderImage}
          selectedImage={selectedImage}
        />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon='refresh' label='Reset' onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon='save-alt'
              label='Save'
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme='primary'
            label='Choose a photo'
            onPress={pickImageAsync}
          />
          <Button
            label='Use this photo'
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        {/* <Text>Hello</Text> */}
      </EmojiPicker>
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
  },

  optionsContainer: {
    position: 'absolute',
    bottom: 80
  },

  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})
