import { View, Text ,Image} from 'react-native'
import React from 'react'

const ItemComponent = props => {
  return (
    <View>
        <Image 
         source={props.imageUri}
        />
      <Text>ItemComponent</Text>
    </View>
  )
}

export default ItemComponent