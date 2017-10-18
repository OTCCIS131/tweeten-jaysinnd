
//Old js code for adding likes to tweets

// btns.forEach(btn => {
//     btn.addEventListener('click', e => {
//         let currentCount = btn.nextSibling.textContent.trim()
//         newCount = parseInt(currentCount) + 1
//         btn.nextSibling.textContent = newCount;
//     })
// })



//New jquery code for adding likes to tweets. Revised to work with all new tweets
$(function(){
    $(document).on('click', '.increment', function() {
        let currentCount = $(event.target).next().text()
        let newCount = parseInt(currentCount)+1
        $(event.target).next().text(newCount)
        
    })
});

// *ADAM*-- I really feel like this should work better than what actually
//  works on my code. I spent quite a bit of time researching jquery this 
//  weekend, and felt I was 'right there' with this code, but it kept duplicating
//  once the FIRST submitted tweet went through just fine. After that, 
//  any other submissions would duplicate ALL of them. Let me know if I 
//  am way off on this.


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

//The working code for tweeting new tweets.
$('.tweetsub').click(function(event){
    event.preventDefault()
    let newTweet = $(".newest").val()
    let fullDate = new Date()
    let twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) :(fullDate.getMonth()+1)
    let postDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear()
    
    if (newTweet.trim() == '') return;
    
    $('.subtweets').prepend("<div class=\"panel panel-default\">" +
                "<div class=\"panel-body\">" +
                "<div><img src=\"miken.jpg\" alt=\"miken\" class=\"img-circle\" width= 50px height= 50px>" +
                "<h3><b>Jason Dean</b></h3>" +
                "<p>" + newTweet + "</p>" + "<p>" + postDate + "</p>" +
                "<div><i class=\"glyphicon glyphicon-heart increment\"></i><span>0</span>" +
                "<span class=\"glyphicon glyphicon-refresh increment\"></span><span>0</span>" +
                "</div></div>")

    $(".newest").val("")
    //code to change the 'Your Tweet Activity' element just ..
    // doesnt quite work the way I want it to tho!
    $('#activetweet').replaceWith(newTweet).prepend(postDate)
    
})

//Code for making 'Follow' buttons change on click
$('.follow').click(function(){
    $(this).text(function(i, text){
        return text === "Follow" ? "Following" : "Follow"
    })
    $(this).css('color', 'grey')

})


