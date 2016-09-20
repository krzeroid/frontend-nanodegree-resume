//$ <-- jquery selector!!


// appending, using JS code -------->


//$("#main").append("Kristoffer");

//.append - end of HTML, .prepend - beginning of HTML

//var firstName = "James";

//var age = 32;

//console.log(firstName);

//var awesomeThoughts = "I am Kris and I am AWESOME!";

//console.log(awesomeThoughts);


// replacing strings -------->

//[string].replace([old],[new])
  //ex: var email = "cameron@udacity.com";
    // var newEmail = email.replace("udacity", "gmail");

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//console.log(funThoughts);

//$("#main").append(funThoughts);


// formatting -------->


var name = "Kristoffer Parrish";

var role = "front-end developer";

var formattedName = HTMLheaderName.replace("%data%",name);

var formattedRole = HTMLheaderRole.replace("%data%",role);

//$("#header").prepend(formattedName, formattedRole);


// arrays -------->


//var myArray = [item1, item2];

//var skills = ["awesomeness", "teaching", "programming", "JS"];

//$("#main") = append(skills);

//choosing ONE item within list

//$("#main") = append(skills[0]); <--- first line item starts with the 'zeroith' item

//var myArray = ["I am guy", "I am learn", "I am kinda tired"];

//console.log(myArray.length);



// object declaration -------->


var bio = {
    "name" : "Kristoffer Parrish",
    "role" : "web developer",
    "contact" : { // <-- a list of contacts has it's own objects, note curly brackets
        "mobile" : "555-666-7777",
        "email" : "kparrish@gmail.com",
        "github" : "krzeroid",
        "location" : "California",
    }, // <-- end of contact objects
    "welcomeMessage" : "Hey thar!",
    "skills" : [ // <-- skills has a list but note the brackets, this is an array
        "awesomeness", "teaching", "programming", "JS"
    ],
    "bioPic" : "images/fry.jpg" // <-- note the lack of a comma at the end
};

//with JS, everything is an object!!!!!!! There are no divs or classes!


// dot notation, declare an object then add new properties -------->

//var bio {
//    "name" : "Kristoffer Parrish",
//    "age" : "27",
//    "skills" : skills
//};

//$("#main").append(bio.name);

//bio.city = "Mountain View"; <-- this is using dot notation to add to the bio above
//bio.email = "krisp@gmail.com";

//$("#main").append(bio.city);

//because dot notation is adding to an object, there's no need for var


var work = {};
work.position = "Front-End Developer";
work.employer = "N/A";
work.years = "0";
work.location = "Mountain View";

// bracket notation -------->


var education = {};
education["name"]="Mission College";
education["years"]="2";
education["city"]="Santa Clara, CA";

//$("#main").append(work["position"]);
//$("#main").append(education.name);

// object in JS object literal notation, or JSON -------->

var education = [{// <--- multiple objects inside curly braces needs to be wrapped in brackets!!!
    "school" : "Mission College",
    "city" : "Santa Clara, CA",
    "major" : "Anthropology" // <--- notice lack of comma here
},
{
    "future school" : "SJSU",
    "future city" : "San Jose, CA",
    "future major" : "CS" // <--- notice lack of comma here
}] // <--- end of bracket
