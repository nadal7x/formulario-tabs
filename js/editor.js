export const editorArea = () => {
    let editors = document.querySelector( '.editors' );
    window.editor = [];
    editors.forEach( element => {
        ClassicEditor
            .create( document.querySelector( element ), {
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
