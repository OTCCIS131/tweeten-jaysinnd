
$(function(){
    $('.increment').click(event => {
        let currentCount = $(event.target).next().text()
        let newCount = parseInt(currentCount)+1
        $(event.target).next().text(newCount)
        
    })
});

