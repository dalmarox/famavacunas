
document.getElementById("formulario_contacto").addEventListener('submit', (e) => {
        e.preventDefault()
        //Campo nombre
        let name = document.getElementById("name");
        let nameError = document.getElementById("Errorname");
        
        //trim borra los espacios a los lados
        if (name.value.trim() === "") {
            nameError.textContent = "Introduzca un name válido";
            nameError.classList.add("error");
        } else {
            nameError.textContent = "";
            nameError.classList.remove("error");
        }
        //Campo email
        let email = document.getElementById("email");
        let emailError = document.getElementById("ErrorEmail");
        let emailPatron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPatron.test(email.value.trim())) {
            console.log(!emailPatron.test(email.value));
            emailError.textContent = "Introduzca un email válido";
            emailError.classList.add("error");
        } else {
            emailError.textContent = "";
            emailError.classList.remove("error");
        }
        //Si los errores etán vacios (sin contenido) significa que está bien y lo envía
        if (!nameError.textContent && !emailError.textContent) {
            
            Swal.fire(
              'Felicitaciones!',
              'Su mensaje ha sido enviado correctamente!',
              'success'
            )
            document.getElementById("formulario_contacto").reset();
        }
        
    })