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


//Erstellt Testset an Gruppen
var titel = ["Die furiosen Fünf", "1, 2, 3 und 4", "Öfter unterwegs", "Prokrastination for the Win"];
var mitgl = [[persons[0], persons[1], persons[2]], [persons[4], persons[1], persons[0], persons[5]], [persons[1], persons[4],persons[0]], [persons[2], persons[1], persons[0], persons[5]]];
var max = [6,8,5,10];
var med = [["WhatsApp", "Discord"], ["E-Mail"], ["Telegram"], ["SMS", "WhatsApp", "Discord"]];
var fach = ["It-Security", "Lineare Algebra 1", "Mensch-Computer-Interaktion", "Rechnerachitektur"];
var lernort = [["Online"], ["Online"], ["Bibliothek", "Online"], ["Uni-Lernraum", "Bei Klaus zuhause"]];
var beschreibung = ["Wir sind hier um furios zu sein. Genau so lernen wir auch. Deswegen suchen wir Personen die genau so furios sind!", "Alles was wir machen, machen wir um besser im Studium zu werden. Wir suchen fleißige Mitglieder, die genauso ergeizig sind wie wir!", "Wir lernen eher unregelmäßig, aber das soll uns ja nicht aufhalten :).", "Lasst uns gemeinsam Prokrastinieren!"];
var zeiten = ["Freitag", "Freitag,14:00 - 17:00", "Donnerstag,12:00 - 13:00|Montag,12:00 - 16:00", "Dienstag"];
var groups = [];
for (let index = 0; index < titel.length; index++) {
    groups.push(new Group(mitgl[index], titel[index], max[index], med[index], lernort[index], fach[index], beschreibung[index], zeiten[index]));
    
}

//pos ist der index im groups array
function loadGroup(pos) {
    var group = groups[pos];

    //Setzt den Namen der gruppe in der View
    var groupname = document.getElementById("groupname");
    groupname.innerHTML = group.name;

    
    var personen = document.getElementById("personen");

    //deletes all persons from view
    personen.innerHTML = '';

    //adding all person from group to view
    group.mitglieder.forEach(element => {
        var el = document.createElement("div");
        el.innerHTML = element.name;
        personen.appendChild(el);
    });

    //sets the modul of the group to the view
    var mod = document.getElementById("modul");
    mod.innerHTML = "Modul: " + group.fach;

    // sets all the lernort of the view
    var ort = document.getElementById("ort");
    var msg = "";

    //formats the data
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


    //sets the media for the view
    var media = document.getElementById("media");

    msg = "";

    //formats the media data
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

    //sets the max count of persons in the group to the view
    var anzahl = document.getElementById("mitgliederanzahl");
    anzahl.innerHTML = "Max. Mitglieder: " + group.max_mitglieder.toString();

    //sets the timetable
    var zeiten = group.zeiten
    var timecontainer = document.getElementById("timecontainer");
    timecontainer.innerHTML = '';
    zeiten.split("|").forEach(time => {
        var new_str = time.split(",");
        var el = document.createElement("div");
        
        el.innerHTML = new_str[0]
        if(new_str.length > 1){
            el.innerHTML += "<br>" + new_str[1];
        }
             
        
        el.className = "infotext"
        timecontainer.appendChild(el);
        
    });


    // sets the description of the group in the view
    var bes = document.getElementById("beschreibunginhalt");
    bes.innerHTML = group.beschreibung;
}