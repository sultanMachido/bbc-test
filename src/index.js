import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DisplayPage from './DisplayPage/DisplayPage';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import english from "./Language/english.json";
import hindi from "./Language/hindi.json";
import { initReactI18next } from "react-i18next";
import './i18n';


// console.log(english)
// i18next
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources: {
//       en:english,
//       hi:hindi
//   },
//     lng: "en",

//     keySeparator: false, // we do not use keys in form messages.welcome

//     interpolation: {
//       escapeValue: false // react already safes from xss
//     }
//   });
// i18next.init({
//     interpolation: { escapeValue: false },  // React already does escaping
//     lng: 'en',                              // default language to use
//     resources: {
//         en:english,
//         hi:hindi
//     },
// });

ReactDOM.render(
  <React.StrictMode>
     <I18nextProvider i18n={i18next}>
         <DisplayPage />
     </I18nextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
