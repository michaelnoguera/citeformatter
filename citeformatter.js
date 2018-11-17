function radio() {
    document.getElementById('A2').disabled = true;
    document.getElementById('frontline').disabled = true;
    document.getElementById('indict').disabled = true;
    if (document.getElementById('radio-A2').checked) {
        document.getElementById('A2').disabled = false;
    } else if (document.getElementById('radio-frontline').checked) {
        document.getElementById('frontline').disabled = false;
    } else if (document.getElementById('radio-indict').checked) {
        document.getElementById('indict').disabled = false;
    }
}
function format() {
    if (document.getElementById('radio-A2').checked) {
        var block = "A2: " + document.getElementById('A2').value;
        document.getElementById('block').innerHTML = block;
    } else if (document.getElementById('radio-frontline').checked) {
        var block = "Frontline: " + document.getElementById('frontline').value;
        document.getElementById('block').innerHTML = block;
    } else if (document.getElementById('radio-indict').checked) {
        var block = "Indict: " + document.getElementById('indict').value;
        document.getElementById('block').innerHTML = block;
    } else {
        document.getElementById('block').innerHTML = null;
    }
    var tag = document.getElementById('tagline').value;
    var cite = document.getElementById('author').value + ", " + document.getElementById('date').value +
        ', "' + document.getElementById('title').value + '", ' + document.getElementById('publication').value +
        ', <a href="' + document.getElementById('url').value + '">' + document.getElementById('url').value + "</a>";

    document.getElementById('tag').innerHTML = tag;
    document.getElementById('cite').innerHTML = cite;

    document.getElementById('inputs').style.display = 'none';
    document.getElementById('outputs').style.display = 'block';
    document.getElementById('back-wrapper').style.display = 'block';
}
function back() {
    document.getElementById('back-wrapper').style.display = 'none';
    document.getElementById('outputs').style.display = 'none';
    document.getElementById('inputs').style.display = 'block';
}
document.getElementById('submit').addEventListener('click', format);
document.getElementById('back').addEventListener('click', back);

document.getElementById('radio-card').addEventListener('click', radio);
document.getElementById('radio-A2').addEventListener('click', radio);
document.getElementById('radio-frontline').addEventListener('click', radio);
document.getElementById('radio-indict').addEventListener('click', radio);