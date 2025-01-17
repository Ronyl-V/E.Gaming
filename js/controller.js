function updateImageSource() {
    const img = document.getElementById('responsive-image');
    if (window.innerWidth <= 768) {
        img.src = '../images/Home/image/controller768px.webp';
    }else {
        img.src = '../images/Home/image/controller1024px.webp';
      } 
  }

   // Call the function on load and on window resize
   window.addEventListener('load', updateImageSource);
   window.addEventListener('resize', updateImageSource);