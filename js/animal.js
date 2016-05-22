"use strict";

var animals = {

    "animals": [{
        "name": "Clownfish",
        "img": "img/clownfish.jpg",
        "alt": "clownfish",
        "fact": "A layer of mucus on the clownfish's skin makes it immune to the fish-eating anemone's lethal sting.",
        "scientificName": "Amphiprioninae",
        "averageLength": "11 centimeters",
        "averageLifespan": "7 years",
        "habitat": "Tropical coral reefs",
        "description": "Bright orange with three distinctive white bars, clown anemonefish are among the most recognizable of all reef-dwellers. They reach about 11 centimeters in length, and are named for the multicolored sea anemone in which they make their homes."
    },{
        "name": "Bull Shark",
        "img": "img/bull-shark.jpg",
        "alt": "Bull Shark",
        "fact": " Bull sharks have a fondness for freshwater. They’ve been spotted in bays, lagoons and even rivers, sometimes thousands of miles inland",
        "scientificName": "Carcharhinus leucas",
        "averageLength": " 2.1 to 3.4 m",
        "averageLifespan": "16 years",
        "habitat": "Warm oceans",
        "description": "Bull sharks are aggressive, common, and usually live near high-population areas like tropical shorelines. They are not bothered by brackish and freshwater, and even venture far inland via rivers and tributaries."
        
    }]
}

$(function () {
    
  var animalScript = $("#animal-template").html();
  var animalTemplate = Handlebars.compile(animalScript);
  var context = animals;
  var compliedAnimalTemplate = animalTemplate(context);

  $('.animals').html(compliedAnimalTemplate);
});
