//https://reqres.in/api/users

let usuario ={
    nombre: 'Luism20',
    edad: 22
};

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify('usuario'),
    headers: {
        'content_Type': 'application/json'
    }
})

.then( res => Response.json())
.then(console.log)
.catch(console.error);
 console.log('Error en la app');
 console.log(error);
});