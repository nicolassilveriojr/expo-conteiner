import react from "react";
import { ScrollView } from 'react-native';
import Titulo from "./componentes/titulo";
import Saudacao from './componentes/Saudacao';

export default function app(){
  return(
  <ScrollView style={{padding:20}}>
    <Titulo  />
    <Saudacao nome="nicolas"/>
    <Saudacao nome="guilherme"/>
    <Saudacao nome="gab"/> 
  </ScrollView>
  )
}