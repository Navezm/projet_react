let btn = document.querySelector('.arrowUp');

window.addEventListener('scroll', function(){
    if (window.pageYOffset < 50) {
        btn.style.display = "none"
    } else {
        btn.style.display = "flex"
    }
})


btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})
