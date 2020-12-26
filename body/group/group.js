class Group{
    constructor(mitglieder, name, max_mitglieder, media, lernort, fach, beschreibung, zeiten){
        this.mitglieder = mitglieder;
        this.name = name;
        this.beschreibung = beschreibung;
        this.media = media;
        this.lernort = lernort;
        this.fach = fach;
        this.max_mitglieder = max_mitglieder;
        this.zeiten = zeiten;
    }

    addMitglied(new_mitglied) {
        this.mitglieder.push(new_mitglied);
    }

    addMedia(new_media){
        this.media.push(new_media);
    }

    removeMitglied(old_mitglied){
        var pos = this.mitglieder.indexof(old_mitglied);
        this.mitglieder.splice(pos, 1);
    }

    removeMedia(old_media){
        var pos = this.media.indexof(old_media);
        this.media.splice(pos, 1);
    }

}

class Person{
    constructor(name){
        this.name = name;
    }
}

var persons = [];
var names = ["Malte Kuhlmann", "Gustav Gans", "Klaus Müller", "Lara Croft", "Anna Mühlheim", "Daniel Bach"];
for (let index = 0; index < names.length; index++) {
    persons.push(new Person(names[index]));
}

var titel = ["Die furiosen Fünf", "1, 2, 3 und 4", "Öfter unterwegs", "Prokrastination for the Win"];
var mitgl = [[persons[0], persons[1], persons[2]], [persons[4], persons[1], persons[0], persons[5]], [persons[1], persons[4],persons[0]], [persons[2], persons[1], persons[0], persons[5]]];
var max = [6,8,5,10];
var med = [["WhatsApp", "Discord"], ["E-Mail"], ["Telegram"], ["SMS", "WhatsApp", "Discord"]];
var fach = ["It-Security", "Lineare Algebra 1", "Mensch-Computer-Interaktion", "Rechnerachitektur"];
var lernort = [["Online"], ["Online"], ["Bibliothek", "Online"], ["Uni-Lernraum", "Bei Klaus zuhause"]];
var beschreibung = ["Wir sind hier um furios zu sein. Genau so lernen wir auch. Deswegen suchen wir Personen die genau so furios sind!", "Alles was wir machen, machen wir um besser im Studium zu werden. Wir suchen fleißige Mitglieder, die genauso ergeizig sind wie wir!", "Wir lernen eher unregelmäßig, aber das soll uns ja nicht aufhalten :).", "Lasst uns gemeinsam Prokrastinieren!"];
var zeiten = ["Fr", "Fr, 14:00 - 17:00", "Do, 12:00 - 13:00 | Mo, 12:00 - 16:00", "Di"];
var groups = [];
for (let index = 0; index < titel.length; index++) {
    groups.push(new Group(mitgl[index], titel[index], max[index], med[index], lernort[index], fach[index], beschreibung[index], zeiten[index]));
    
}


function loadGroup(pos) {
    var group = groups[pos];

    var groupname = document.getElementById("groupname");
    groupname.innerHTML = group.name;

    var personen = document.getElementById("personen");
    personen.innerHTML = '';

    console.log(personen);

    group.mitglieder.forEach(element => {
        var el = document.createElement("div");
        el.innerHTML = element.name;
        personen.appendChild(el);
    });

    var mod = document.getElementById("modul");
    mod.innerHTML = "Modul: " + group.fach;

    var ort = document.getElementById("ort");
    var msg = "";
    if(group.lernort.length <= 1){
        if(group.lernort.length == 0){

        }else{
            msg = group.lernort[0];
        }
    }else{
        msg = group.lernort[0];
        for (let index = 1; index < group.lernort.length; index++) {

            msg = msg + ", " + group.lernort[index];
        }
    }

    ort.innerHTML = "Lernort: " + msg

    var media = document.getElementById("media");

    msg = "";
    if(group.media.length <= 1){
        if(group.media.length <= 0){

        }else{
            msg = group.media[0];
        }
    }else{
        msg = group.media[0];
        for (let index = 1; index < group.media.length; index++) {
            msg = msg + ", " + group.media[index];
            
        }
    }

    media.innerHTML = "Media: " + msg;

    var anzahl = document.getElementById("mitgliederanzahl");
    anzahl.innerHTML = "Max. Mitglieder: " + group.max_mitglieder.toString();

    var bes = document.getElementById("beschreibunginhalt");
    bes.innerHTML = group.beschreibung;
}