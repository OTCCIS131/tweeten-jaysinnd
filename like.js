// var btns = Array.from(document.getElementsByClassName("increment"));

// btns.forEach(btn => {
//     btn.addEventListener('click', e => {
//         let currentCount = btn.nextSibling.textContent.trim()
//         newCount = parseInt(currentCount) + 1
//         btn.nextSibling.textContent = newCount;
//     })
// })
$(function(){
    $('.increment').click(event => {
        console.log(event)
        let currentCount = $(event.target).next().text()
        console.log(currentCount)
        return currentCount*1+1
        
    })
});

// $('.increment').click(function() {
//     $('.increment').html(function(i, val) { return val*1+1 });
// });