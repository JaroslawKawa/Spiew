import React, { Component } from "react";
import firebase from "firebase";

var config = {
    apiKey: "AIzaSyDagKE6ae9V9Hau3AzPf8HtG7CaA_uymzY",
    authDomain: "test-fa2f6.firebaseapp.com",
    databaseURL: "https://test-fa2f6.firebaseio.com",
    projectId: "test-fa2f6",
    storageBucket: "test-fa2f6.appspot.com",
    messagingSenderId: "278727750903"
};
firebase.initializeApp(config);


firebase.database().ref('songs/1').set(
    {
        id: 1,
        title: 'Byla mene maty',
        alternative_title: 'била мене мати',
        text: 'Била мене мати2\n' +
            'Березовим прутом,\n' +
            'Щоби я не стояла\n' +
            'З молодим рекрутом.\n' +
            'Щоби я не стояла\n' +
            'З молодим рекрутом.\n' +
            '\n' +
            'А я соби стояла,\n' +
            'Аж кури запили.\n' +
            'На двері воду лляла,\n' +
            'Щоби не скрипіли.\n' +
            'На двері воду лляла,\n' +
            'Щоби не скрипіли.\n' +
            'На двері воду лляла,\n' +
            'На пальцях ходила,\n' +
            'Щоб мати не почула,\n' +
            'Щоби не сварила.\n' +
            'Щоб мати не почула,\n' +
            'Щоби не сварила.\n' +
            '\n' +
            'А мати не спала,\n' +
            'Та все чисто чула.\n' +
            'Та й мене не сварила,\n' +
            'Сама такою була.\n' +
            'Та й мене не сварила,\n' +
            'Сама такою була.\n' +
            '\n' +
            'Била мене мати\n' +
            'Березовим прутом,\n' +
            'Щоби я не стояла\n' +
            'З молодим рекрутом.\n' +
            'Щоби я не стояла\n' +
            'З молодим рекрутом.',
        version: 1,
        time_stamp: new Date().toLocaleString(),
        tags: ['debilna', 'fiut'],
        authors: null,
        change_notes: null
    }
).then(() => {
    console.log('INSERTED !');
}).catch((error) => {
    console.log(error);
});

firebase.database().ref('songs/2').set(
    {
        id: 2,
        title: 'Byla mene maty2',
        alternative_title: 'била мене мати2',
        text: 'Била мене мати2\n' +
            'Березовим прутом,\n' +
            'Щоби я не стояла\n' +
            'З молодим рекрутом.\n' +
            'Щоби я не стояла\n' +
            'З молодим рекрутом.\n' +
            '\n' +
            'А я соби стояла,\n' +
            'Аж кури запили.\n' +
            'На двері воду лляла,\n' +
            'Щоби не скрипіли.\n' +
            'На двері воду лляла,\n' +
            'Щоби не скрипіли.\n' +
            'На двері воду лляла,\n' +
            'На пальцях ходила,\n' +
            'Щоб мати не почула,\n' +
            'Щоби не сварила.\n' +
            'Щоб мати не почула,\n' +
            'Щоби не сварила.\n' +
            '\n' +
            'А мати не спала,\n' +
            'Та все чисто чула.\n' +
            'Та й мене не сварила,\n' +
            'Сама такою була.\n' +
            'Та й мене не сварила,\n' +
            'Сама такою була.\n' +
            '\n' +
            'Била мене мати\n' +
            'Березовим прутом,\n' +
            'Щоби я не стояла\n' +
            'З молодим рекрутом.\n' +
            'Щоби я не стояла\n' +
            'З молодим рекрутом.',
        version: 1,
        time_stamp: new Date().toLocaleString(),
        tags: ['debilna', 'fiut'],
        authors: null,
        change_notes: null
    }
).then(() => {
    console.log('INSERTED !');
}).catch((error) => {
    console.log(error);
});
