$(function() {
    
  var config = {
    apiKey: "AIzaSyBbSJKpSy8AI_jQfwQlGL1agDNmaOf6AbQ",
    authDomain: "protests-2d81b.firebaseapp.com",
    databaseURL: "https://protests-2d81b.firebaseio.com",
    storageBucket: "protests-2d81b.appspot.com",
    messagingSenderId: "392531691793"
  };
  firebase.initializeApp(config);

  var dbReferenceProtests = firebase.database().ref().child('protests');

  console.log(dbReferenceProtests);


  $('.selectpicker').selectpicker({
    style: 'btn-info',
    size: 4
  });

  $('#finder').click(findProtest);
  $('#createProtest').submit(createProtest);

  // function findProtest() {
  //   //1. get values from selects
  //   var issue = $('#issueFinder').val();
  //   var neighborhood = $('#neighborhoodFinder').val();


  //   console.log('issue:', issue);
  //   console.log('neighborhood:', neighborhood);


    if (issue === null && neighborhood === null) {
      alert('Whoa there! Please select an issue and/or neighborhood.');
    } else if (issue[0] === "immigration" && neighborhood[0] === "financial district") {
      // console.log('City of Refuge');
      // publishResults('march 28: city of refuge');
    } else {
      console.log('issue:', issue);
      console.log('neighborhood:', neighborhood);
    }
  }
  // function publishResults() {
  // var message; 
  // $("#results").text(message)
}
  function createProtest(event) {
    event.preventDefault();

    var issue = $('#issue').val();
    console.log(issue);
    console.log('about to push')

      // create task and send it to firebase
    var newProtest = dbReferenceProtests.push();

    // capture neighborhoods selected
    // capture issues selected

    console.log('made it here');
    newProtest.set({
      name: "f trump",
      issue: {
        immigration: true,
        womensRights: true
      },
      neighborhoods: {
        bedstuy: true,
        upperEastSide: true,
        morningsideHeights: true
      }
    });

  }


    //1a. check if values have been entered

    //1b. console log

  
});