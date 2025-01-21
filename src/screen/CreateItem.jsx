import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'

const CreateItem = ({ data, setdata }) => {
  const [itemName, setItemName] = useState('')
  const [stockAmt, setStockAmt] = useState('')
  const [edit, setEdit] = useState(false);
  const [editItemId, setEditItemId] = useState(null)



  const AddItemHandler = () => {
    const newObj = { id: Date.now(), name: itemName, stock: stockAmt }
    setdata([...data, newObj])
    setItemName('')
    setStockAmt('')
    setEdit(false)
  }

  const EditItemHandler = (item) => {
    setItemName(item.name)
    setEdit(true)
    setEditItemId(item.id)




  }
  const updatedItemHandler = () => {
    setdata(data.map((item) => item.id === editItemId ? { ...item, name: itemName, stock: stockAmt } : { ...item }))
    setItemName('');
    setStockAmt('')
    setEdit(false)

  }

  const DeleteItemHandler = (id) => {
    setdata(data.filter((item) => item.id !== id))
  }




  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>CreateItem</Text>
      <TextInput
        placeholder='Enter Item name...'
        style={styles.input}
        value={itemName}
        onChangeText={(item) => setItemName(item)}
        placeholderTextColor={'black'}
      />
      <TextInput
        placeholder='Enter Stock Amt...'
        style={styles.input}
        value={stockAmt}
        onChangeText={(item) => setStockAmt(item)}
        placeholderTextColor={'black'}
      />
      <TouchableOpacity style={styles.button} onPress={() => edit ? updatedItemHandler() : AddItemHandler()}>
        <Text style={styles.btnText}>{edit ? "EDIT ITEM" : "ADD ITEM"}</Text>
      </TouchableOpacity>

      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headintext}>All Items</Text>

        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.stock < 20 ? '#e36c64' : '#7be07d' }]}>
              <Text style={styles.itemtext}>{item.name}</Text>

              <View style={{ flexDirection: 'row', gap: 25, alignItems: 'center' }}>
                <Text style={styles.itemtext}>{item.stock}</Text>
                <TouchableOpacity onPress={() => EditItemHandler(item)}>
                  <Feather name={'edit'} size={25} color={'#023047'}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => DeleteItemHandler(item.id)}>
                  <MaterialCommunityIcons name={'delete'} size={25} color={item.stock<20?"black":'#c1121f'} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}



        />
      </View>
    </View>
  )
}

export default CreateItem

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10
  },
  input: {
    borderWidth: 0.2,
    borderColor: 'black',
    paddingHorizontal: 10,
    borderRadius: 7,
    color: 'black'
  },
  button: {
    backgroundColor: "#b37ebd",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 7,

  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    // marginVertical: 4,
    borderRadius: 5,
    paddingVertical: 10


  },
  btnText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500'
  },
  itemtext: {
    color: 'black',
    fontWeight: '400',
    fontSize: 12,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginVertical: 10
  },
  headintext: {
    color: 'black',
    fontWeight: '500',
    fontSize: 14,

  },

})