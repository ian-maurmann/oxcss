// Check if Ox object exists
if( typeof Ox === 'undefined' || Ox === null || Ox === false){
    var Ox = {};
}

// Check if Ox Event Listener exists
if( typeof Ox.EventListener === 'undefined' || Ox.EventListener === null || Ox.EventListener === false){
    Ox.EventListener = {};
}


// Delegate Event
Ox.EventListener.delegate = function(selector, event_type_name, handler){
    // Start delegatable as an empty object
    let delegatable = {};

    // Add property for handling the given event type using the given handler
    delegatable[event_type_name] = function(event){
        var element = $(event.target);
        handler(element, event);
    };

    // Listen for event to happen on given selector
    $(document).on(delegatable, selector );
}
