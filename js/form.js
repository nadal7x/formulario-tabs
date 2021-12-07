import {getFingerprint} from './fingerprint.js';
import {getCpu} from './fingerprint.js';
import {getOs} from './fingerprint.js';
import {getUserAgent} from './fingerprint.js';
getFingerprint();
getCpu();
getOs();
getUserAgent();

export  const submitForm = () => { 
    const sendButton = document.querySelector(".crud__store-button");
    const myForm = document.querySelector("#crud__user-form");


    sendButton.addEventListener('click', (event) => {

        event.preventDefault();

        var formData = new FormData(myForm);

        // Display the key/value pairs
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        console.log( 'fingerprint, ' + fingerprint );
        console.log( 'CPU, ' + CPU );
        console.log( 'OS, ' + OS );
        console.log( 'user Agent, ' + userAgent );
    
    });
}