<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript - zadania domowe
> Kod wpisz w odpowiednim pliku, zgodnie z poleceniem zadania.
BARDZO WAŻNE - Wasze zadania są sprawdzanie przy pomocy automatycznego systemu. Żeby odpowiedzi zostały uznane za poprawne strony MUSZĄ wyświetlać te same komunikaty co w treści zadania, a funkcjie i metody MUSZĄ posiadać nazwy dokładnie takie same jak podane
w zadaniu.

## Dzień 2 - DOM
> Zadanie 1 wykonaj w pliku searchDom.js

#### Zadanie 1

Plik HTML do tego zadania to plik **searchDom.html**, a plik js to **searchDom.js**.

 - Nie używaj eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.
 - Do każdego podpunktu stwórz odpowiednią funkcję o nazwie podanej w treści zadania.

 * **1. Pobranie informacji z atrybutu data:**
    - znajdź element o **id** ```menu```,
    - stwórz funkcję ```getDataInfo(element)``` do której przekaż , jako argument , znaleziony element,
    - stwórz w funkcji nową tablicę i wypełnij ją wartościami pobranymi z atrybutu data każdego elementu **li**. Zauważ, że
    elementy **li** to dzieci elementu o id ```menu```.
    - zwróć tą tablicę.

* **2. Szukanie elementu po id:**
    - Znajdź element o **id** ```main-contener```.
    - stwórz funkcję ```getElementClass(element)``` do której przekaż , jako argument , znaleziony element.
    - zwróć tablicę złożoną z nazw klas tego elementu.

* **3. Szukanie elementu po klasie:**
    - Znajdź element o **klasie** ```pink-color```.
    - stwórz funkcję ```getElementText(element)``` do której przekaż , jako argument , znaleziony element.
    - zwróć z funkcji tekst, znajdujący się w tym elemencie

* **4. Szukanie elementu po klasie:**
    - Znajdź elementy o **klasie** ```images```.
    - stwórz funkcję ```getElementAlt(element)``` do której przekaż , jako argument , znalezione elementy.
    - stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu alt obrazków. Pobierz te atrybuty z przekazanych jako argument elementów.

* **5. Szukanie elementu po klasie:**
    - Znajdź elementy o **klasie** ```my-link```.
    - stwórz funkcję ```getElementHref(element)``` do której przekaż , jako argument , znalezione elementy.
    - stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu href linków. Pobierz te atrybuty z przekazanych jako argument elementów.
