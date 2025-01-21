import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Allitmes from './Allitmes'
import CreateItem from './CreateItem'


const HomeScreen = () => {
    const [view, setView] = useState(0)
    const [data, setdata] = useState([
        { id: 1, name: 'rice', stock: 5, unit: 'kg' },
        { id: 2, name: 'wheat', stock: 19, unit: 'kg' },
        { id: 3, name: 'pulse', stock: 10, unit: 'kg' },
        { id: 4, name: 'Basmati rice', stock: 50, unit: 'kg' },
        { id: 5, name: 'Corn', stock: 20, unit: 'kg' },
    ])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, view === 0 ? { backgroundColor: '#7be07d' } : null]} onPress={() => setView(0)}>
                    <Text style={[styles.buttonText, view === 0 ? { color: 'black' } : null]}>All items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, view === 1 ? { backgroundColor: '#7be07d' } : null]} onPress={() => setView(1)}>
                    <Text style={[styles.buttonText, view === 1 ? { color: 'black' } : null]}>Low items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, view === 2 ? { backgroundColor: '#7be07d' } : null]} onPress={() => setView(2)}>
                    <Text style={[styles.buttonText, view === 2 ? { color: 'black' } : null]}>Create</Text>
                </TouchableOpacity>
            </View>
            {view === 0 && <Allitmes data={data} />}
            {view === 1 && <Allitmes data={data.filter((item) => item.stock < 20)} />}
            {view === 2 && <CreateItem data={data} setdata={setdata} />}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        padding: '4%'
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10
    },
    button: {
        borderRadius: 50,
        borderWidth: 0.8,
        paddingHorizontal: 10,
        paddingVertical: 3.5,
        borderColor: '#7be07d'
    },
    buttonText: {
        color: '#7be07d',
        fontSize: 12
    },
})