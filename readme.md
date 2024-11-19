odd child
even child
//for section alignment

make the html and css
same us project

responsive across all
devices

font size only or
centered content

possible to use sass
//base
//layout
//component
//all divisions!!
//footer, header, main
//media query
//and other classification

//for smooth scroll functionality

1) find coordinates

var sectionContact = document.getElementById('contact')
document.querySelector('.contact').addEventListener('click',
    function(){
        var s1coords = sectionHome.getBoundingClientRect();
        window.scrollTo({
        left: s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior: "smooth"
        });

        sectionContact.scrollIntoView({behavior: 'smooth'});
    }
)