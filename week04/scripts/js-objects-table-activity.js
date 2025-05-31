let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    { sectionNumber: 1, enrolled: 90, instructor: "Mr. Teacher"},
    { sectionNumber: 2, enrolled: 85, instructor: "Mrs. Professor"} 
  ]
};

// access a course's properties (members) and create a template literal,
//  then assign the template literal string as the value of the <table>'s
//  <caption>'s textContent attribute

function setCourseInformation(course) {
  document.querySelector("#courseName").textContent = `${course.code} - ${course.title}`;
}

// access the parameter section's members (nested properties in the case
//  of a course's section member) and create a template literal -- returned
//  string intended to be used by the renderSections() function to edit the
//  innerHTML attribute of the <tbody> element

function sectionTemplate(section) {
  return `<tr>
            <td>${section.sectionNumber}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
          </tr>`;
}

// the map() method can be called on an array to create a new array...
//   The returned array contains the results of calling the function
//      passed as a parameter into the map() method on every element
//      in the original array

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections tbody").innerHTML = html.join("");
}

setCourseInformation(aCourse);
renderSections(aCourse.sections);
