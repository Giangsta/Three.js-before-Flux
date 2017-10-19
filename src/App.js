import React, { Component } from 'react';
import './App.css';
import * as THREE from 'three';
import Button from './Button';
import * as helpers from './util/helpers.js';
import Dropdown from './Dropdown';

const config = {
    url: window.location.href,
    flux_url: 'https://flux.io', //flux url
    flux_client_id: 'b99a9013-2742-...' // yout app's client id
}