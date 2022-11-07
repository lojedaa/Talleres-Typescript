import {Serie} from "./Serie.js";
import { dataSeries } from "./data.js";
console.log(dataSeries);

let seriesTable = document.getElementById("id_series")!;
let promedioTable = document.getElementById("avg")!;
let cards= document.getElementById("cards")!;
let botones= document.getElementsByClassName("btn")!;

datosSeries(dataSeries);
promedio(dataSeries);
actualizarCards();

function datosSeries(array: Serie[]):void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for(let sr of array){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML =   `<th scope="row">${sr.id}</th>
                                <td><input type="button" value="${sr.name}" id=${sr.id} class="btn" style="color:blue"></input></td>
                                <td>${sr.chanel}</td>
                                <td>${sr.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}

function promedio(array: Serie[]):void{
    let arrayTemporadas:number[] = []
    for(let sr of array){
        arrayTemporadas.push(sr.seasons);
    }
    let suma =  arrayTemporadas.reduce((previous, current) => current += previous);
    let promedio:number = suma / arrayTemporadas.length;
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Seasons avarege: </b></td><td>${promedio}</td>`;
    promedioTable.appendChild(trElement);
}

function InfoSerie(serie: Serie):void
{
    let html =   `<img class="card-img-top" src="${serie.image}" alt="Card image cap">
                    <div class="card-body">
                    <h5>${serie.name}</h5>
                    <p class="card-text">${serie.description}\n</p>
                    <p class="card-text" style="color:blue">${serie.link}</p>
                    </div>`
    cards.innerHTML = html;
}

function actualizarCards():void{
    for (var i = 0; i < botones.length; i++) 
    {
        let button: HTMLElement = document.getElementById(botones[i].id)!;
        let serie: Serie = dataSeries[Number(botones[i].id)-1];
        button.addEventListener("click", (e:Event) => InfoSerie(serie));
    }
}
