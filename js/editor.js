export const editorArea = () => {
    let editors = document.querySelector( '.editors' );
    window.editor = [];
    editors.forEach( function(element, index) {
        ClassicEditor
            .create( document.querySelector( '#editor' + index ), {
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
            .then( newEditor => {
                window.editor.push(newEditor);
            } )
            .catch( error => {
                console.error( 'There was a problem initializing the editor.', error );
            } );
    });
}
