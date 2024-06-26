// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

// Typing Effect

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!','UI Designer!','Freelancer!'],
    typeSpeed: 10,
    backSpeed: 10,
    backDelay: 2000,
    loop: true, 
})

// Active Link State on Scroll

// get all links
let navLinks = document.querySelectorAll('nav ul li a')

// get all section
let sections = document.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll',function(){
    const scrollPos = window.scrollY
    sections.forEach(section =>{
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});

// Get Responce on Whatsapp
function whatsapp(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var msg = document.getElementById('msg').value;

    var whatsappurl="https://wa.me/917053660689?text="
    + "Name : " + name +"%0a"
    + "Email : " + email +"%0a"
    + "Subject : " + subject +"%0a"
    + "Message : " + msg + "%0a%0a";

    window.open(whatsappurl,"_blank").focus();
}