let btn = document.getElementById("btn")

btn.onclick = function(){
    fetch('https://fakestoreapi.com/products?limit=40')
    .then(Response => Response.json())
    .then(data =>
        {
            let users = '';
                        data.forEach(user => {
                            users+= `
                            <div class="col-lg-3">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="${user.image}" alt="Card image cap">
                                <div class="card-body">
                                <h5 class="card-title" id="new">${user.title}</h5>
                                <p class="card-text">${user.price} ${"$"}</p>
                                <p class="card-text">${user.category}</p>                                
                                <a href="#" class="btn btn-primary">To buy</a>
                              </div>
                            </div>
                        </div>
                        `;    
                        });
                        
                        let ength = document.getElementById("new")
                        console.log(ength);



                

                    let div = document.getElementById("div")
                     div.innerHTML=users                  
                    }
                    )
                    
                    
            

    .catch(error => console.log(error))
    

}