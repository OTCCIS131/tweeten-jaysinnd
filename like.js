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
    $('.tweetsub').click(event => {
        let currentTweet = $(event.target).text('.tweettext')
        let newTweet = $(event.target).text('.')
    })
})

