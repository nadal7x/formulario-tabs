export const editor = () => {
 ClassicEditor
	.create( document.querySelector( '.editor' ), {
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
		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
    } );
}
