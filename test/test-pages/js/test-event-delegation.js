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

    Ox.EventListener.delegate('[data-myapp-click-event="myapp.test-page >>> clickme"]', 'click', self.handle_clickme);
};

// Handle clickme
myapp_page.handle_clickme = function(element, event){
    self = myapp_page;

    alert('Click me!');
};


// Realize
$(document).ready(function() {
    myapp_page.construct();
});
