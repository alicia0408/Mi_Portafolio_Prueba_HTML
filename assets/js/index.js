window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
});

window.scrollBy({
    top: 100,
    left: 0,
    behavior: 'smooth'
});

document.querySelector('#parrafo', '#experiencia', '#trabajos').scrollIntoView({
    behavior: 'smooth'
});


$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})