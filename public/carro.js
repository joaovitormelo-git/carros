fetch("http://localhost:3000/carro").then(res =>{
    if(!res.ok){
        throw new Error(res.status);
    } return res.json();
}).then(data =>{
    let div = document.querySelector("#container")
    data.forEach(carro=> {
       
        let p = document.createElement("p");
        p.innerHTML = `${carro.modelo}`
        div.appendChild(p)
        p.id = 'carro'
    });
}).catch(erro =>{
    console.error(erro)
})