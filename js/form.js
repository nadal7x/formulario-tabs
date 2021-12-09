import * as AllFingerprint from './collector.js';

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

        console.log( 'fingerprint, ' + AllFingerprint.getFingerprint());
        console.log( 'CPU, ' + AllFingerprint.getCpu());
        console.log( 'OS, ' + AllFingerprint.getOs);
        console.log( 'user Agent, ' + AllFingerprint.getUserAgent());
        console.log( 'Comentario, ' + editor.getData());
    
    });
}