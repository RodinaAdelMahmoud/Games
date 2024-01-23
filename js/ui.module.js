
export class Ui {
    displayGame(data){
        let cartona =``;
        for (let i = 0; i < data.length; i++) {
            cartona +=`   <div class="col mb-3">
            <div data-id="${data[i].id}" class="card h-100 bg-transparent text-white">
               <div class="card-body ">
                  <figure class="position-relative" id="gameImg">
                     <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}"/>
                  
                  </figure>
      
                  <figcaption>
      
                     <div class=" d-flex justify-content-between" >
                        <h3 class="h6 small" id="title">${data[i].title}</h3>
                        <span class="badge text-bg-primary p-2 mb-3">Free</span>
                     </div>
      
                     <p class="card-text small text-center opacity-50" id="desc">
                        ${data[i].short_description.split(" ", 8)}
                     </p>
      
                  </figcaption>
               </div>
      
               <footer class="card-footer small d-flex justify-content-between" >
      
                  <span class="badge badge-color" id="genre">${data[i].genre}</span>
                  <span class="badge badge-color" id="platform">${data[i].platform}</span>
      
               </footer>
            </div>
         </div>`;

        
        }
        document.getElementById("games").innerHTML = cartona;
    }

    displayDetails(e) {
        const content = `
        <div class="col-md-4">
        <img src="${e.thumbnail}" class="w-100" alt="image details" />
     </div>
     <div class="col-md-8">
        <h3>Title: ${e.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${e.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${e.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${e.status}</span> </p>
        <p class="small">${e.description}</p>
        <a class="btn btn-outline-dark mb-3" target="_blank" href="${e.game_url}">Show Game</a>
   
        <div class="col-md-4 d-flex align-items-center justify-content-center">
        <img src="${e.screenshots[0].image}" class="w-100 pe-3 gallery" alt="image details" />
        <img src="${e.screenshots[1].image}" class="w-100 pe-3 gallery" alt="image details" />
        <img src="${e.screenshots[2].image}" class="w-100 pe-3 gallery" alt="image details" />
     </div>
     </div>
        
        `;
  
        document.getElementById("details").innerHTML = content;
    }
}