// Object
myapp_page = {};

// Construct
myapp_page.construct = function(){
    self = myapp_page;

    // Add Events
    myapp_page.addEvents();
};

// Add Events
myapp_page.addEvents = function(){
    self = myapp_page;

    Ox.Event.delegate('[data-myapp-click-event="myapp.test-page >>> toggle"]', 'click', self.handle_toggle);
};

// Handle clickme
myapp_page.handle_toggle = function(element, event){
    self = myapp_page;

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


// Realize
$(document).ready(function() {
    myapp_page.construct();
});
