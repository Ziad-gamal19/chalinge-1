// --------------------------important-------------------------------

var windoww = document.querySelector(".windoww")
windoww.style.height = `${document.documentElement.clientHeight}px`
windoww.style.width = `${document.documentElement.clientWidth}px`
var imgLarge = document.querySelector(".parent .container .ontainerTwo .img .imgOne-large")
var imgOnelarge2 = document.querySelectorAll(".windoww .img2 .imgOne-large2 img")
var imgeOnesmal2 = document.querySelectorAll(".windoww .img2 .imgeOne-smal2 img")
var imgLarge11 = document.querySelectorAll(".parent .container .ontainerTwo .img .imgOne-large img")
// --------------------------important-------------------------------

var imgLarge11 = document.querySelectorAll(".parent .container .ontainerTwo .img .imgOne-large img")
var imgeOnesmal11 = document.querySelectorAll(".parent .container .ontainerTwo .img .imgeOne-smal img")
var card1 = document.querySelectorAll(".parent .container .ontainerTwo .info .card-1")

card1.forEach((w)=>{
    w.style.display = "none"
})
card1[0].style.display = "block"


// --------------------------click.onclick-------------------------------
var count = 0
var val = imgLarge11.length - 1
var click = document.querySelector(".windoww .img2 .click")
click.onclick = ()=>{

    imgOnelarge2.forEach((E)=>{
        E.style.display = "none"
    })
    imgOnelarge2[val].display = "block"



    windoww.style.display = "none"

}
imgLarge.onclick = ()=>{
    windoww.style.display = "block"
}

// --------------------------click.onclick-------------------------------

/*--------------------------------------------------------------------------------------------------*/
var imgOnelarge2 = document.querySelectorAll(".windoww .img2 .imgOne-large2 img")
var imgeOnesmal2 = document.querySelectorAll(".windoww .img2 .imgeOne-smal2 img")
/*------------------------------------------ss.onclick--------------------------------------------------------*/

var span = document.querySelector(".windoww .img2 .imgOne-large2  span")
var ss = document.querySelector(".windoww .img2 .imgOne-large2  .ss")

var countIMG = 0
var val = 0
ss.onclick = ()=>{

    imgOnelarge2.forEach((e,i)=>{
        if ( e.style.display === "block" ){
            val = +e.getAttribute("alt")
            val += 1
            console.log(val);
        }
    })
    imgOnelarge2.forEach((ee)=>{
        ee.style.display = "none"
    })
    imgOnelarge2.forEach((ew,i)=>{
        if ( i == val ){
            ew.style.display = "block"
        }
    })
if ( val === 4 ){
    val = 0
    imgOnelarge2[val].style.display = "block"
}

imgeOnesmal2.forEach((e)=>{
    e.classList.remove("active")
})
    imgeOnesmal2[val].classList.add("active")
    imgeOnesmal2[val].style.borderColor = imgeOnesmal2[val].getAttribute("color")

}
/*------------------------------------------ss.onclick--------------------------------------------------------*/

// ---------------------span.onclick---------------------------------
span.onclick = ()=>{

    imgOnelarge2.forEach((e,i)=>{
        if ( e.style.display === "block" ){
            val = +e.getAttribute("alt")
            val -= 1
            console.log(val);
        }
    })
    imgOnelarge2.forEach((ee)=>{
        ee.style.display = "none"
    })
    imgOnelarge2.forEach((ew,i)=>{
        if ( i == val ){
            ew.style.display = "block"
        }
    })
if ( val < 0 ){
    val = 3
    imgOnelarge2[val].style.display = "block"
}
imgeOnesmal2.forEach((e)=>{
    e.classList.remove("active")
})
    imgeOnesmal2[val].classList.add("active")
    imgeOnesmal2[val].style.borderColor = imgeOnesmal2[val].getAttribute("color")

}

var imgLarge11 = document.querySelectorAll(".parent .container .ontainerTwo .img .imgOne-large img")
var imgeOnesmal11 = document.querySelectorAll(".parent .container .ontainerTwo .img .imgeOne-smal img")

// ---------------------span.onclick---------------------------------
var imgOnelarge2 = document.querySelectorAll(".windoww .img2 .imgOne-large2 img")
var imgeOnesmal2 = document.querySelectorAll(".windoww .img2 .imgeOne-smal2 img")
var imgeOnesmalPARENT = document.querySelector(".windoww .img2 .imgeOne-smal2")

