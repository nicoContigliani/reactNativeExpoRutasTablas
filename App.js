import React, { Component } from 'react';
import { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function About() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About!</Text>
    </View>
  );
}

function Contact() {

  const array = [
    {
      key: '1',
      title: 'example title 1',
      subtitle: 'example subtitle 1',
    },
    {
      key: '2',
      title: 'example title 2',
      subtitle: 'example subtitle 2',
    },
    {
      key: '3',
      title: 'example title 3',
      subtitle: 'example subtitle 3',
    },
  ];


  const list = () => {
    const onPressLearnMore = () => {
      alert("si")
    }
    return array.map(element => {
      return (
        <View key={element.key} style={{ margin: 10 }}>
          <Text>{element.title}</Text>
          <Text>{element.subtitle}</Text>
          <Button
            onPress={onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      );
    });
  };



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {list()}

    </View>
  );
}


const CONTENT = {
  tableHead: ['Column 0/Row 0', 'Column 1', 'Column 2', 'Column 3'],
  tableTitle: ['Row', 'Row 2', 'Row 3', 'Row 4'],
  tableData: [
    ['1', '2', '3'],
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['a', 'b', 'c'],
  ],
};



function UserTable() {

  const onPressLearnMore = () => {
    alert("si")
  }


  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[1, 2, 1, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.tableTitle}
            style={styles.title}
            heightArr={[28, 28]}
            textStyle={styles.text}
          />

          <Rows
            onPress={onPressLearnMore}
            data={CONTENT.tableData}
            flexArr={[2, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />


        </TableWrapper>
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: 'orange' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#57FAFF' },
  row: { height: 28 },
  text: { textAlign: 'center' },
  tableData: {
    backgroundColor: '#FB3B15'
  }
});


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}









const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="UserTable" component={UserTable} />
        <Tab.Screen name="Contact" component={Contact} />

        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}