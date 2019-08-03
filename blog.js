(function () {
    var list = document.querySelectorAll('li');
    for (let i = 0; i < list.length; i++) {
        (function (line) {
            line.addEventListener('click', function () {
                var textList = line.getElementsByClassName('text');
                for (let j = 0; j < textList.length; j++) {
                    let text = textList[j];
                    text.style.visibility = "visible";
                }
            })
        })(list[i])

    }
})();