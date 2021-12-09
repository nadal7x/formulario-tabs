export const editorArea = () => {
    window.ckeditors = [];

    document.querySelectorAll('.ckeditor').forEach(ckeditor => {

        ClassicEditor.create(ckeditor, {
            
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
        })
        .then( classicEditor => {
            ckeditors[ckeditor.name] = classicEditor;
        })
        .catch( error => {
            console.error(error);
        } );
    });

}

export const textData = () => {
    
    if( ckeditors != 'null'){
        document.querySelectorAll('textarea.ckeditor').forEach(element => {  
            document.querySelector('[name="'+element.name+'"]').value = ckeditors[element.name].getData();
        });
    }
}
