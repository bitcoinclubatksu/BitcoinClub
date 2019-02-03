#!/usr/bin/env node
'use strict';
const request = require('request-promise');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let cookieJar = request.jar();

async function extract() {
  const extractOptions = {
    method: 'GET',
    uri: 'https://cas.kennesaw.edu/cas/login?service=https://federation.campuslabs.com/auth/signin/',
    headers: {
      connection: 'Keep-Alive'
    }
  };
  try {
    const data = await request(extractOptions);
    if (!data) {
      throw new Error('no data recieved');
    }
    const dom = new JSDOM(data);
    const btnObj = dom.window.document.getElementsByClassName("row btn-row")[0].children;
    const formValues = Object.values(btnObj).reduce((result, item) => {
      result[item.name] = item.value;
      return result; 
    }, {});
    return formValues;
  } catch (e) {
    throw new Error(e.message);
  }
}

async function login() {
  
  try {
    const formValues = await extract();
    const formData = {
      username: 'hjoshi2',
      password: 'pwd',
      lt: formValues.lt,
      execution: formValues.execution,
      _eventId: formValues._eventId,
      submit: formValues.submit
    };
    const options = {
      method: 'POST',
      uri: 'https://cas.kennesaw.edu/cas/login?service=https://federation.campuslabs.com/auth/signin/',
      formData: formData,
      headers: {
        connection: 'Keep-Alive'
      },
      json: true
    };
    const data = await request(options);
    return data;
  } catch(e) {
    throw new Error(e.message);
  }
}

async function fetchMembers() {

  try {
    await login();
    const fetchOptions = {
      method: 'GET',
      uri: 'https://owllife.kennesaw.edu/actioncenter/organization/bitcoinclub/roster/roster/officers?_=1539108612236',
      headers: {
        connection: 'Keep-Alive'
      },
      jar: cookieJar,
      // resolvewithFullRespone: true,
      json: true
    };
    const members = await request(fetchOptions);
    console.log(cookieJar);
    return members;
  } catch (e) {
    throw new Error(e.message);
  }
}

login()
  .then(res => console.log(res))
  .catch(err => console.error(err));

/*

request Url: https://owllife.kennesaw.edu/actioncenter/organization/bitcoinclub/roster/roster/officers?_=1539108612236
request method: GET





*/


//('https://owllife.kennesaw.edu/actioncenter/organization/bitcoinclub/roster');






