let acc = document.getElementsByClassName('accordion');

function handleKeyboardNav(event)  {
    if (event === "Enter" || event === "ArrowUp" || event === "ArrowDown") {
        event.preventDefault();

         
         let currentIndex = Array.from(acc).indexOf(document.activeElement);
        
         
         let nextIndex; 
         if (event.key === "ArrowUp") {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : acc.length - 1;
         } else {
            nextIndex = currentIndex < acc.length - 1 ? currentIndex + 1 : 0
         }
         acc[nextIndex].focus();
        
         
         let content = acc[nextIndex].nextElementSibling;
         if (content.style.display === "block") {
            content.style.display = 'none';
         } else {
            content.style.display = 'block';
         }
         this.classList.toggle('active');

    }
}



for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        //close other tab 
        let allAccordions = document.getElementsByClassName('accordion');
        for (let j = 0; j < allAccordions.length; j++) {
            if (allAccordions[j] !== this) {
                allAccordions[j].classList.remove('active');
                allAccordions[j].nextElementSibling.style.display = 'none';
            }
        }

        //open current tab
       this.classList.toggle('active');
       let content = this.nextElementSibling;
       if (content.style.display === 'block') {
        content.style.display = 'none';
       } else {
        content.style.display = 'block';
       }
    });

    acc[i].addEventListener("keydown", handleKeyboardNav);
}