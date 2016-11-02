var bio = {
    "name" : "Philip J. Fry",
    "role" : "Delivery Boy",
    "contacts" : {
        "email" : "pjfry@gmail.com",
        "github" : "krzeroid",
        "location" : "New New York, NY"
    },
    "welcomeMessage" : "So I really am important? How I feel when I'm drunk is correct?",
    "skills" : ["Immune to psychic attacks", "Video games", "Lasers", "Pope"],
    "profile" : "images/me.jpg"
};

var work = {
    "jobs" : [
        {
            "employer" : "Planet Express",
            "title" : "Delivery Boy",
            "dates" : "3000 - 3013",
            "location" : "New New York, NY",
            "description" : "Lorem ipsum dolor sit amet, eu vel congue noster nonumes. Vidit legimus repudiare ne mea, has illum postea dissentiet cu. Vocent suscipiantur ut eos, eius graecis ei sit. Modo dicta omnesque ne ius. Velit maiestatis at has, quo homero invenire ea. Elit necessitatibus per no, in libris possim praesent mei."
        },
        {
            "employer" : "Panucci's Pizza",
            "title" : "Delivery Boy",
            "dates" : "1998 - 1999",
            "location" : "New York, NY",
            "description" : "Mel maiestatis democritum definitionem cu, putent mollis tritani in sit. Brute consulatu sea ut, eu laoreet delicatissimi quo. Tota laboramus te eos, nec ancillae insolens volutpat an. Exerci nemore qualisque vim ei, facilisi adversarium pro at. Cu etiam inani dolores cum, nostrud suscipiantur reprehendunt sed in. Vis purto contentiones an. Causae definiebas per ad, an mea mollis molestiae, ut pro vide prima dolorum."
        }
    ]
};

var projects = {
    "project" : [
        {
            "title" : "Beast with a Billion Backs",
            "dates" : "3008",
            "description" : "Nulla porttitor, sem hendrerit ultrices lobortis, eros justo mollis metus, eget elementum tellus diam sed lacus. Nulla ut pulvinar urna, a malesuada velit.",
            "image" : "images/fry-pope.jpg"
        },
        {
            "title" : "Roswell that Ends Well",
            "dates" : "3001",
            "description" : "Praesent hendrerit iaculis odio, vel suscipit metus suscipit ut. Sed maximus pretium felis nec ullamcorper. Integer ante nunc, dictum tristique mauris in, vulputate pulvinar neque. Proin quis ex ut mi tincidunt dapibus quis vel nisl. Vivamus condimentum quis urna quis mollis. Donec et nunc lectus.",
            "image" : "images/time-travel.jpg"
        },
        {
            "title" : "The Day the Earth Stood Stupid",
            "dates" : "3001",
            "description" : "Aliquam libero diam, mollis eget posuere quis, viverra a magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur et orci iaculis, fermentum risus et, egestas lorem. Vestibulum sit amet leo eget ex tincidunt auctor. Donec varius nisl nec libero scelerisque mollis.",
            "image" : "images/delta-fry.jpg"
        },
        {
            "title" : "Space Pilot 3000",
            "dates" : "1999 - 2999",
            "description" : "Mel sonet soluta voluptaria ei, ad vim wisi laoreet, vis no prima accusamus. Vim sumo doctus salutandi te. Laudem sanctus dissentias ut quo. Quo wisi timeam consectetuer ea. Eum errem ridens discere ut, ut autem regione instructior ius.",
            "image" : "images/frozen-fry.jpg"
        }
    ]
};

var education = {
    "schools" : [
        {
            "name" : "Mars University",
            "location" : "Mars",
            "degree" : "Vows to enroll and drop out all over again",
            "dates" : "3000"
        },
        {   "name" : "Coney Island Community College",
            "location" : "Brooklyn, NY",
            "degree" : "Undecided",
            "dates" : "1998"
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPicture = HTMLbioPic.replace("%data%", bio.profile);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcome);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
};

var formattedContact = [];
formattedContact.push(HTMLgithub.replace("%data%", bio.contacts.github));

for(connect in formattedContact) {
    $("#topContacts").append(formattedContact[connect]);
    $("#footerContacts").append(formattedContact[connect]);
};

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
};

for (project in projects.project) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[project].image);
    $(".project-entry:last").append(formattedProjectImage);
};

for (edu in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
    $(".education-entry:last").append(formattedSchoolDates);
};

function inName(name) {
    name = name.trim().split(" ");//trim removes white space from front and back of string, split seperates first and last name into an array by calling on the space in the middle
    console.log(name);
    name[1] = name[1].toUpperCase();//name 1 changes last name to uppercase
    name[0] = name[0].slice(0,1).toUpperCase() + //slice takes two parameters from the first name and creates a substring using 0,1 (first letter) and converts to uppercase, without two parameters (0,1) it'll go to the end of the string (the whole name)
        name[0].slice(1).toLowerCase();//this appends position one of the two parameters (first letter) into lower case

    return name[0] +" "+name[1]; //appends both values and returns to a string (whole name)
};
