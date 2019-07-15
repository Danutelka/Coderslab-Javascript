/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    // zadanie 4.1
    var first = document.querySelector('.first');
    var first_child = first.firstElementChild;
    var third_child_of_first_child = first_child.children[2];

    console.log(third_child_of_first_child);
    // koniec 4.1
    // zadanie 4.2
    var second = document.getElementById('second');
    var father_second = second.parentElement;
    var fourth_children = father_second.children[3];
    console.log(second);
    console.log(father_second);
    console.log(fourth_children);
    // koniec 4.2
    // zadanie 4.3
    var h1 = document.querySelector('h1[data-ex="third"]');
    var grandpa = h1.parentElement.parentElement;
    var grandpa_last = grandpa.lastElementChild;
    var first = grandpa_last.firstElementChild;
    var middle = first.children[Math.floor(first.children.length/2)];

    console.log(h1);
    console.log(grandpa);
    console.log(grandpa_last);
    console.log(first);
    console.log(middle);
    // koniec zadania 4.3
    // zadanie 4.4
    var divs = document.querySelector('.forth');

    var Parent = divs.parentElement;

    var article = Parent.querySelector('article');

    var article_p = article.querySelectorAll('p');

    var wynik = article_p[1];

    //console.log(firstArticleChild);

    //console.log(secondChild);

    console.log(wynik);
});