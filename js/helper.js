'use strict';

var thumbnail = '<section class="thumbnail"></section>';
var animalName = '<h3>%data%</h3>';
var animalImage = '<img src="%data%" alt="%dataAlt%">';
var animalDetails = '<section class="animal-details"></section>';
var animalFact = '<p class="animal-fact">%data%</p>';
var animalAttr = `
<ul>
    <li><span class="animal-attr">Scientific Name</span>: %dataScientificName%</li>
    <li><span class="animal-attr">Average Length</span>: %dataAverageLength%</li>
    <li><span class="animal-attr">Average Lifespan</span>: %dataAverageLifeSpan%</li>
    <li><span class="animal-attr">Habitat</span>: %dataHabitat%</li>
</ul>
`;

var animalDescription = '<p>%data%</p>';