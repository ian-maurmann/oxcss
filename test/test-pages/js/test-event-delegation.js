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

    Ox.EventListener.delegateEvent('myapp', 'click', 'myapp.test-page', 'clickme', self.handle_clickme);
    Ox.EventListener.delegate('[data-myapp-click-event="myapp.test-page >>> clickme-too"]', 'click', self.handle_clickme_too);
};

// Handle clickme
myapp_page.handle_clickme = function(element, event){
    self = myapp_page;

    alert('Click me!');
};

// Handle clickme-too
myapp_page.handle_clickme_too = function(element, event){
    self = myapp_page;

    alert('Click me too!');
};

// Realize
$(document).ready(function() {
    myapp_page.construct();
});
