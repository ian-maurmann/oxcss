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

    Ox.EventListener.deligateEvent('myapp', 'click', 'myapp.test-page', 'clickme', self.handle_clickme);
};

// Handle clickme
myapp_page.handle_clickme = function(element, event){
    self = myapp_page;

    alert('clickme');
};

// Realize
$(document).ready(function() {
    myapp_page.construct();
});
