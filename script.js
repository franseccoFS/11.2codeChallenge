document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  
    const data = {
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento
    };
  
    const url = 'https://jsonplaceholder.typicode.com/users';
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        displayResponse(data);
      })
      .catch(error => console.error('Error:', error));
  });
  
  function displayResponse(data) {
    const responseContainer = document.getElementById("responseContainer");
    responseContainer.innerHTML = JSON.stringify(data, null, 2);
  }