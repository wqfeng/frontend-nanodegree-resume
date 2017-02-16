/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Wang Qun Feng",
    "role": "DevOps",
    "contacts": {
        "mobile": "1896 6929 ***",
        "email": "qunfengw@gmail.com",
        "github": "https://github.com/wqfeng/",
        "twitter": "@wqfeng",
        "location": "Xi'An China"
    },
    "welcomeMessage": "God hides in the details.",
    "skills": ["Python", "Java", "HTML&CSS", "JavaScript", "DevOps"],
    "biopic": "https://lh3.googleusercontent.com/-4TFlGbCCl_Q/WGZNuBEaqLI/AAAAAAAAAqk/c8lWjioR1DkC4KCV9LBX8o-xy6h-1FhkgCEw/w280-h280-p/touxiang.png",
    "display": buildBio

};

var education = {
    "schools": [{
        "name": "Xi'Dian University",
        "location": "Xi'An",
        "degree": "Bachelor",
        "majors": ["CS", "Math"],
        "dates": "2000-7 ~ 2004-7",
        "url": "http://www.xidian.edu.cn/"
    }],
    "onlineCourses": [{
        "title": "Introduction to Programming Nanodegree",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://cn.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "title": "Functional Programming Principles in Scala",
        "school": "Coursera",
        "dates": "2014",
        "url": "https://www.coursera.org/learn/progfun1"
    }],
    "display": buildEducation
};

var work = {
    "jobs": [{
        "employer": "FiberHome",
        "title": "Software Engineer",
        "location": "Wu Han",
        "dates": "2004-7 ~ 2005-2",
        "description": "play with Java Swing"
    }, {
        "employer": "BanianTech",
        "title": "Software Engineer",
        "location": "Shang Hai",
        "dates": "2005-2 ~ 2006-2",
        "description": "play with more Java Swing"
    }, {
        "employer": "IBM",
        "title": "Staff Software Engineer",
        "location": "Xi'An",
        "dates": "in progress",
        "description": "statistics, front-end, DevOps"
    }],
    "display": buildJob
};

var projects = {
    "projects": [{
        "title": "IBM SPSS Statistics",
        "dates": "2010",
        "description": "IBM SPSS Statistics is an integrated family of products that addresses the entire analytical process, from planning to data collection to analysis, reporting and deployment. With more than a dozen fully integrated modules to choose from, you can find the specialized capabilities you need to increase revenue, outperform competitors, conduct research and make better decisions.",
        "images": ["https://app.resrc.it/O=50/https://ibmecm.cloudant.com/wcm70x/IBM_SPSS_Statistics!en/SPSS+Statistics.jpg",
            "https://www-01.ibm.com/software/analytics/images/OPP/advanced-stats/Advanced-GLMM-5.jpg"
        ]
    }, {
        "title": "IBM Waston Analytics",
        "dates": "2012",
        "description": "A data analysis solution in the cloud, Watson Analytics guides data discovery and predictive analytics with automatic visualizations and enables effortless dashboard creation.",
        "images": [
            "https://143a6.https.cdn.softlayer.net/cdn/wa_marketing/prod/0.1.2017013001/images/home/landing3.png"
        ]
    }],
    "display": buildProject
};


function buildBio() {
    var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
    var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
    var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
    var formattedEmail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
    var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio["biopic"]);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio["welcomeMessage"]);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);


    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMessage);

    $("#header").append(HTMLskillsStart);
    bio["skills"].forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });

}

function buildEducation() {

    education["schools"].forEach(function(school) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", school["name"]);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school["degree"]);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school["dates"]);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school["location"]);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school["majors"].join(", "));


        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);


    });

    $("#education").append(HTMLonlineClasses);

    education["onlineCourses"].forEach(function(course) {
        var formattedCourseTitle = HTMLonlineTitle.replace("%data%", course["title"]);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course["school"]);
        var formattedSchoolDates = HTMLonlineDates.replace("%data%", course["dates"]);
        var formattedURL = HTMLonlineURL.replace("%data%", course["url"]);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedCourseTitle + formattedSchool);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedURL);


    });

}

function buildJob() {

    work["jobs"].forEach(function(job) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job["employer"]);
        var formattedTitle = HTMLworkTitle.replace("%data%", job["title"]);
        var formattedDates = HTMLworkDates.replace("%data%", job["dates"]);
        var formattedLocation = HTMLworkLocation.replace("%data%", job["location"]);
        var formattedDescription = HTMLworkDescription.replace("%data%", job["description"]);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);

    });

}

function buildProject() {
    projects["projects"].forEach(function(p) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", p["title"]);
        var formattedDates = HTMLprojectDates.replace("%data%", p["dates"]);
        var formattedDescription = HTMLprojectDescription.replace("%data%", p["description"]);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        p["images"].forEach(function(url) {
            var formattedImage = HTMLprojectImage.replace("%data%", url);
            $(".project-entry:last").append(formattedImage);

        });
    });
}

bio["display"]();
education["display"]();
work["display"]();
projects["display"]();

$("#mapDiv").append(googleMap)