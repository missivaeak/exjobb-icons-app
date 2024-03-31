import { Pressable, Text } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

// import type { RootStackScreenProps } from '../navigation/types'
// import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'

import styles from '../constants/styles'

export default function NavigateBack({onPress}: {onPress: () => void}) {
  return (

    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        pressed ? styles.pressed : null,
        {
          marginRight: 5
        }
      ]}
      >
      <MaterialCommunityIcon
        style={{
          fontSize: 40,
          color: '#000',
          textAlign: 'center',
          textAlignVertical: 'center',
          paddingRight: 5
        }}
        name='gamma'
        />
    </Pressable>
  )
}