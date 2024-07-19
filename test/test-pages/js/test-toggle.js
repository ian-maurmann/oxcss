// Object
myapp_page = {};

// Construct
myapp_page.construct = function(){
    let this_object = myapp_page;

    // Add Events
    this_object.addEvents();
};

// Add Events
myapp_page.addEvents = function(){
    let this_object = myapp_page;

    Ox.Event.delegate('[data-myapp-click-event="myapp.test-page >>> toggle"]', 'click', this_object.handle_toggle);
    Ox.Event.delegate('[data-myapp-click-event="myapp.test-page >>> swoggle"]', 'click', this_object.handle_swoggle);
};

// Handle clickme
myapp_page.handle_toggle = function(element, event){
    let this_object  = myapp_page;
    let toggle       = $(element).closest('[data-ox-form-role="toggle-switch"]').first();
    let toggle_value = toggle.attr('data-is-toggled');
    let is_toggled   = toggle_value === 'yes';

    if(is_toggled){
        toggle.attr('data-is-toggled','no');
    }
    else{
        toggle.attr('data-is-toggled','yes');
    }
};

myapp_page.handle_swoggle = function(element, event){
    let this_object       = myapp_page;
    let swoggle           = $(element).closest('[data-ox-form-role="swoggle-switch"]').first();
    let swoggle_index     = parseInt( swoggle.attr('data-swoggle-option-index') );
    let has_swoggle_index = !(Number.isNaN(swoggle_index));
    let swoggle_count     = parseInt( swoggle.attr('data-swoggle-option-count') );

    // If no index is set yet, we're on the first option
    if(!has_swoggle_index){
        swoggle_index = 0;
    }

    // Get the next option
    let new_swoggle_index = swoggle_index + 1;
    if(new_swoggle_index >= swoggle_count){
        new_swoggle_index = 0;
    }

    // Update swoggle to the next option
    swoggle.attr('data-swoggle-option-index', String(new_swoggle_index))
};


// Realize
$(document).ready(function() {
    myapp_page.construct();
});
