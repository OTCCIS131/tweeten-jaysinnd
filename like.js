var btns = Array.from(document.getElementsByClassName("increment"));

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        let currentCount = btn.nextSibling.textContent.trim()
        newCount = parseInt(currentCount) + 1
        btn.nextSibling.textContent = newCount;
    })
})
