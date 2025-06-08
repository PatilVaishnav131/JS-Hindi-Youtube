function delay(ms){
    return new Promise( function(resolve, reject){
        setTimeout(resolve , ms);
    })
}

async function typeWritterEffect(message , elementId , speed){
    const element = document.getElementById(elementId)
    element.textContent = ""

    for(let i=0 ; i< message.length ; i++){
        element.textContent += message[i]
        await delay(speed)
    }
}


const sentence = "Hi i am a newbie learning JavaScript !";
typeWritterEffect(sentence,"typewriter" ,100)