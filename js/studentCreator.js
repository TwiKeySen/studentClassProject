var tableOfStudent = [];

tableOfStudent[0] =  new Student("Thomas", "Gonzalez", 21);
tableOfStudent[1] =  new Student("So", "Chez", 25);
tableOfStudent[2] =  new Student("Bob", "Dylan", 26);
tableOfStudent[3] =  new Student("Bob", "Marley", 32);
tableOfStudent[4] =  new Student("Shwarzy", "Zoo", 24);
tableOfStudent[5] =  new Student("Ju", "Dozz", 31);
tableOfStudent[6] =  new Student("Kenji", "Makzz", 29);
tableOfStudent[7] =  new Student("Sam", "Mike", 23);
tableOfStudent[8] =  new Student("Solen", "Ozz", 25);
tableOfStudent[9] =  new Student("Jacq", "Maa", 27);

for (var v in tableOfStudent) {
    
    document.body.appendChild(tableOfStudent[v].generateStudentCard());    

}
