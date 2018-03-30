function Student(firstname, lastname, age) {

    this.firstname = firstname;
    this.lastname  = lastname;
    this.age       = age;
    this.fullcard  = null;

    this.generateStudentCard = function() {

        if (this.fullcard == null ) {
            var newDivCard         = document.createElement('div');
            var newTitle           = document.createElement('h1');

            newDivCard.id              = this.lastname + "_id_" + v;    
            newDivCard.className       = "div-block-card";    
            newTitle.innerText         = this.lastname + " " + this.firstname;
                    

            newDivCard.appendChild(newTitle);

            this.fullcard = newDivCard;
        } 

        return this.fullcard;
    }
}