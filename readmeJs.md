// // const menu = ["Home","About","Contact"];
// // //menu will be dynamically added to ul in html
// // var i;
// // // var list = '';
// // var list = '';
// // for (i = 0; i < menu.length; i++){
// //     console.log(menu[i]);
// //     list += `<li> <a class = "${menu[i]}" href = ""> ${menu[i]} </a> </li>`;
  
// // }
// // // console.log(list);
// // var ulElement = document.querySelector(".menu");
// // ulElement.innerHTML = list;

// // // console.log(ulElement);
// // // var list = document.createElement("li");
// // // var link = document.createElement("a");
// // // ulElement.appendChild(list);
// // // var ab = list.appendChild(link);
// // // console.log(ab);

// var contentObj = {
//     home : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

//     about :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

//     contact : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
// }

// var main_content = document.querySelector(".main-content");

// var list = '';
// var section = '';

// // for (const content of Object.values(contentObj)){
// //     section += `<section> ${content} </section>`
// // }

// for (const cont of Object.entries(contentObj)){
//     list += `<li> <a class = "${cont[0]}" href = ""> ${cont[0]} </a> </li>`;
//     section += `<section class = "${cont[0]}"> ${cont[1]} </section>`;
// }

// var ulElement = document.querySelector(".menu");
// ulElement.innerHTML = list;
// main_content.innerHTML = section;

// var body = document.querySelector("body");
// var home_content = document.querySelector(".home");
// var click = ulElement.addEventListener('click', function(elo){
//    home_content.style.backgroundColor = "blue";
// });