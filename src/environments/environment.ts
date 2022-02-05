// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';


export const environment = {
  firebase: {
    projectId: 'remedes-ancestraux',
    appId: '1:73585650502:web:5e454e42e44fb1bb87d347',
    storageBucket: 'remedes-ancestraux.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyDW-Nm2wQznLHTPEbwsaWwco8ANdCuftfg',
    authDomain: 'remedes-ancestraux.firebaseapp.com',
    messagingSenderId: '73585650502',
    measurementId: 'G-HL3QDCQCH8',
  },
  production: false
};

const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
