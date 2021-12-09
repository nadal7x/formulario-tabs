export const editor = () => {
    let editors = document.querySelectorAll( '.editor' );
    window.editor =[];
    editors.forEach( function(element, index) {
        ClassicEditor
        .create( element, {
            toolbar: {
                items: [
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'outdent',
                    'indent',
                    '|',
                    'blockQuote',
                    'undo',
                    'redo'
                ]
            },
            language: 'es',
            licenseKey: '',
        } )
        .then( editor => {
            editor.push = element[index];
        } )
        .catch( error => {
            console.error( 'There was a problem initializing the editor.', error );
        } ); 
    });
 
}