// -------------------------CLICK ON IMGE-LARGE2 SMALL EFFECT ON IMG-LARGE1---------------------------------------------
imgeOnesmalPARENT.onclick = (e)=>{
    imgeOnesmal2.forEach((img)=>{
        img.classList.remove("active")
    })
    e.target.classList.add("active")
    var eTARGET = e.target.getAttribute("alt")
    imgOnelarge2.forEach((img2)=>{
        if ( img2.getAttribute("alt") === eTARGET ){
            img2.style.display = "block"
        }
        else{
            img2.style.display = "none"
        }
    })
}
// -------------------------CLICK ON IMGE-LARGE2 SMALL EFFECT ON IMG-LARGE1---------------------------------------------

// ---------------------click.onclick---------------------------------
click.onclick = ()=>{
    var imgLarge11 = document.querySelectorAll(".parent .container .ontainerTwo .img .imgOne-large img")
    var imgeOnesmal11 = document.querySelectorAll(".parent .container .ontainerTwo .img .imgeOne-smal img")
    
    imgLarge11.forEach((E)=>{
        E.style.display = "none"
    })
    imgLarge11.forEach((EE,II)=>{
        if ( II === val ){
            EE.style.display = "block"
        }
    })

    imgeOnesmal11.forEach((EE,II)=>{
            EE.classList.remove("active")
    })
    imgeOnesmal11.forEach((EE,II)=>{
        if ( II === val ){
            EE.classList.add("active")
        }
    })



    var card1 = document.querySelectorAll(".parent .container .ontainerTwo .info .card-1")
    card1.forEach((EEE)=>{
        EEE.style.display = "none"
    })

    card1.forEach((EEe)=>{
        if ( EEe.getAttribute("alt") == val ){
            EEe.style.display = "block"
        }
    })


    windoww.style.display = "none"

}

var imgOnelarge2 = document.querySelectorAll(".windoww .img2 .imgOne-large2 img")

// ---------------------------------------------------------
var count = 0
var imgSmall = document.querySelector(".parent .container .ontainerTwo .img .imgeOne-smal")
var imgSmallActive = document.querySelector(".parent .container .ontainerTwo .img .imgeOne-smal img.active")
var imgSmallimg = document.querySelectorAll(".parent .container .ontainerTwo .img .imgeOne-smal img")
var imgLARGE = document.querySelectorAll(".parent .container .ontainerTwo .img .imgOne-large img")
/*--------------------------------------------------------------------------------------------------*/
var imgOnelarge2 = document.querySelectorAll(".windoww .img2 .imgOne-large2 img")
var imgeOnesmal2 = document.querySelectorAll(".windoww .img2 .imgeOne-smal2 img")
/*----------------------------------------imgSmall----------------------------------------------------------*/

imgSmall.onclick = (e)=>{

    imgSmallimg.forEach((er) => {
        er.classList.remove("active")
    });
    e.target.classList.add("active")

    e.target.style.borderColor = e.target.getAttribute("color") 


    var card1 = document.querySelectorAll(".parent .container .ontainerTwo .info .card-1")
    console.log(card1);
    card1.forEach((Ee)=>{
        Ee.style.display = "none"
    })

    card1.forEach((EEe)=>{
        if ( e.target.alt === EEe.getAttribute("alt") ){
            EEe.style.display = "block"
        }
    })



    imgLARGE.forEach((ee)=>{

        ee.style.display = "none"
    })
    imgLARGE.forEach((eee)=>{
        if( eee.alt == e.target.alt ){
            window.localStorage.setItem("key2","block")
            eee.style.display = window.localStorage.getItem("key2")

        }
    })
    // --------------------
    imgOnelarge2.forEach((eew)=>{
        eew.style.display = "none"
    })
    imgOnelarge2.forEach((eeew)=>{
        if( eeew.alt == e.target.alt ){
            eeew.style.display = window.localStorage.getItem("key2")
        }
    })

    imgeOnesmal2.forEach((eew)=>{
        eew.classList.remove("active")
        if ( eew.getAttribute("alt") === e.target.getAttribute("alt") ){
            eew.classList.add("active")
            eew.style.borderColor = eew.getAttribute("color") 
        }
    })
}
/*----------------------------------------imgSmall----------------------------------------------------------*/


var span1 = document.querySelector(".parent .container .ontainerTwo .info .spans .o")
var span3 = document.querySelector(".parent .container .ontainerTwo .info .spans .th")
var span2 = document.querySelector(".parent .container .ontainerTwo .info .spans .tw")
var sum = 0
span3.onclick = ()=>{
    span2.innerHTML = sum
    sum += 1
}
span1.onclick = ()=>{
    sum -= 1
    span2.innerHTML = sum
    
}