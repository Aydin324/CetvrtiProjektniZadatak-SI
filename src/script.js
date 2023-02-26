function randJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => {
        console.log(res);
        if(!res.ok)
            throw Error("Error on randJoke");
        return res.json();
    })
    .then(data => {
        console.log(data);
        document.getElementById('joke').innerHTML = data.value;
    }).catch(error => {
        console.log(error);
    })
}

fetch('https://api.chucknorris.io/jokes/categories')
    .then(res => {
        console.log(res);
        if(!res.ok)
            throw Error("Error on categories");
        return res.json();
    })
    .then(data => {
        var div = document.getElementById('categories');
        const arr_catg = data;
        for(c in arr_catg){
            console.log(arr_catg[c]);
            div.innerHTML += "<div class='card card-body'><p class='card-text'>" + arr_catg[c] + "</p></div>";
        }
    }).catch(error => {
        console.log(error);
    })
