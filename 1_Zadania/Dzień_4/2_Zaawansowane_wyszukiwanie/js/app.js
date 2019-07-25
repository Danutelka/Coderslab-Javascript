
$ (function() {
    // zad1
    var shopping = $('section.shopping');
    var btn = shopping.find('button');
    btn.on('click', function(event){
        if(!$(this).hasClass('added')){
        $(this).addClass('added');
        $(this).parent().parent().css('border-color', 'green');
        } else {
            $(this).removeClass('added');
            $(this).parent().parent().css('border-color', '');
        }
    })
    // zad2
    var films = $('section.films');
    var btnExpand = films.find('a.expand');
    btnExpand.on('click', function(event){
        event.preventDefault();
        $(this).parent().siblings().show();
    })
    var btnHide = films.find('a.close');
    btnHide.on('click', function(event){
        event.preventDefault();
        $(this).parent().hide();
    })
});
