import { Ui } from "./ui.module.js";
import {Details} from "./details.module.js"
 export class games {
   constructor(){
document.querySelectorAll('.nav-link').forEach(link=>{

   link.addEventListener('click',(e)=>{
      this.links(link);
      const category = link.dataset.category;

      this.getGame(category)


   });
});
this.loading =document.querySelector(".loading")
this.details =document.querySelector('.details');
this.games = document.querySelector('.games');
this.ui =new Ui();
this.getGame("mmorpg")

   }


   async links(link){
      document.querySelector('.navbar-nav .active').classList.remove("active");
      link.classList.add("active");
      

   }







   async  getGame(category) {

this.loading.classList.remove('d-none')
      const options = {
         method: 'GET',
         headers: {
            'X-RapidAPI-Key': '8a3beb5f59mshec0b8734f0c4818p1182fbjsn454cb91769ad',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            
         },
      };
   
   
      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
      const response = await api.json();
      this.loading.classList.add('d-none')
console.log(response);
this.ui.displayGame(response);
document.querySelectorAll('.card').forEach(card=>{
   card.addEventListener('click',()=>{

      this.details.classList.remove('d-none');
      this.games.classList.add('d-none');
      new Details(card.dataset.id);

   })
})


   }
   
 }


