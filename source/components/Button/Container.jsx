import { View } from 'react-native'
import Styled from 'styled-components/native'

const ButtonContainer: React.ComponentType<ContainerProps> = Styled.View`
    background-color: ${props => props.background};
    border-radius: ${props => props.rounded};
    width: 100px;
    padding: 10px 20px;
`

export default ButtonContainer