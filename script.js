document.addEventListener('DOMContentLoaded', () => {
    // Validación para solo letras en el campo de nombre
    const nombreInput = document.getElementById('nombre');

    nombreInput.addEventListener('input', function(event) {
        const value = event.target.value;
        // Remover cualquier carácter que no sea una letra
        event.target.value = value.replace(/[^a-zA-Z\s]/g, '');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Cargar el formulario de daltonismo
    fetch('../daltonismo.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('color-mode').innerHTML = data;

            // Añadir los event listeners después de cargar el contenido
            const colorModeRadios = document.querySelectorAll('input[name="colorMode"]');

            colorModeRadios.forEach(radio => {
                radio.addEventListener('change', (event) => {
                    // Quita todas las clases de color
                    document.body.classList.remove('normal-color', 'daltonia1-color', 'daltonia2-color', 'daltonia3-color');

                    // Añade la clase correspondiente
                    const value = event.target.value;
                    if (value === 'normal') {
                        document.body.classList.add('normal-color');
                    } else if (value === 'daltonia1') {
                        document.body.classList.add('daltonia1-color');
                    } else if (value === 'daltonia2') {
                        document.body.classList.add('daltonia2-color');
                    } else if (value === 'daltonia3') {
                        document.body.classList.add('daltonia3-color');
                    }
                });
            });
        })
        .catch(error => console.error('Error al cargar el formulario de daltonismo:', error));
});

// Lógica de Registro de usuario
document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registro-form');

    if (!registroForm) {
        console.error('Formulario de registro no encontrado.');
        return;
    }

    registroForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const contrasena = document.getElementById('contrasena').value;
        const repetirContrasena = document.getElementById('repetir_contrasena').value;

        // Validar si las contraseñas coinciden
        if (contrasena !== repetirContrasena) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Redirigir a la página de inicio si todo está bien
        alert('¡Registro exitoso!');
        window.location.href = 'index.html'; // Redirigir a la página de inicio
    });
});
    

// Lógica de inicio de sesión
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validar el correo electrónico y la contraseña
    if (username === 'team@icodigomasters.net' && password === 'password123') {
        // Iniciar sesión
        alert('¡Inicio de sesión exitoso!');
        window.location.href = 'trabajo-HCI-main/Untitled-1.html'; // Redirigir a la página de inicio
    } else if (username === 'nuevo@gmail.com' && password === 'pass12345') {
        // Iniciar sesión
        alert('¡Inicio de sesión exitoso!');
        window.location.href = 'trabajo-HCI-main/Untitled-1.html'; // Redirigir a la página de inicio
    } 
    
    else {
        alert('Correo electrónico o contraseña incorrectos.');
    }
});

// Cargar el footer
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
}

window.onload = function() {
    loadFooter();
};

