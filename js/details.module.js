import { Ui } from "./ui.module.js";

export class Details{
constructor(id){
    document.getElementById('btnClose').addEventListener('click',()=>{
        document.querySelector('.details').classList.add('d-none');
        document.querySelector('.games').classList.remove('d-none')
     })
     
     this.loading =document.querySelector(".loading")
this.getDetails(id);

}


async getDetails(id){
    this.loading.classList.remove('d-none')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a3beb5f59mshec0b8734f0c4818p1182fbjsn454cb91769ad',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
    const response = await api.json();
    this.loading.classList.add('d-none')

    console.log(response);
    new Ui().displayDetails(response);

}
}
