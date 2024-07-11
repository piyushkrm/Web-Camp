function tooglehide() {
    // let btn = document.getElementById('btn');
    // let paragraph = document.getElementById('paragraph');
    if (paragraph.style.display != 'none') {
        paragraph.style.display = 'none';
    }
    else {
        paragraph.style.display = 'block';
    }
}

let paragraph = document.getElementById('paragraph');
paragraph.addEventListener('mousemove', function run() {
    alert("Mouse inside the paragraph")
    // console.log("Mouse inside the paragraph")
});

paragraph.addEventListener('mouseout', function run() {
    alert("Mouse outside the paragraph")
    // console.log("Mouse outside the paragraph")

});