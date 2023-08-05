function mostrarDatos() {
    const formulario = document.getElementById("formulario");
        
    const nombres = formulario.elements["form_nombre"].value;
    const apellidos = formulario.elements["form_apellidos"].value;
    const telefono = formulario.elements["form_telefono"].value;
    const correo = formulario.elements["form_correo"].value;
    const fechaNacimiento = formulario.elements["form_fn"].value;
    const mensaje = formulario.elements["form_mensaje"].value;

    alert("Datos ingresados:\n\n" +
          "Nombres: " + nombres + "\n" +
          "Apellidos: " + apellidos + "\n" +
          "Número telefónico: " + telefono + "\n" +
          "Correo electrónico: " + correo + "\n" +
          "Fecha de nacimiento: " + fechaNacimiento + "\n" +
          "Mensaje: " + mensaje);
  }
  
  
  
  
  