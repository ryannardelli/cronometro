function cronometro() {
    const cronometro = document.querySelector('#cronometro');

    function cliqueBotoes() {
        document.addEventListener ('click', e => {
            const elemento = e.target;
            if (elemento.classList.contains('iniciar')) {
                clearInterval(timer);
                iniciarTimer();
                cronometro.classList.remove('pause');
            }

            if (elemento.classList.contains('pausar')) {
                cronometro.setAttribute('class', 'pause');
                pausarTimer();
            }

            if (elemento.classList.contains('zerar')) {
                zerarTimer();
            }
        })
    }
    
    function criaSegundos(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-br', {
            timeZone: 'UTC'
        })
    }

    let timer;
    let segundos = 0;

    function iniciarTimer() {
        timer = setInterval(function() {
            segundos++;
            cronometro.innerHTML = criaSegundos(segundos);
        }, 1000)
    }

    function pausarTimer() {
        clearInterval(timer);
    }

    function zerarTimer() {
        cronometro.innerHTML = '00:00:00';
        clearInterval(timer);
        cronometro.classList.remove('pause');
        segundos = 0;
    }

    cliqueBotoes();
}

cronometro();
