import React from "react";
import { View, Text, Image, } from "react-native"
import estilos from '../style/stytle';
import fotos from '../img/fotos';

export default function CartaoUsuario({ nome, Descricao, imag }) {
    return (
        <view style={estilos.catao}>
            <image source={fotos[img]} style={estilos.foto} />
            <text style={estilos.nome}>{nome}</text>
            <text style={estilos.descricao}>{descricao}</text>
        </view>

    )
}