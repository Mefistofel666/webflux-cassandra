import http from 'k6/http';
import {check, sleep} from 'k6';

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export default function() {
  const url = 'http://127.0.0.1:8080/api/product';
  const data = {id: Math.random(), title: makeid(6)};
  const payload = JSON.stringify(data);
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  let response = http.post(url, payload, params);
  check(response, {
    'check status code': (r) => r.status == 201
  });
  sleep(1);
}