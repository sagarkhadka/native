import { useState } from 'react'
import { FlatList, Image, Platform, Pressable, StyleSheet } from 'react-native'

export const EmojiList = ({ onSelect, onCloseModal }) => {
  const [emoji] = useState([
    require('../assets/images/emoji/one.png'),
    require('../assets/images/emoji/two.png'),
    require('../assets/images/emoji/three.png'),
    require('../assets/images/emoji/four.png'),
    require('../assets/images/emoji/five.png'),
    require('../assets/images/emoji/six.png')
  ])

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item)
            onCloseModal()
          }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  image: {
    width: 100,
    height: 100,
    marginRight: 20
  }
})
