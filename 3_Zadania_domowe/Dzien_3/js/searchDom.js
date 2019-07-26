/* zadanie 1
Plik HTML do tego zadania to plik eventy.html, a plik js to eventy.js.
Na stronie znajduje się sekcja z dwoma elementami article. W każdym artykule znajdują się 
elementy h2, a oraz div o klasie content, który jest ukryty w CSS. Twoim zadaniem jest:
1 - ustawienie na pierwszym linku eventu, który spowoduje, że kiedy użytkownik w niego 
    kliknie pokaże się element o klasie content (należący do tego artukułu).
2 - ustawienie na drugim linku eventu, który spowoduje, że kiedy użytkownik na niego 
    najedzie pokaże się element o klasie 'content' (należący do tego artukułu).
*/
$(function(){
    var CzytajWiecej = $('article a');
    CzytajWiecej.on('click', function(event){
        $(this).next().toggle();
    });
});
