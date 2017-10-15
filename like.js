// btns.forEach(btn => {
//     btn.addEventListener('click', e => {
//         let currentCount = btn.nextSibling.textContent.trim()
//         newCount = parseInt(currentCount) + 1
//         btn.nextSibling.textContent = newCount;
//     })
// })

//Add 'likes' to the count.
$(function(){
    $('.increment').click(event => {
        let currentCount = $(event.target).next().text()
        let newCount = parseInt(currentCount)+1
        $(event.target).next().text(newCount)
        
    })
});

//Re-tweet, and new tweet 
// $('.tweetsub').click(function(event) {
//         event.preventDefault()
//         let newTweet = $(".newest").val()
//         if (newTweet.trim() == '') return
//             let num = $('.clonedForm').length
//             let newNum = new Number(num + 1)
//             let newElem = $('#retweet' + num).clone().attr('id', 'retweet' + newNum)
//             //let newElement = $('#tweettext').replaceWith(newTweet)
//         $('#retweet' + num).prepend(newElem)
//         $('#tweettext').replaceWith(newTweet)
  
// $(".newest").val("")

$('.tweetsub').click(function(event){
    event.preventDefault()
    let newTweet = $(".newest").val()
    if (newTweet.trim() == '') return;
    let numOne = 0;
    let numTwo = 0;

    

    $('.subtweets').prepend("<div class=\"panel panel-default\">" +
                            "<div class=\"panel-body\">" +
                                "<div><img src=\"miken.jpg\" alt=\"miken\" class=\"img-circle\" width= 50px height= 50px>" +
                                "<h3><b>Jason Dean</b></h3>" +
                                "<p>" + newTweet + "</p>" +
                                "<div><i class=\"glyphicon glyphicon-heart increment\"></i><span>" + numOne + "</span>" +
                                "<span class=\"glyphicon glyphicon-refresh increment\"></span><span>" + numTwo + "</span>" +
                                "</div></div>");

    $(".newest").val("")
})
