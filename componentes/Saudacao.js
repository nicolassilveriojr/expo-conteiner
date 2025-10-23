
import react from "react";
import { Text } from 'react-native';

export default function Saudacao({nome}){
    return(
        <Text style={{fontsize:18, marginBottom:5}}>
            Ola {nome}
        </Text>
    )
}