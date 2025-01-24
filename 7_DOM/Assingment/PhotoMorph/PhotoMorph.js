let row = document.querySelector('.row')



row.addEventListener('click', (event) => {
    if (event.target.tagName === 'DIV' || event.target.tagName === 'IMG') {
        let targetDiv = event.target.tagName === 'DIV' ? event.target : event.target.parentElement;
        let allDivs = document.querySelectorAll('.row > div');
    
        if (!targetDiv.classList.contains('expanded')) {
          allDivs.forEach(div => {
            if (div !== targetDiv) {
              div.classList.add('hidden');
            } 
          });
          targetDiv.classList.add('expanded');
         } else {
          allDivs.forEach(div => div.classList.remove('hidden'));
          targetDiv.classList.remove('expanded');
         }
        
     }else{
      alert('Please click on the image or the div');
     } 

});
