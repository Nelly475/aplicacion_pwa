var reques = new XMLHttpRequest();

reques.open('GET', 'https://reqres.in/api/users', true);
reques.send(null);

reques.onreadystatechange = function(state){
    if (reques, readyState === 4){
        var resp = reques.response;
        var respObj = JSON.parse(resp);

        console.log(respObj);
    }
};