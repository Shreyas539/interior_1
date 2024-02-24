// JavaScript for modal interaction
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModal');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';

  // Automatically close the modal after a delay (e.g., 5 seconds)
   // Adjust the time delay as needed
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';

  // Automatically open the modal again after a delay (e.g., 2 seconds)
  setTimeout(openModal, 5000); // Adjust the time delay as needed
}

// Add click event listener to the "Open Modal" button
openModalBtn.addEventListener('click', openModal);

// Add click event listener to the "Close" button
closeModalBtn.addEventListener('click', closeModal);

// You can also close the modal if the background overlay is clicked
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});


// function chanBgm(){
//   var radioButton = document.querySelector('.radio-gp input[type="radio"]');
//   var label = document.querySelector('label[for="city"]');

//   // Check if the radio button is checked.
//   if (radioButton.checked) {
//     // Change the background color of both elements to green.
//     radioButton.style.backgroundColor = 'red';
//     label.style.backgroundColor = 'red';
//   } else {
//     // Change the background color of both elements to white.
//     radioButton.style.backgroundColor = 'white';
//     label.style.backgroundColor = 'white';
//   }
// }

// Start the initial display of the modal
// openModal();








// carousel script



// modal inputs

// const changeBgm = document.querySelector('#1-bhk');

// document.getElementById('1-bhk').onclick = function(){
//   changeBgm.style.color=
// }

// portfolio section js
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);



// animate on scroll 
// let text_box = document.getElementById('text-box');

// window.onscroll = () =>{
        // let top = window.scrollY;
        // let offset = visualViewport.offsetTop;
        // let height = visualViewport.offsetHeight;

        // if(top >= offset && top < offset +height){
            // text_box.classList.add('slideInleft')
        // }
        // else{
        //     text_box.classList.remove('slideInleft')
        // }
// }

// window.onscroll = () =>{
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;

//         if(top >= offset && top < offset +height){
//             sec.classList.add('slideInleft');
//         }
//         else{
//             sec.classList.remove('slideInleft')
//         }
//     })
// }


// faq section close button
document.querySelectorAll('.tab .toggle').forEach(function(toggleButton) {
    toggleButton.addEventListener('click', function() {
        const content = this.closest('.tab').querySelector('.content');
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
});
