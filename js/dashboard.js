// For Graph 
const lineCtx = document.getElementById('line-chart').getContext('2d');
const pieCtx = document.getElementById('pie-chart').getContext('2d');

new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Earnings',
            data: [10000, 20000, 15000, 25000, 30000, 35000, 40000, 35000, 25000, 20000, 33000, 50000],
            borderColor: 'blue',
        }]
    } 
});

new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['EA Sport College Football 25', 'COD Black Ops 6', 'Hell Divers 2', 'EA FC 25', 'DBZ Sparking Zero'],
        datasets: [{
            data: [345, 325, 350, 280, 250],
            backgroundColor: ['gold', '#fe8019', '#0d7bdc', '#61ff31', 'red']
        }]
    },
    options: {
        responsive: true
    }
});

/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))
