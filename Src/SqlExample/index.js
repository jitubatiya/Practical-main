import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput, Dimensions, Alert } from 'react-native';
import  { openDatabase } from 'react-native-sqlite-storage';
//var db = openDatabase('Atm.db')
var db = openDatabase("Atm.db", "1.0", "Test Database", 200000, openCB, errorCB);

function errorCB(err) {
    console.log("SQL Error: " + err);
}

function openCB() {
    console.log("Database OPENED");
}
const { height, width } = Dimensions.get("window")

const SqlExample = (props) => {

    const [amount, setAmount] = useState("")
    const [n_2000, setN2000] = useState(0)
    const [n_500, setN500] = useState(0)
    const [n_200, setN200] = useState(0)
    const [n_50, setN50] = useState(0)
    const [n_20, setN20] = useState(0)
    const [remaind_value, setRemindValue] = useState(0)

    useEffect(() => {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='atm_table'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS atm_table', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS atm_table(trans_id INTEGER PRIMARY KEY AUTOINCREMENT,user_name VARCHAR(20),note_2000 INT(10),note_500 INT(10),note_200 INT(10),note_50  INT(10),note_20  INT(10),other_amt INT(10),total_amt  INT(10))',
                            []
                        );
                    }
                }
            );
        });
    }, []);
    const onChangeText = (text) => {
        setAmount(text)
    }
    const calculteAmount = () => {
        setN2000(Math.trunc(amount / 2000));
        var remind_value = amount % 2000
        setN500(Math.trunc(remind_value / 500));
        remind_value = remind_value % 500
        setN200(Math.trunc(remind_value / 200));
        remind_value = remind_value % 200
        setN50(Math.trunc(remind_value / 50));
        remind_value = remind_value % 50
        setN20(Math.trunc(remind_value / 20));
        remind_value = remind_value % 20
        setRemindValue(remind_value)
        addDataSqlDatabase()

    }
   function  Demo(){

   }
    const addDataSqlDatabase = () => {
        try {
            db.transaction(function (tx) {
                tx.executeSql(
                    'INSERT INTO atm_table (user_name, note_2000, note_500,note_200,note_50,note_20,other_amt,total_amt) VALUES (?,?,?,?,?,?,?,?)',
                    ["jitu", n_2000, n_500, n_200, n_50, n_20, remaind_value, amount],
                    (tx, results) => {
                        console.log('Results', results.rowsAffected);
                        if (results.rowsAffected > 0) {
                            Alert.alert(
                                'Success',
                                'You are Registered Successfully',
                                [
                                    {
                                        text: 'Ok',
                                        onPress: () => { },
                                    },
                                ],
                                { cancelable: false }
                            );
                        } else alert('Registration Failed');
                    }
                );
            });
        } catch (error) {
            console.log(",dfg", error)
        }
    }
    const displayData = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM atm_table',
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    console.log(temp)
                }
            );
        });
    }
    return (
        <View style={{ flex: 1, backgroundColor: "black", alignItems: "center", justifyContent: "center", paddingHorizontal: 20 }}>
            <Text>ATM System</Text>
            <TextInput
                onChangeText={onChangeText}
                value={amount}
                keyboardType={"numeric"}
                style={{ height: 50, width: width, borderWidth: 1, borderColor: "white",color:"white" }}
            />
            <TouchableOpacity
                onPress={() => calculteAmount()}
                style={{ height: 50, width: 200, backgroundColor: "blue", borderRadius: 10, marginTop: 50, alignItems: "center", justifyContent: "center" }}
            >
                <Text>Count</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => displayData()}
                style={{ height: 50, width: 200, backgroundColor: "blue", borderRadius: 10, marginTop: 10, alignItems: "center", justifyContent: "center" }}
            >
                <Text>Display Data</Text>
            </TouchableOpacity>

            {n_2000 != 0 && <Text style={{color:"white"}}>{"2000 * " + n_2000 + " = " + 2000 * n_2000}</Text>}
            {n_500 != 0 && <Text style={{color:"white"}}>{"500 * " + n_500 + "   = " + 500 * n_500}</Text>}
            {n_200 != 0 && <Text style={{color:"white"}}>{"200 * " + n_200 + "   = " + 200 * n_200}</Text>}
            {n_50 != 0 && <Text style={{color:"white"}}>{"50 * " + n_50 + "     = " + 50 * n_50}</Text>}
            {n_20 != 0 && <Text style={{color:"white"}}>{"20 * " + n_20 + "     = " + 20 * n_20}</Text>}
            {remaind_value != 0 && <Text style={{color:"white"}}>{"other   =" + remaind_value}</Text>}
            {((n_2000 * 2000) + (n_500 * 500) + (n_200 * 200) + (n_50 * 50) + (n_20 * 20)) != 0 && <Text style={{color:"white"}}>{"---------------------------"}</Text>}
            <Text style={{color:"white"}}>{"                   " + amount}</Text>

        </View>
    )
}
export default SqlExample;