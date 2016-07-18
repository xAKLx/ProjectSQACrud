function createMail(from, to, subject) {
	var self = this;

	self.from = ko.observable(from);
	self.to = ko.observable(to);
	self.subject = ko.observable(subject);
	self.body = ko.observable();
}

var Model = function AppViewModel() {

	var self = this;

    self.mails = ko.observableArray();
    self.selectedMail = ko.observable(null);

    self.addEmptyMail = function(mail){
    	var newMail = new createMail("","","");
    	self.mails.push( newMail);
    };

    self.goToMail = function(mail) { 
        self.selectedMail(mail);
    };

    self.mails.push( new createMail("Angel","Angel2","klk"));
    self.addEmptyMail();

       	
};