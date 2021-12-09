export const editor = () => {
    let editors = document.querySelectorAll( '.editor' );
    let editor = [];
    editors.forEach(element =>   
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
                editor.push = element;
            } )
            .catch( error => {
                console.error( 'There was a problem initializing the editor.', error );
            } );
    );
}
