/*
var methodResponseEditor = ace.edit('method-response-editor');

(function CreateResources() {
    methodResponseEditor.getSession().setMode('ace/mode/json');

    $('#url_path').focus();
    $('#define-in-json').popover({'trigger': 'hover', 'html': true});
    $('#jsonrpc').popover({'trigger': 'hover', 'html': true,
                           'delay': {'show': 0, 'hide': 2000}});

    $('#rpc-form').submit(function(event) {

        console.log(editor.getText());

        if (!methodResponseEditor.getValue()) {
            alert("ahah Method response can't be empty.");
            event.preventDefault();
            return;
        }

        $('#method_response').val(methodResponseEditor.getValue());
    });

    $('.protocol').click(function() {
        $('form').addClass('hidden');
        $('#'+$(this).val()+'-form').removeClass('hidden');
    });
})();
*/
