import React,{Component} from 'react';
import {View, Text} from 'react-native';
import {Header,Button,Spinner} from './component/common';
import firebase from 'firebase'
import LoginForm from './component/LoginForm'
import {  } from './component/common/Spinner';

class App extends Component{
    state= {loggedIn:null};

    componentWillMount(){
        debugger;
        firebase.initializeApp({
            apiKey: 'AIzaSyBFhPxWbLI2L0KwOPfwNKoIYX3-1ewKm2E',
            authDomain: 'authentication111.firebaseapp.com',
            databaseURL: 'https://authentication111.firebaseio.com',
            projectId: 'authentication111',
            storageBucket: '',
            messagingSenderId: '553977789240',
            appId: '1:553977789240:web:0995edb48a2435c7'
        });

        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                this.setState({loggedIn:true});
            }else{
                this.setState({loggedIn:false});
            }
        });  
    }
   renderContent(){
       switch(this.state.loggedIn){
           case true:
               return (
                   <Button onPress={()=> firebase.auth().signOut()}>Log Out</Button>
               );
           case false:
               return <LoginForm/>
           default:
                return <Spinner size="large"/>
       }
   }
    render(){
        return (
            <View>
                <Header headerText="Authentication"></Header>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;