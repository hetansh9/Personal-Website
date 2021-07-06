
// Mouse declaration and animation 

const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

// Mouse Animation properties

const circleFunction = (x,y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity:1`;
    mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity:1`;
};

// Animated circles 

const allCircles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");


let mouseX = 0;
let mouseY = 0;

const z = 100;

const animatedCircles = (e,x,y) => {

    // when the mouse goes to the left side we wants the circle to go right side hence opposite movements
    if ( x < mouseX ) {
        
        allCircles.forEach((circle) => {
            circle.style.left = `${z}px`;
        });
        mainImg.style.left = `${z}px`;
    } else if(x > mouseX) {

        allCircles.forEach((circle) => {
            circle.style.left = `-${z}px`;
        });
        mainImg.style.left = `-${z}px`;

    }

    // when the mouse is going up
    if( y < mouseY) {
        
        allCircles.forEach((circle) => {
            circle.style.top = `${z}px`;
        });
        mainImg.style.top = `${z}px`;

    }else if (y > mouseY) {

        allCircles.forEach((circle) => {
            circle.style.top = `-${z}px`;
        });
        mainImg.style.top = `-${z}px`;

    }
    mouseX = e.clientX;
    mouseY = e.clientY;

}

document.body.addEventListener("mousemove", e=> {
    let cx = e.clientX;
    let cy = e.clientY;
    
    circleFunction(cx, cy);
    animatedCircles(e,cx,cy);
});


document.body.addEventListener("mouseleave", ()=> {
    mouseCircle.style.opacity = "0";
    mouseDot.style.opacity = "0";
});

// Main button 

const mainButton = document.querySelector(".main-button");

let ripple; 

mainButton.addEventListener("mouseenter", e => {
    const left = e.clientX-e.target.getBoundingClientRect().left;

    const top = e.clientX-e.target.getBoundingClientRect().top;

    ripple = document.createElement('div');

    ripple.classList.add('ripple');

    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    mainButton.prepend(ripple); // inserts this node after the child is created
 
});

mainButton.addEventListener("mouseleave", ()=>{
    mainButton.removeChild(ripple);
});

// ------------------------  Section 2 -------------------------

const aboutMe = document.querySelector(".about-me-text");
const aboutmeContent = 'Hello !! How are you?. I am Hetansh Patel  I am computer science study at CSU. I love playing video games. Dont forget to put' ;


Array.from(aboutmeContent).forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    aboutMe.appendChild(span);

    span.addEventListener("mouseenter", (e) => {
        e.target.style.animation = "aboutMeAnimation 10s infinite";
    
    });
    
});

