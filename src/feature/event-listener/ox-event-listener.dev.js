// Check if Ox object exists
if( typeof Ox === 'undefined' || Ox === null || Ox === false){
    var Ox = {};
}



// Check if Ox Event Listener exists
if( typeof Ox.EventListener === 'undefined' || Ox.EventListener === null || Ox.EventListener === false){
    Ox.EventListener = {};
}



/**
 * Delegate a UI Event
 * @author Ian Maurmann
 * @param {string} selector - jQuery selector of the HTML element that will be clicked/dragger/hovered, etc.
 * @param {string} event_type_name - The event type, i.e. "click".
 * @param {Ox.EventListener~methodDelegateParamHandlerCallback} handler - Function that will be called when the event happens.
 */
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
/**
 * Function that will be called when the event happens.
 * @callback Ox.EventListener~methodDelegateParamHandlerCallback
 * @param {object} element - jQuery element object
 * @param {event} event - Event that was triggered
 */
