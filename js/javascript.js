"use strict";

//Sets first course as default selection... but haven't figured out how to deselect afterwards
// window.onload = function () {
//     let defaultCourse = document.getElementById("course1-gradeList");
//     defaultCourse.style.borderRight = "none";
//     defaultCourse.style.borderTopRightRadius = "0";
// };

/*
 * Listen for click of notification icons,
 * Redirect to correct panel via click of associated element
 * Hide notification icon once clicked
 */
let gradeNotification = document.getElementById('course1Grade');
gradeNotification.addEventListener("click", function(){
    let notification = document.getElementById('course1Grades');
    notification.click();
    gradeNotification.style.display = "none";
});

let announcementNotification = document.getElementById('course1Announcement');
announcementNotification.addEventListener("click", function(){
    let notification = document.getElementById('course1Announcements');
    notification.click();
    announcementNotification.style.display = "none";
});

let newContentNotification = document.getElementById('course1NewContent');
newContentNotification.addEventListener("click", function(){
    let notification = document.getElementById('course1Content');
    notification.click();
    newContentNotification.style.display = "none";
});

/*
* If announcements, grades, or lecture links are visited,
* remove notification icon from tab
*/

let course1Announcements = document.getElementById('course1Announcements');
course1Announcements.addEventListener('click', function (){
    announcementNotification.style.display = "none";
});

let course1Grades = document.getElementById('course1Grades');
course1Grades.addEventListener('click', function (){
    gradeNotification.style.display = "none";
});

let course1Content = document.getElementById('course1Content');
course1Content.addEventListener('click', function (){
    newContentNotification.style.display = "none";
});

//
// a:link {color: #336699;}
// a:visited {color: #666699;}
// a:hover {color: #000000;}
// a:active {color: #336699;}
