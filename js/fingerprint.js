import ClientJS from '../node_modules/clientjs/src/client.js';
const client = new ClientJS();

export const getFingerprint = () => {  

    var fingerprint = client.getFingerprint();
    return fingerprint

}
export const getCpu = () => { 

    var CPU = client.getCPU();
    return CPU;

}
export const getOs = () => { 

    var OS = client.getOS();
    return OS;

}
export const getUserAgent = () => { 

    var userAgent = client.getUserAgent();
    return userAgent;
    
    
}
