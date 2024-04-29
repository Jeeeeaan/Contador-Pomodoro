//variables
let body = document.querySelector('body')
let working = document.getElementById('working')
let break1 = document.getElementById('break1')
let timeWork = 25
let breakTime = 5
let nowBreak = false
let segs = "00"
let blue = "100"
let purple = "100"

//Cuando la pagina cargue
window.onload = () => {
// traemos por id elementos de HTML y con inner cambiamos cambiamos el contenido del id
    document.getElementById('minutes').innerHTML = timeWork;
    document.getElementById('segs').innerHTML = segs;
}
// funcion que se llama cuando se clickee la imagen play
function start(){
    document.getElementById('start').style.width = "0" // style=0, borra el boton cuando se active
    segs = 59

    let minWork = timeWork - 1;
    let breakMinutos = breakTime - 1;

    // funcion que que nos empieza a restar los numeros del contador
    // tanto minutos como segundos
    
    let tiempo = () => {
        document.getElementById('minutes').innerHTML = minWork;
        document.getElementById('segs').innerHTML = segs;

        segs -= 1; // segs = segs -1
// cuando segundos llegue a 0, segundos se reinicie a 51, esto evita numeros negativos
        if (segs === 0){
            segs = 59
// de igual manera con minutos
            minWork-= 1 //minWork = minWork -1
            if (minWork === -1){  //verifica que minutos llegue a 0 y activa los 5 min de break
                if(nowBreak == false){
                    nowBreak = true
                    minWork = breakMinutos

                    blue = 0
                    purple = 0

                    working.classList.add('after')
                    working.classList.remove('now')
                    break1.classList.add('now')
                    break1.classList.remove('after')
                }else{
                    nowBreak = false
                    minWork = timeWork -1

                    blue = 100
                    purple = 100

                    working.classList.remove('after')
                    working.classList.add('ahora')
                    break1.classList.remove('ahora')
                    break1.classList.add('after')
                }

            }
        }
// gradiente del background
        if (nowBreak == false){
            blue -= (100 / 737);

        }else{
            purple += (100 / 147);
        } 
        body.style.background = `linear-gradient(45deg, rgba(49, 13, 212) ${blue}%, rgba(116, 0, 211)${purple}%)`   
    }
    setInterval(tiempo, 10) // 1000 = 1 seg // modificando setInterval(tiempo, 1) aceleramos el proceso x10 

}

// linear-gradient(45deg, rgb(2, 133, 255) 100%, rgb(137, 12, 240)100%)
// linear-gradient(45deg, rgba(4,28,50,1) 100%, rgba(95, 30, 148, 1)100%)
// 45deg, rgb(49, 13, 212) 100%, rgb(116, 0, 211)100%
