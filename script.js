const welcomeScreen = document.getElementById('welcomeScreen');
const welcomeCheck = document.getElementById('welcomeCheck');
const btnEnter = document.getElementById('btnEnter');

const revealBox = document.getElementById('revealBox');
const revealTitle = document.getElementById('revealTitle');
const revealText = document.getElementById('revealText');
const btnTrap = document.getElementById('btnTrap');
const cameraFlash = document.getElementById('cameraFlash');

let typingTimer = null;

welcomeCheck.addEventListener('change', () => {
    btnEnter.disabled = !welcomeCheck.checked;
});

btnEnter.addEventListener('click', () => {
    welcomeScreen.style.opacity = '0';
    welcomeScreen.style.visibility = 'hidden';
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
    }, 500);
});

const textosTraduccion = {
    datos: {
        titulo: "⚠️ CLÁUSULA 1.1: Tu privacidad es una mercancía corporativa",
        cuerpo: "TRADUCCIÓN REAL: Las aplicaciones leen y analizan tus chats privados mediante Inteligencia Artificial. Si detectan que estás triste, cansada o con insomnio, le venden esa información a empresas de publicidad para mostrarte anuncios específicos basados en tus inseguridades emocionales nocturnas."
    },
    rostro: {
        titulo: "⚠️ CLÁUSULA 2.4: Expropiación de Identidad Biométrica",
        cuerpo: "TRADUCCIÓN REAL: Los filtros divertidos que usás escanean cuadro por cuadro las facciones exactas de tu cara. Ese mapa de tu rostro (que es tan único como tu huella digital) se guarda para siempre en servidores extranjeros para entrenar Inteligencias Artificiales de reconocimiento facial corporativo."
    },
    atencion: {
        titulo: "⚠️ CLÁUSULA 3.9: Ingeniería de Modificación Conductual",
        cuerpo: "TRADUCCIÓN REAL: Las plataformas te ocultan a propósito las fotos de tus amigos y te muestran contenido que te genere enojo, envidia o ansiedad. Hackean tu cerebro porque estadísticamente el contenido que te altera te mantiene atrapado scrolleando cuatro veces más tiempo."
    }
};

function revelarClausula(tipo) {
    clearInterval(typingTimer);
    revealBox.style.display = 'block';
    revealTitle.innerText = textosTraduccion[tipo].titulo;
    
    revealText.style.whiteSpace = "normal";
    revealText.style.wordBreak = "normal";
    revealText.innerHTML = ""; 
    
    const textoCompleto = textosTraduccion[tipo].cuerpo;
    let index = 0;
    
    typingTimer = setInterval(() => {
        if (index < textoCompleto.length) {
            if (textoCompleto.charAt(index) === " ") {
                revealText.innerHTML += " ";
            } else {
                revealText.innerHTML += textoCompleto.charAt(index);
            }
            index++;
        } else {
            clearInterval(typingTimer);
        }
    }, 10); 

    if (tipo === 'rostro') {
        triggerCameraFlash();
    }
}

btnTrap.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 250));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 80));
    
    btnTrap.style.position = 'fixed';
    btnTrap.style.left = randomX + 'px';
    btnTrap.style.top = randomY + 'px';
    btnTrap.style.zIndex = '9999';
});

function triggerCameraFlash() {
    cameraFlash.classList.add('active');
    setTimeout(() => {
        cameraFlash.classList.remove('active');
    }, 5500);
}