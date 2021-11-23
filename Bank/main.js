const uplata = document.getElementById("uplata");
const isplata = document.getElementById('isplata');
const najveciR = document.querySelector('.najRacun');
let klijent;

sviKlijenti = [];



function napraviKlijenta(ime, racun){
    this.ime = ime;
    
    this.racun = racun;

    this.prikaziSe = function(){
        const newOption = document.createElement('option');
        

        const optionText = document.createTextNode(this.ime);
       

        newOption.appendChild(optionText);

        return newOption;

    }
} 

function dodajKlijenta(){
    const newName = document.getElementById("ime");
    const newLastName = document.getElementById("prezime");

    const ime = newName.value.trim() + " " + newLastName.value.trim();
    let racun = parseInt(0);
    
    sviKlijenti.push(new napraviKlijenta(ime, racun));

    prikaziKlijente();
    
}

function prikaziKlijente(){
    const korisnici = document.getElementById("korisnici");
    korisnici.innerHTML = "";
    for(let i = 0; i<sviKlijenti.length; i++){
        korisnici.appendChild(sviKlijenti[i].prikaziSe());
    }
}




function snimiTrans(){
    const iznos = document.getElementById("iznos").value;
    
    if(uplata.checked){

        const e = document.getElementById("korisnici");
        let strUser = e.options[e.selectedIndex].text;
        for(let i = 0; i<sviKlijenti.length; i++){
            klijent = sviKlijenti[i];
            if(klijent.ime == strUser){
            klijent.racun += parseInt(iznos);
            console.log(klijent);
            }

        } 
        prikaziIstoriju()
        najRacun()
        
        
    }

       
    

    if(isplata.checked){
        const e = document.getElementById("korisnici");
        let strUser = e.options[e.selectedIndex].text;
        for(let i = 0; i<sviKlijenti.length; i++){
            klijent = sviKlijenti[i];
            if(klijent.ime == strUser){
            klijent.racun -= parseInt(iznos);
            console.log(klijent);
            }

        }
    }
    prikaziIstoriju()
    najRacun()
    

  
}

function prikaziIstoriju(){
    const istorija = document.querySelector(".istorijaKlijenata");
    let ko;
    let result = "";
    for(let i = 0; i<sviKlijenti.length; i++){
        ko = sviKlijenti[i].ime + " " + sviKlijenti[i].racun + '<br>';
        result += ko;
    }
    istorija.innerHTML = result;
}

function najRacun(){
    let max = 0;
    let winner;
    

   for(let i = 0; i<sviKlijenti.length; i++){
    
       if(sviKlijenti[i].racun > max){
           max = sviKlijenti[i].racun
           winner = sviKlijenti[i].ime + " " + max
       }
   }

    najveciR.innerHTML = winner;
}




