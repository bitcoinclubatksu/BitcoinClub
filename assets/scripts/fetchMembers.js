#!/usr/bin/env node
'use strict';
const request = require('request-promise');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function extract() {
  const options = {
    method: 'GET',
    uri: 'https://cas.kennesaw.edu/cas/login?service=https://federation.campuslabs.com/auth/signin/',
    headers: {
      connection: 'Keep-Alive'
    },
    json: true
  };
  try {
    const data = await request(options);
    if (!data) {
      throw new Error('no data recieved');
    }

    const dom = new JSDOM(data);
    // console.log(dom.window.document.getElementsByClassName("row btn-row")[0].children);

    // console.log(dom.window.document.getElementsByClassName("row btn-row")[0].children[0].value);
    // console.log(dom.window.document.getElementsByClassName("row btn-row")[0].children[0].name);
    // console.log(dom.window.document.getElementsByClassName("row btn-row")[0].children[1].value);
    // console.log(dom.window.document.getElementsByClassName("row btn-row")[0].children[1].name);
    // console.log(dom.window.document.getElementsByClassName("row btn-row")[0].children[2].value);
    // console.log(dom.window.document.getElementsByClassName("row btn-row")[0].children[2].name);


    const test = dom.window.document.getElementsByClassName("row btn-row")[0].children;
    const formValues = Object.values(test).reduce((result, item) => {
      result[item.name] = item.value;
      return result; 
    }, {});

    // return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

async function fetchMembers() {

  const formData = {
    username: 'hjoshi2',
    password: 'pwd',
    submit: ',',
    execution: '',
    // lt,
    // _eventId
  }
  
  return await extract();
}

fetchMembers()
  .then(res => console.log(res))
  .catch(err => console.error(err));

/*

request Url: https://owllife.kennesaw.edu/actioncenter/organization/bitcoinclub/roster/roster/officers?_=1539108612236
request method: GET





*/


//('https://owllife.kennesaw.edu/actioncenter/organization/bitcoinclub/roster');






