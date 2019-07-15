/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    var div = document.getElementById('invoiceData');
    var fv = document.getElementById('invoice');
    fv.addEventListener('click', function (event) {
            if (this.checked) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
});