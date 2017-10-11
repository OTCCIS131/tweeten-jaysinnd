// btns.forEach(btn => {
//     btn.addEventListener('click', e => {
//         let currentCount = btn.nextSibling.textContent.trim()
//         newCount = parseInt(currentCount) + 1
//         btn.nextSibling.textContent = newCount;
//     })
// })
$(function(){
    $('.increment').click(event => {
        let currentCount = $(event.target).next().text()
        let newCount = parseInt(currentCount)+1
        $(event.target).next().text(newCount)
        
    })
});

$(function(){
    $('#newtweet').submit(function (e) {
        e.preventDefault()
        let newTweet = $("[name=title]", $(this))
        let newTweeten = newTweet.val()

        if (newTweet.trim() == '') return

        let newElement = $(":last-child", $("#tweets")).clone()
        newElement.text(newTweet)
        

    })
})

