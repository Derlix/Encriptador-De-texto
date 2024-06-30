let vocalesEncriptadas = ["enter", "imes", "ai", "ober", "ufat"];
const vocales = ['a', 'e', 'i', 'o', 'u'];

function encriptar() {
    let v_textoAEncriptar = document.getElementById('encriptarInput').value.trim(); 
    console.log(v_textoAEncriptar);

    if (v_textoAEncriptar === "") {
        asignarTexto('indicaciones', 'El campo no puede estar vacío');
        return; 
    }

    const tildes = ['í', 'ò', 'á', 'é', 'ú'];
    const tieneTildes = tildes.some(tilde => v_textoAEncriptar.includes(tilde));
    const tieneMayusculas = /[A-Z]/.test(v_textoAEncriptar);
    const tieneVocales = vocales.some(vocal => v_textoAEncriptar.includes(vocal));

    if (tieneTildes || tieneMayusculas) {
        asignarTexto('indicaciones', 'No se admiten tildes ni mayúsculas');
    } else {
        asignarTexto('indicaciones', '');

        if (tieneVocales) {
            let mensajeEncriptado = v_textoAEncriptar;

            mensajeEncriptado = mensajeEncriptado.replace(/e/g, vocalesEncriptadas[0]);
            mensajeEncriptado = mensajeEncriptado.replace(/i/g, vocalesEncriptadas[1]);
            mensajeEncriptado = mensajeEncriptado.replace(/a/g, vocalesEncriptadas[2]);
            mensajeEncriptado = mensajeEncriptado.replace(/o/g, vocalesEncriptadas[3]);
            mensajeEncriptado = mensajeEncriptado.replace(/u/g, vocalesEncriptadas[4]);

            reemplazarImagenConTexto('');
            console.log(mensajeEncriptado);
            asignarTexto('desencriptarInput', '');
        
            reemplazarImagenConTexto(mensajeEncriptado);
        }
        asignarTexto('indicaciones', 'Palabra o mensaje encriptado');
        asignarTexto('ningun', '');
    }
}

function desEncriptar() {
    let v_textoAEncriptar = document.getElementById('encriptarInput').value.trim(); 
    console.log(v_textoAEncriptar);

    if (v_textoAEncriptar === "") {
        asignarTexto('indicaciones', 'El campo no puede estar vacío');
        return; 
    }

    const tildes = ['í', 'ò', 'á', 'é', 'ú'];
    const tieneTildes = tildes.some(tilde => v_textoAEncriptar.includes(tilde));
    const tieneMayusculas = /[A-Z]/.test(v_textoAEncriptar);
    const tieneVocales = vocales.some(vocal => v_textoAEncriptar.includes(vocal));

    if (tieneTildes || tieneMayusculas) {
        asignarTexto('indicaciones', 'No se admiten tildes ni mayúsculas');
    } else {

        if (tieneVocales) {
            let mensajeDesEncriptado = v_textoAEncriptar;

            mensajeDesEncriptado = mensajeDesEncriptado.replace(new RegExp(vocalesEncriptadas[2], 'g'), vocales[0]);
            mensajeDesEncriptado = mensajeDesEncriptado.replace(new RegExp(vocalesEncriptadas[0], 'g'), vocales[1]);
            mensajeDesEncriptado = mensajeDesEncriptado.replace(new RegExp(vocalesEncriptadas[1], 'g'), vocales[2]);
            mensajeDesEncriptado = mensajeDesEncriptado.replace(new RegExp(vocalesEncriptadas[3], 'g'), vocales[3]);
            mensajeDesEncriptado = mensajeDesEncriptado.replace(new RegExp(vocalesEncriptadas[4], 'g'), vocales[4]);
            reemplazarImagenConTexto('');
            console.log(mensajeDesEncriptado);
            reemplazarImagenConTexto(mensajeDesEncriptado);
            asignarTexto('desencriptarInput', '');
        }
        asignarTexto('indicaciones', 'Palabra o mensaje Desencriptado');
        asignarTexto('ningun', '');
    }
}

function asignarTexto(id, texto) {
    document.getElementById(id).innerHTML = texto;
}

function copiar() {
    let textoCopiar = document.getElementById('desencriptarInput').textContent;
    let textarea = document.createElement('textarea');
    textarea.value = textoCopiar;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    asignarTexto('indicaciones', 'Texto Copiado');
}

function reemplazarImagenConTexto(mensaje) {
    const contenedor = document.getElementById('imagenContainer');

    contenedor.innerHTML = '';

    const nuevoTexto = document.createElement('p');
    nuevoTexto.textContent = mensaje;
    nuevoTexto.style.wordBreak = 'break-word'; 
    contenedor.appendChild(nuevoTexto);
}
