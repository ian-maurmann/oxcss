// Check if Ox object exists
if( typeof Ox === 'undefined' || Ox === null || Ox === false){
    var Ox = {};
}

// Check if Ox Event Listener exists
if( typeof Ox.EventListener === 'undefined' || Ox.EventListener === null || Ox.EventListener === false){
    Ox.EventListener = {};
}

Ox.EventListener.deligateEvent = function(application_name, event_type_name, section_name, activity_name, handler){
    let deligatable     = {};
    let attribute_name  = 'data-' + String(application_name) + '-' + String(event_type_name) + '-event';
    let attribute_value = String(section_name) + ' >>> ' + String(activity_name);
    let selector        = '[' + String(attribute_name) + '="' + String(attribute_value) + '"]';

    deligatable[event_type_name] = function(event){
        var element = $(event.target);
        handler(element, event);
    };

    // Deligate event
    $(document).on(deligatable, selector );
}
