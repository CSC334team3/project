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
grade2Notification.addEventListener("click", function(){
    let notification = document.getElementById('course2Grades');
    notification.click();
    grade2Notification.style.display = "none";
});

let announcement2Notification = document.getElementById('course2Announcement');
announcement2Notification.addEventListener("click", function(){
    let notification = document.getElementById('course2Announcements');
    notification.click();
    announcement2Notification.style.display = "none";
});

let newContent2Notification = document.getElementById('course2NewContent');
newContent2Notification.addEventListener("click", function(){
    let notification = document.getElementById('course2Content');
    notification.click();
    newContent2Notification.style.display = "none";
});

let grade3Notification = document.getElementById('course3Grade');
grade3Notification.addEventListener("click", function(){
    let notification = document.getElementById('course3Grades');
    notification.click();
    gradeNotification.style.display = "none";
});

let announcement3Notification = document.getElementById('course3Announcement');
announcement3Notification.addEventListener("click", function(){
    let notification = document.getElementById('course3Announcements');
    notification.click();
    announcement3Notification.style.display = "none";
});

let newContent3Notification = document.getElementById('course3NewContent');
newContent3Notification.addEventListener("click", function(){
    let notification = document.getElementById('course3Content');
    notification.click();
    newContent3Notification.style.display = "none";
});

let grade4Notification = document.getElementById('course4Grade');
grade4Notification.addEventListener("click", function(){
    let notification = document.getElementById('course4Grades');
    notification.click();
    grade4Notification.style.display = "none";
});

let announcement4Notification = document.getElementById('course4Announcement');
announcement4Notification.addEventListener("click", function(){
    let notification = document.getElementById('course4Announcements');
    notification.click();
    announcement4Notification.style.display = "none";
});

let newContent4Notification = document.getElementById('course4NewContent');
newContent4Notification.addEventListener("click", function(){
    let notification = document.getElementById('course4Content');
    notification.click();
    newContent4Notification.style.display = "none";
});

let grade5Notification = document.getElementById('course5Grade');
grade5Notification.addEventListener("click", function(){
    let notification = document.getElementById('course5Grades');
    notification.click();
    grade5Notification.style.display = "none";
});

let announcement5Notification = document.getElementById('course5Announcement');
announcement5Notification.addEventListener("click", function(){
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

let course2Announcements = document.getElementById('course2Announcements');
course2Announcements.addEventListener('click', function (){
    announcement2Notification.style.display = "none";
});

let course2Grades = document.getElementById('course2Grades');
course2Grades.addEventListener('click', function (){
    grade2Notification.style.display = "none";
});

let course2Content = document.getElementById('course2Content');
course2Content.addEventListener('click', function (){
    newContent2Notification.style.display = "none";
});

let course3Announcements = document.getElementById('course3Announcements');
course3Announcements.addEventListener('click', function (){
    announcement3Notification.style.display = "none";
});

let course3Grades = document.getElementById('course3Grades');
course3Grades.addEventListener('click', function (){
    grade3Notification.style.display = "none";
});

let course3Content = document.getElementById('course3Content');
course3Content.addEventListener('click', function (){
    newContent3Notification.style.display = "none";
});

let course4Announcements = document.getElementById('course4Announcements');
course4Announcements.addEventListener('click', function (){
    announcement4Notification.style.display = "none";
});

let course4Grades = document.getElementById('course4Grades');
course4Grades.addEventListener('click', function (){
    grade4Notification.style.display = "none";
});

let course4Content = document.getElementById('course4Content');
course4Content.addEventListener('click', function (){
    newContent4Notification.style.display = "none";
});

let course5Announcements = document.getElementById('course5Announcements');
course5Announcements.addEventListener('click', function (){
    announcement5Notification.style.display = "none";
});

let course5Grades = document.getElementById('course5Grades');
course5Grades.addEventListener('click', function (){
    grade5Notification.style.display = "none";
});

