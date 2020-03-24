import { View } from 'react-native'
import Styled from 'styled-components/native'

const ButtonContainer = Styled.View`
    background-color: ${props => props.background};
    border-radius: ${props => props.rounded + 'px'};
    width: ${props => props.width|| '100px'};
    padding: 10px 20px;
    marginVertical: ${props=> props.marginVertical + 'px' || null}
`

export default ButtonContainer