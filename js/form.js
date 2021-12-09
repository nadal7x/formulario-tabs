import * as AllFingerprint from './collector.js';
import {textData} from './editor.js';

export  const submitForm = () => { 
    const sendButton = document.querySelector(".crud__store-button");
    const myForm = document.querySelector("#crud__user-form");

    
    sendButton.addEventListener('click', (event) => {
        event.preventDefault();
        textData();
        var formData = new FormData(myForm);
        formData.append('fingerprint', AllFingerprint.getFingerprint());
        // Display the key/value pairs
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
    });
}