$(function () {

var protests = [
  {
    name: 'City of Refuge: 24 Hour Action for Refugees',
    neighborhood: 'financial district', 
    issue: 'immigration',
    date: 'march 28 (tuesday)',
    link: 'https://www.facebook.com/events/1899030313649428/',
    tags: ['financialDistrict', 'immigration']
  } , {
    name: 'Cesar Chavez RALLY for New York State Farmworker Rights',
    neighborhood: 'lower manhattan',
    issue: 'immigration', 
    date: 'march 30 (thursday)',
    link: 'https://www.facebook.com/events/1381782628547228/',
    tags: ['immigration', 'lowerManhattan']
  }, {
    name: 'ACT UP: 30th Anniversary March and Rally',
    neighborhood: 'greenwich village', 
    issue: 'health care',
    date: 'march 30 (thursday)',
    link: 'https://www.facebook.com/events/204115296734664/',
    tags: ['greenwichVillage', 'immigration']
  }, {
    name: 'Latino Rally',
    neighborhood: 'tribeca',
    issue: 'immigration',
    date: 'march 31 (friday)',
    link: 'https://www.facebook.com/events/182226108930804',
    tags: ['tribeca', 'immigration']
  }, {
    name: 'Manhattan Pro-Choice Counterprotest',
    neighborhood: 'bowery',
    issue: 'women`s rights',
    date: 'april 1 (saturday)',
    link: 'https://www.facebook.com/events/188975311598015/',
    tags: ['womensRights', 'bowery']
  },
  {
    name: 'March for Health',
    neighborhood: 'midtown east',
    issue: 'healthcare',
    date: 'april 1 (saturday)',
    link: 'https://www.facebook.com/events/1586535964751336',
    tags: ['healthCare', 'midtownEast']
  }
]

$('#finder').click(displayCards);


//console log each item in array

function displayCards() {
  protests.forEach(function(item, index) {
    // console.log(protests[index].name);
    // console.log(protests[index].neighborhood);
    // console.log(protests[index].issue);
    // console.log(protests[index].date);
   // var currentHeader = $('.header')[index];
   var currentDate = protests[index].date;
   var currentName = protests[index].name;
   var currentLink = protests[index].link;
   var currentNeighborhood = protests[index].neighborhood;
   var currentIssue = protests[index].issue;

   var chosenIssue = '.' + ($('#issueFinder').val());
   var chosenNeighborhood = '.' + ($('#neighborhoodFinder').val());

   console.log(chosenIssue);
   console.log(chosenNeighborhood);

   if (chosenIssue === '.' && chosenNeighborhood === '.') {
      alert('Whoa there! Please select an issue and/or neighborhood.');
      $('.card').hide();
    }

   
   var currentTagArray = protests[index].tags;
   var currentTags = '';
   console.log('currentTagArray: ', currentTagArray);

   if (currentTagArray !== undefined) {
        currentTagArray.forEach(function (item, index) {
          currentTags = currentTags + ' ' + item;
          // Here we see our string as it is bening made.
          console.log('pass #' + (index + 1) + 'of our concatination: ', currentTags);
          if (item === chosenIssue && item === chosenNeighborhood) {

          }
        });
      }

  console.log('here is our big string for protest #' + (index + 1) + ': ', currentTags);

   var card = `
      <div class="ui raised card ${currentTags}">
        <div class="content">
          <div class="header">${currentName}</div>
          <div class="meta">
            <span class="date">${currentDate}</span>
            <a href="${currentLink}" target="_blank">more info</a>
          </div>
          <div class="description">
            <p></p>
          </div>
        </div>
      </div>
`;

   $('#results').append(card);

   $('.card').not(chosenIssue).hide();
   $('.card').not(chosenNeighborhood).hide();

  });
}


});