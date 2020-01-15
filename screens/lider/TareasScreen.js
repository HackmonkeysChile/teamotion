import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Button,
    FlatList,
    Image,
    TouchableOpacity, Modal, Alert
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import colores from '../../constants/colores';
import textos from '../../constants/textos';
import TareasContainer from '../../components/Tareas';
import { useSelector, useDispatch } from 'react-redux';
import * as tareasAction from "../../store/actions/tareas";
import * as equiposAction from "../../store/actions/equipos";
import * as personasEquiposAction from "../../store/actions/personasEquipos";

const TareasScreen = props => {
    const [modal, setModal] = useState(false);
    const [idEquipo, setIdEquipo] = useState('');
    const tareas = useSelector(estado => estado.tareas.tareas);
    const equipos = useSelector(estado => estado.equipos.equipos);
    const dispatch = useDispatch();
    const personasEquipos = useSelector(estado => estado.personasEquipos.personasEquipos);
    const dispatchTareas = useDispatch();

    useEffect(() => {
        dispatchTareas(tareasAction.obtenerTareas());
    }, [dispatchTareas]);

    const renderGrid = (itemData) => {
        return (
            <View style={styles.gridData}>
                <View style={styles.container}>
                    <Text style={styles.tituloEquipo}> {itemData.item.titulo}</Text>
                    <View style={styles.containerTarea}>
                        <Text style={styles.texto}>{itemData.item.descripcion}</Text>
                    </View>
                    <Text style={styles.textoDer}> {itemData.item.idPersona}</Text>
                </View>
                
            </View>
        );
    };


    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={{ width: '100%', alignContent: 'center', justifyContent: 'center' }}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.superTitle}>TAREAS</Text>
                    </View>
                    <Image source={require('../../assets/img/imagen_teams.png')} style={{ width: '100%', height: 200 }} />
                </View>
                <View style={styles.tareaCont}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.text}>Aquí podrás visualizar las tareas en estado "en proceso"</Text>
                    </View>
                    <FlatList
                        data={tareas}
                        renderItem={renderGrid}
                        style={styles.flat}
                        keyExtractor={(renderGrid, index) => index.toString()}
                    />

                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    tareaCont: {
        flex: 1,
        paddingHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    superTitle: {
        color: colores.letras,
        fontSize: textos.titulo,
        fontFamily: 'open-sans-bold'
    },
    text: {
        color: colores.letras,
        fontSize: textos.subtitulo,
        textAlign: 'center',
        fontFamily: 'open-sans'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 30,
    },
    subtitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 15,
    },
    container: {
        width: '100%',
        flexDirection: 'column',
    },
    containerTarea: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 19,
        backgroundColor: colores.secundario,

    },
    tituloEquipo: {
        fontSize: textos.subtitulo,
        fontFamily: 'open-sans-bold',
        color: colores.letras,
        textTransform: 'uppercase',
        marginBottom: 3
    },
    textoPequeño: {
        fontSize: textos.miniTexto,
        fontFamily: 'open-sans',
        color: colores.letras,
        textAlign: 'justify',
    },
    containerButton: {
        width: '15%',
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 32,
        width: 32,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flat: {
        width: '100%',
        marginBottom: 20
    },
    gridData: {
        flexDirection: 'row',
        marginBottom: 10
    },
    texto: {
        fontSize: textos.texto,
        fontFamily: 'open-sans',
        color: colores.letras,
        textAlign: 'left'
    },
    textoDer: {
        fontSize: textos.texto,
        fontFamily: 'open-sans',
        color: colores.letras,
        textAlign: 'right'
    },
});

export default TareasScreen;