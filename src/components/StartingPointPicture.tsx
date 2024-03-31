import { Text } from "react-native"
// import EnvVars from "../constants/EnvVars"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// import styles from "../constants/styles"

export default function StartingPointPicture(props: {source: string}) {
  return (
    <MaterialCommunityIcon
      style={{
          width: '60%',
          aspectRatio: 1,
          fontSize: 240,
          color: '#000',
          textAlign: 'center',
          textAlignVertical: 'center'
      }}
      name='decagram'
      />
  )
}
