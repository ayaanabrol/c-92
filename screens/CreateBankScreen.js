import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';

import firebase from 'firebase';
import db from '../config';


export default class CreateBankScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bankName: '',
      accountNo: '',
      bankCode: '',
    };
  }

  submitDetails = () => {
    console.log('21', this.state);
    db.collection('details').add({
      bankName: this.state.bankName,
      accountNo: this.state.accountNo,
      bankCode: this.state.bankCode,
      date: firebase.firestore.Timestamp.now().toDate(),
    });
    this.setState({
      bankName: '',
      accountNo: '',
      bankCode: '',
    });
    // ToastAndroid.show('Your details have been stored'
    // , ToastAndroid.SHORT)
    alert('Your details have been stored');
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Header
          backgroundColor={'rgb(32, 137, 220)'}
          centerComponent={{
            text: 'BankDetails',
            style: { color: 'white', fontSize: 30 },
          }}
        />
         
        <TextInput
          placeholder="BankName"
          onChangeText={(text) => {
            this.setState({
              bankName: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.bankName}
          style={styles.bankName}
        />
      
        <TextInput
          placeholder="AccountNo"
          onChangeText={(text) => {
            this.setState({
              accountNo: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.accountNo}
          style={styles.accountNo}
        />
        <TextInput
          placeholder="BankCode"
          onChangeText={(text) => {
            this.setState({
              bankCode: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.bankCode}
          style={styles.bankCode}
          multiline={true}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitDetails}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundGradient: "horizontal",
    backgroundGradientTop: "white",
    backgroundGradientBottom: "black"
   
  },
  bankName: {
    height: 40,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
    color: 'black',
    padding: 6,
  },
  accountNo: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  bankCode: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  submitButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgb(32, 137, 220)',
    width: 80,
    height: 40,
    color: 'rgb(32, 137, 220)',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    color: 'white'
  },
});
