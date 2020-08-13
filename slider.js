 function Slider(slider) {
   if (!(slider instanceof Element)) {
       throw new error("No slider passed in");
   }
    // Create some variables for working with the slier

   let current;
   let prev;
   let next;
    // Future functions
  
   const slides = slider.querySelector('.slides');
   const prevButton = slider.querySelector('.goToPrev');
   const nextButton = slider.querySelector('.goToNext');
    function startSlider() {
        current = slider.querySelector('.current') || slides.firstElementChild;
        console.log(current);
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
        console.log({current, prev, next});
    }

    function applyClasses() {
       current.classList.add('current'); 
       prev.classList.add('prev'); 
       next.classList.add('next'); 
    }

    function move(direction) {
        // First strip the classes off the current slides
        const classesToRemove = ["prev", "current", "next"];
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);
        if (direction === 'back') {
            // Swap the variables when we go backwards
            [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
        } else {
            // Swap the variables when we go backwards
            [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild,];
        }
         
        applyClasses();
     
    }
    // When this slider is created, run the start slider function
    startSlider();
    applyClasses();
    // Event listeners

    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', () => move()); 
 }


 const mySlider = Slider(document.querySelector('.slider'));
 const dogSlider = Slider(document.querySelector('.dog-slider'));
