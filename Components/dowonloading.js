import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { FileSystem } from "expo";
import { resolve } from "url";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAb9O8A8ryPXXq6qoCYke7LEZ5RvskEH00",
  authDomain: "testow-pr.firebaseapp.com",
  databaseURL: "https://testow-pr.firebaseio.com",
  projectId: "testow-pr",
  storageBucket: "testow-pr.appspot.com",
  messagingSenderId: "782612910252"
};

check_verision = () => {
  return new Promise((resolve, reject) => {
    const fireBase = firebase.initializeApp(config);
    fireBase
      .database()
      .ref()
      .on("value", snap => {
        req = {
          ver: snap.val().ver,
          uri: snap.val().uri
        };
        resolve(req);
      });
  });
};

dowonloading = urii => {
  return new Promise((resolve, reject) => {
    console.log("POBIERNIE");
    FileSystem.downloadAsync(
      urii,
      FileSystem.documentDirectory + "base.json"
    ).then(({ uri }) => {
      FileSystem.readAsStringAsync(uri).then(data => {
        console.log("POBRANO WERJE:", JSON.parse(data).version);
        resolve(data);
      });
    });
  });
};

export default down = () => {
  return new Promise((resolve, reject) => {
  check_verision().then(odpowiedz => {
    
      FileSystem.getInfoAsync(FileSystem.documentDirectory + "base.json").then(
        file => {
          if (file.exists) {
            console.log("ISTNIEJE", file.uri);
            FileSystem.readAsStringAsync(file.uri).then(data => {
              if (JSON.parse(data).version === `${odpowiedz.ver}`) {
                console.log(
                  "WERSJA ONLINE: ",
                  odpowiedz.ver,
                  "=",
                  JSON.parse(data).version
                );
                resolve(data);
              } else {
                console.log(
                  "WERSJA ONLINE: ",
                  odpowiedz.ver,
                  "!=",
                  JSON.parse(data).version
                );
                //resolve(dowonloading(odpowiedz.uri));
              }
            });
          } else {
            resolve(dowonloading(odpowiedz.uri));
          }
        }
      );
    });
  });
};

{
  /* <Button
    onPress={() => {
      console.log("TUTAJ",this.state.tekst);
    }}
    title="Learn More"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
  /> */
}
