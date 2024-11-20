//first we must create an object that will contain the contents of our sections

let contentObj = {
    Home : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",

    About :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",

    Contact : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",

     Help : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.    "
}
let list = "";
let sec = "";
// let title = "";
let counter = 1;

for (const menuItem of Object.keys(contentObj)){ //the keys are li elements
    list += `<li> <a href = "" id = "${menuItem}" class = "link">${menuItem} </a> </li>`;
}
document.querySelector(".menu").innerHTML = list;

for (const sectionItem of Object.entries(contentObj)){
    sec += `<section class = "section section-${counter}" id = "${sectionItem[0]}sec">
    <div class = "wrapper-${counter}">
    <h2 class = "title">${sectionItem[0]}</h2> 
    <p> ${sectionItem[1]} </p>
    </div>
    </section>`;
    counter++;
}
document.querySelector(".main-content").innerHTML = sec;

let links = document.querySelectorAll(".link");


links.forEach(function(link){
   
    link.addEventListener("click", function(event){
        event.preventDefault(); //we prevented default behaviors
        links.forEach(function(lin){

            lin.classList.remove("active");
        });
        // link.classList.add("active");
        var touchedLink = event.target; //this is an object //target of click
        touchedLink.classList.add("active");
        const idName = `${this.id}sec`; //this refers to the current object
        var secId = document.getElementById(idName); 
        var s1Cord = secId.getBoundingClientRect();

        window.scrollTo(
            {
                left : s1Cord.left + window.pageXOffset,
                top : s1Cord.top + window.pageYOffset,
                behavior : "smooth"
            }
        )
    })
})




// let navLinkArray = Object.keys(contentObj);
// console.log(navLinkArray);

const targets = document.querySelectorAll(".section");


// solution implementation using an intersection observer API
//targets is a nodeList which can be accessesd using index
//let's define a callback function

const callback = (entries,observer) => {
    entries.forEach((entry,index) => {
        let i = 0;
        if (entry.isIntersecting){
           
            entry.target.classList.add("active-section");
            links.forEach((link) => {
                //if the link and the section have the same title, highlight
                if (entry.target.querySelector("h2").textContent === link.id){
                // link.style.backgroundColor = "black";
                link.classList.add("active");
                
                }
                else{
                    link.classList.remove("active");
                    // link.style.backgroundColor = "white";
                }
                
                // let myId = link.id;
                // console.log(myId);
            })
            // console.log("Current section has entered the scence.");
       
        }
        else{
           
            entry.target.classList.remove("active-section");
        }
    });
}
const options = {
    root : null,
    rootMargin : "20px",
    threshold : .5
}
const observer = new IntersectionObserver(callback, options);

targets.forEach((target) => {
    observer.observe(target);
})