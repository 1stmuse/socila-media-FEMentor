const checkbtn = document.getElementById('checkbox')
const body = document.querySelector('.dktheme')
const card = document.querySelectorAll('.card')
const txt= document.querySelectorAll('.txt-dk')

checkbtn.addEventListener('click',(e)=>{
    // console.log(e.target.checked)
    if(e.target.checked){
        body.classList.remove('dktheme')
        body.classList.add('whtheme')
        txt.forEach(txt=> txt.classList.toggle('txt-dk'))
        card.forEach(card=>{
        card.classList.remove('crd-dk-thm')
        card.classList.add('crd-wh-thm')
        } )
    }else{
        body.classList.remove('whtheme')
        body.classList.add('dktheme')
        txt.forEach(txt=> txt.classList.toggle('txt-dk'))
        card.forEach(card=>{
            card.classList.remove('crd-wh-thm')
            card.classList.add('crd-dk-thm')
        })
        
    }
    // card.forEach(card=>{
    //     // card.classList.remove('crd-dk-thm')
    //     card.classList.toggle('crd-dk-thm')
    // } )
    // document.body.classList.toggle('dktheme')
    
})