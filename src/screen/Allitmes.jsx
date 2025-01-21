import { FlatList, StyleSheet, Text, View, } from 'react-native'
import React from 'react'

const Allitmes = ({ data }) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headintext}>Items</Text>
        <Text style={styles.headintext}>Quantity</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.stock < 20 ? '#e36c64' : '#7be07d' }]}>
            <Text style={styles.itemtext}>{item.name}</Text>
            <Text style={styles.itemtext}>{item.stock}</Text>
          </View>
        )}
        contentContainerStyle={{ gap: 10 }}



      />
    </View>
  )
}

export default Allitmes

const styles = StyleSheet.create({
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    // marginVertical: 4,
    borderRadius: 5,
    paddingVertical: 10


  },
  itemtext: {
    color: 'black',
    fontWeight: '400',
    fontSize: 12,
  },

})