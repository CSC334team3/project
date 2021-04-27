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

let grade2Notification = document.getElementById('course2Grade');
gradeNotification.addEventListener("click", function(){
    let notification = document.getElementById('course2Grades');
    notification.click();
    grade2Notification.style.display = "none";
});

let announcement2Notification = document.getElementById('course2Announcement');
announcementNotification.addEventListener("click", function(){
    let notification = document.getElementById('course2Announcements');
    notification.click();
    announcement2Notification.style.display = "none";
});

let newContent2Notification = document.getElementById('course2NewContent');
newContentNotification.addEventListener("click", function(){
    let notification = document.getElementById('course2Content');
    notification.click();
    newContent2Notification.style.display = "none";
});

let grade3Notification = document.getElementById('course3Grade');
gradeNotification.addEventListener("click", function(){
    let notification = document.getElementById('course3Grades');
    notification.click();
    gradeNotification.style.display = "none";
});

let announcement3Notification = document.getElementById('course3Announcement');
announcementNotification.addEventListener("click", function(){
    let notification = document.getElementById('course3Announcements');
    notification.click();
    announcement3Notification.style.display = "none";
});

let newContent3Notification = document.getElementById('course3NewContent');
newContentNotification.addEventListener("click", function(){
    let notification = document.getElementById('course3Content');
    notification.click();
    newContent3Notification.style.display = "none";
});

let grade4Notification = document.getElementById('course4Grade');
gradeNotification.addEventListener("click", function(){
    let notification = document.getElementById('course4Grades');
    notification.click();
    grade4Notification.style.display = "none";
});

let announcement4Notification = document.getElementById('course4Announcement');
announcementNotification.addEventListener("click", function(){
    let notification = document.getElementById('course4Announcements');
    notification.click();
    announcement4Notification.style.display = "none";
});

let newContent4Notification = document.getElementById('course4NewContent');
newContentNotification.addEventListener("click", function(){
    let notification = document.getElementById('course4Content');
    notification.click();
    newContent4Notification.style.display = "none";
});

let grade5Notification = document.getElementById('course5Grade');
gradeNotification.addEventListener("click", function(){
    let notification = document.getElementById('course5Grades');
    notification.click();
    grade5Notification.style.display = "none";
});

let announcement5Notification = document.getElementById('course5Announcement');
announcementNotification.addEventListener("click", function(){
    let notification = document.getElementById('course5Announcements');
    notification.click();
    announcement5Notification.style.display = "none";
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


