let wordDone = document.getElementById("wordDone")
let btnDo = document.getElementById('btnDo')
let btnDid = document.getElementById('btnDid')
let btnDone = document.getElementById('btnDone')
let btnTranslate = document.getElementById('translate')

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Cumpri minha sentença, mas não cometi nenhum crime'
    btnTranslate.style.boxShadow = '1px 1px 1px black'
    setTimeout(function()
    {
        btnTranslate.innerHTML = 'Translate'
        btnTranslate.style.boxShadow = '2px 2px 3px black'
    }, 4000)

})

btnDone.addEventListener('click', function() {
    let songAudio = document.getElementById('song')
    songAudio.play()
    let audio = document.getElementById('click')
    audio.play()
    wordDone.innerHTML = 'done'
    wordDone.style.color = 'lime'
    btnDone.style.background = 'lawngreen'
    btnDone.style.color = 'green'
    btnDone.disabled = 'true'
    btnDo.disabled = 'true'
    btnDid.disabled = 'true'
})

btnDo.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordDone.innerHTML = 'do'
    wordDone.style.color = 'red'
    btnDo.style.background = 'red'
    btnDo.disabled = 'true'
})

btnDid.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordDone.innerHTML = 'did'
    wordDone.style.color = 'red'
    btnDid.style.background = 'red'
    btnDid.disabled = 'true'
})