/*
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
}

window.onload = function() {
   
    loadFooter();
};


const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar el correo electrónico y la contraseña

    if (username === 'team@icodigomasters.net' && password === 'password123') {
        // Iniciar sesión
        alert('¡Inicio de sesión exitoso!');
        window.location.href = 'index.html'; // Redirigir a la página de inicio
    } else {
        alert('Correo electrónico o contraseña incorrectos.');
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Selecciona todos los radiobuttons
        const colorModeRadios = document.querySelectorAll('input[name="colorMode"]');
      
        // Añade un listener a cada radiobutton
        colorModeRadios.forEach(radio => {
          radio.addEventListener('change', (event) => {
            // Verifica el valor seleccionado y aplica el esquema de colores correspondiente
            if (event.target.value === 'normal') {
              applyNormalColors();
            } else if (event.target.value === 'daltonia1') {
              applyDaltonia1Colors();
            } else if (event.target.value === 'daltonia2') {
              applyDaltonia2Colors();
            }
          });
        });
      
        // Función para aplicar los colores normales
        function applyNormalColors() {
          document.body.style.backgroundColor = '';
          document.body.style.color = '';
          document.querySelector('.container').style.backgroundColor = '#fff';
          document.querySelectorAll('h1, h2').forEach(el => el.style.color = '#333');
          document.querySelectorAll('label').forEach(label => label.style.color = '#bc3808');
          document.querySelectorAll('button').forEach(button => {
            button.style.backgroundColor = '#bc3808';
            button.style.color = '#fff';
          });
        }
      
        // Función para aplicar los colores de Daltonia 1
        function applyDaltonia1Colors() {
          document.body.style.backgroundColor = '#ececec';
          document.body.style.color = '#006400';
          document.querySelector('.container').style.backgroundColor = '#f4f4f4';
          document.querySelectorAll('h1, h2').forEach(el => el.style.color = '#006400');
          document.querySelectorAll('label').forEach(label => label.style.color = '#006400');
          document.querySelectorAll('button').forEach(button => {
            button.style.backgroundColor = '#006400';
            button.style.color = '#fff';
          });
        }
      
        // Función para aplicar los colores de Daltonia 2
        function applyDaltonia2Colors() {
          document.body.style.backgroundColor = '#ffecd1';
          document.body.style.color = '#8b0000';
          document.querySelector('.container').style.backgroundColor = '#fff7e6';
          document.querySelectorAll('h1, h2').forEach(el => el.style.color = '#8b0000');
          document.querySelectorAll('label').forEach(label => label.style.color = '#8b0000');
          document.querySelectorAll('button').forEach(button => {
            button.style.backgroundColor = '#8b0000';
            button.style.color = '#fff';
          });
        }
      });
      
****
    */  
      
/*
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('colorForm');
        const content = document.getElementById('content');
    
        form.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            applyColorScheme(selectedValue);
        });
    
        function applyColorScheme(daltonismo) {
            switch(daltonismo) {
                case 'protanopia':
                    content.style.backgroundColor = '#42dead'; // Ejemplo de color
                    content.style.color = '#000'; // Ejemplo de color
                    break;
                case 'deuteranopia':
                    content.style.backgroundColor = '#b0b0b0'; // Ejemplo de color
                    content.style.color = '#000'; // Ejemplo de color
                    break;
                case 'tritanopia':
                    content.style.backgroundColor = '#909090'; // Ejemplo de color
                    content.style.color = '#000'; // Ejemplo de color
                    break;
                case 'achromatopsia':
                    content.style.backgroundColor = '#ffffff'; // Ejemplo de color
                    content.style.color = '#000000'; // Ejemplo de color
                    break;
                default:
                    content.style.backgroundColor = '#f0f0f0'; // Color normal
                    content.style.color = '#000'; // Color normal
            }
        }
    });
    
    
});*/
/*
 otra coas

// Cambia el color de fondo de la página
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Cambia el color del texto de un elemento específico
function changeTextColor(elementId, color) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.color = color;
    }
}

// Cambia el color de todos los encabezados <h1>, <h2>, <h3>
function changeHeaderTextColor(color) {
    var headers = document.querySelectorAll('h1, h2, h3');
    headers.forEach(function(header) {
        header.style.color = color;
    });
}

// Cambia el color de fondo de todos los elementos con la clase .boxed
function changeBoxedBackgroundColor(color) {
    var boxedElements = document.querySelectorAll('.boxed');
    boxedElements.forEach(function(element) {
        element.style.backgroundColor = color;
    });
}

// Ejemplo de cómo usar las funciones
changeBackgroundColor('#f0f0f0');  // Cambia el color de fondo a gris claro
changeTextColor('aboutBox', '#333333');  // Cambia el color del texto del elemento con id "aboutBox"
changeHeaderTextColor('#ff0000');  // Cambia el color del texto de todos los encabezados a rojo
changeBoxedBackgroundColor('#e0e0e0');  // Cambia el color de fondo de todos los elementos con la clase "boxed" a gris claro
*/