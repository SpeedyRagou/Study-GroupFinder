function init() {
    id = "gruppen";
    var tab = document.getElementById(id);
    tab.style.display = "block";

    id = "gruppenbutton";
    var tab = document.getElementById(id);
    tab.className += " active";
    openChat(-1);
    selectTab(0);
    showHelp(3);
    getStud();
    selectTabC(0);
    showHelpC(3);
    getStudC();
    selectKategorie(0);
}

function tabopen(event, id) {

    var tabs = document.getElementsByClassName("tabinhalt");
    console.log(tabs.length);

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    var tabbuttons = document.getElementsByClassName("tablinks");
    console.log(tabbuttons.length);

    for (var i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    var tab = document.getElementById(id);
    tab.style.display = "block";
    event.currentTarget.className += " active"

}

function selectKategorie(index) {


    /*
    Order: Home, Filter, Suchergebnisse, Neue Gruppe, Profil, Gruppen, Chats, Person
    */
    var kat = document.querySelectorAll(".kategorien");
    var workbenches = document.querySelectorAll(".workbench");

    workbenches.forEach(function (node) {
        node.style.display = "none";
    });
    workbenches[index].style.display = "block";
}

function openChat(index) {
    selectKategorie(6);
    var buttons = document.querySelectorAll(".chatButtons");
    var chats = document.querySelectorAll(".chatNumber");

    chats.forEach(function (node) {
        node.style.display = "none";
    });
    if (index != -1) {
        chats[index].style.display = "block";
        
        var idChatButton = "newChat" + index;
        document.getElementById(idChatButton).style.display = "block";
    }
}

function enter(index, e){
    if(e.keyCode == 13){
        newMessage(index);
    }
}

function newMessage(index){

    var tmp = "#chat"+index;
    var chat = document.querySelector(tmp);
    var tmp2 = "chatInput"+index;
    
    var today = new Date();
    var time;
    if(today.getHours() < 10){
        time = "0" + today.getHours() + ":";
    } else {
        time = today.getHours() + ":";
    }
    if(today.getMinutes() < 10){
        time += "0" + today.getMinutes();
    } else {
        time += today.getMinutes();
    }
      

    if(document.getElementById(tmp2).value === ""){
        
    }else{

        var div = '<div class="container darker right"><div class="user"><p>Max Mustermann</p><img src="pngs/avatar_2.png" alt="Avatar" class="right" style="width:100%;"></div><p>'+document.getElementById(tmp2).value+'</p><span class="time-left">'+time+'</span></div>';
        chat.innerHTML +=div;
    
        document.getElementById("chatInput" + index).value = "";

    }
    
}

function newGroup() {
    selectKategorie(3);
}

function search() {
    selectKategorie(1)
}

function openProfil() {
    selectKategorie(4)
}

function openPerson(name) {
    selectKategorie(7);
    console.log(name);
    
    var persons = document.querySelectorAll(".personNumber");

    persons.forEach(function (node) {
        node.style.display = "none";
    });
    
    for(var i = 0; i < persons.length; i++){
        if (persons[i].id == name) {
            persons[i].style.display = "block";
        }
    }
}

function eingabePlaceholder(event) {
    var leiste = event.currentTarget;

    leiste.removeAttribute("placeholder");

    leiste.style.textAlign = "left";

}

function returnPlaceholder(event) {
    var leiste = event.currentTarget;

    leiste.setAttribute("placeholder", "Eingabe ...");
    leiste.style.textAlign = "center";
}


/*TIM: Filter functions */

var help2 = 0;
var help1 = 0;
var help0 = 0;

function selectTab(index) {

    var buttons = document.querySelectorAll(".selectButton");
    var tabs = document.querySelectorAll(".tabContent");

    buttons.forEach(function (node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });

    if (index == 2) {
        buttons[index - 2].style.backgroundColor = '#f5f0e1';
        buttons[index - 2].style.color = "#1e3d59";
    } else {
        buttons[index].style.backgroundColor = '#f5f0e1';
        buttons[index].style.color = "#1e3d59";
    }



    tabs.forEach(function (node) {
        node.style.display = "none";
    });

    tabs[index].style.display = "block";
    tabs[index].style.backgroundColor = '#f5f0e1';
}

function getStud() {
}

function safeDate() {
    selectTab(0);
}

function back() {
    selectTab(0);
}

function showHelp(index) {

    var container = document.querySelectorAll(".helpContainer");

    container.forEach(function (node) {
        node.style.display = "none";
    })
    if (index == 2) {
        help2 += 1;
        if (help2 % 2 == 1) {
            container[index].style.display = "block";
        } else {
            container[index].style.display = "none";
        }
    } else if (index == 1) {
        help1 += 1;
        if (help1 % 2 == 1) {
            container[index].style.display = "block";
        } else {
            container[index].style.display = "none";
        }
    } else if (index == 0) {
        help0 += 1;
        if (help0 % 2 == 1) {
            container[index].style.display = "block";
        } else {
            container[index].style.display = "none";
        }
    }
}

function searchPerson() {
    
    selectKategorie(7);
    openPerson("Klaus Müller");
}

function searchGroup() {
    loadGroup(2);
    //macht Gruppe beitreten button sichtbar
    document.getElementById("joingroup").style.visibility = "visible";
}



/* NIKLAS: Create functions */

var help2C = 0;
var help1C = 0;
var help0C = 0;

function selectTabC(index) {

    var buttons = document.querySelectorAll(".selectButtonC");
    var tabs = document.querySelectorAll(".tabContentC");

    buttons.forEach(function (node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });

    tabs.forEach(function (node) {
        node.style.display = "none";
    });

    tabs[index].style.display = "block";
    tabs[index].style.backgroundColor = '#f5f0e1';
}

function getStudC() {
}

function safeDateC() {
    selectTabC(0);
}

function backC() {
    selectTabC(0);
}

function showHelpC(index) {

    var container = document.querySelectorAll(".helpContainerC");

    container.forEach(function (node) {
        node.style.display = "none";
    })
    if (index == 2) {
        help2C += 1;
        if (help2C % 2 == 1) {
            container[index].style.display = "block";
        } else {
            container[index].style.display = "none";
        }
    } else if (index == 1) {
        help1C += 1;
        if (help1C % 2 == 1) {
            container[index].style.display = "block";
        } else {
            container[index].style.display = "none";
        }
    } else if (index == 0) {
        help0C += 1;
        if (help0C % 2 == 1) {
            container[index].style.display = "block";
        } else {
            container[index].style.display = "none";
        }
    }
}


/* Group info */

class Group {
    constructor(mitglieder, name, max_mitglieder, media, lernort, fach, beschreibung, zeiten) {
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

    addMedia(new_media) {
        this.media.push(new_media);
    }

    removeMitglied(old_mitglied) {
        var pos = this.mitglieder.indexof(old_mitglied);
        this.mitglieder.splice(pos, 1);
    }

    removeMedia(old_media) {
        var pos = this.media.indexof(old_media);
        this.media.splice(pos, 1);
    }

}

class Person {
    constructor(name) {
        this.name = name;
    }
}

var persons = [];
var names = ["Max Mustermann", "Gustav Gans", "Klaus Müller", "Lara Croft", "Anna Mühlheim", "Daniel Bach"];
for (let index = 0; index < names.length; index++) {
    persons.push(new Person(names[index]));
}


//Erstellt Testset an Gruppen
var titel = ["Die furiosen Fünf", "1, 2, 3 und 4", "Öfter unterwegs", "Prokrastination for the Win"];
var mitgl = [[persons[0], persons[1], persons[2]], [persons[4], persons[1], persons[0], persons[5]], [persons[1], persons[4], persons[0]], [persons[2], persons[1], persons[0], persons[5]]];
var max = [6, 8, 5, 10];
var med = [["WhatsApp", "Discord"], ["E-Mail"], ["Telegram"], ["SMS", "WhatsApp", "Discord"]];
var fach = ["It-Security", "Lineare Algebra 1", "Mensch-Computer-Interaktion", "Rechnerachitektur"];
var lernort = [["Online"], ["Online"], ["Bibliothek", "Online"], ["Uni-Lernraum", "Bei Klaus zuhause"]];
var beschreibung = ["Wir sind hier um furios zu sein. Genau so lernen wir auch. Deswegen suchen wir Personen die genau so furios sind!", "Alles was wir machen, machen wir um besser im Studium zu werden. Wir suchen fleißige Mitglieder, die genauso ergeizig sind wie wir!", "Wir lernen eher unregelmäßig, aber das soll uns ja nicht aufhalten :).", "Lasst uns gemeinsam Prokrastinieren!"];
var zeiten = ["Fr", "Fr, 14:00 - 17:00", "Do, 12:00 - 13:00 | Mo, 12:00 - 16:00", "Di"];
var groups = [];
for (let index = 0; index < titel.length; index++) {
    groups.push(new Group(mitgl[index], titel[index], max[index], med[index], lernort[index], fach[index], beschreibung[index], zeiten[index]));

}

//pos ist der index im groups array
function loadGroup(pos) {

    selectKategorie(5);
    var group = groups[pos];
    
    //entfernt Gruppe beitreten button
    document.getElementById("joingroup").style.visibility = "hidden";

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
        
        el.onclick = function(){
            openPerson(element.name)
        };
        personen.appendChild(el);
    });

    //sets the modul of the group to the view
    var mod = document.getElementById("mod");
    mod.innerHTML = "Modul: " + group.fach;

    // sets all the lernort of the view
    var ort = document.getElementById("ort");
    var msg = "";

    //formats the data
    if (group.lernort.length <= 1) {
        if (group.lernort.length == 0) {

        } else {
            msg = group.lernort[0];
        }
    } else {
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
    if (group.media.length <= 1) {
        if (group.media.length <= 0) {

        } else {
            msg = group.media[0];
        }
    } else {
        msg = group.media[0];
        for (let index = 1; index < group.media.length; index++) {
            msg = msg + ", " + group.media[index];

        }
    }

    media.innerHTML = "Media: " + msg;

    //sets the max count of persons in the group to the view
    var anzahl = document.getElementById("mitgliederanzahl");
    anzahl.innerHTML = "Max. Mitglieder: " + group.max_mitglieder.toString();


    // sets the description of the group in the view
    var bes = document.getElementById("beschreibunginhalt");
    bes.innerHTML = group.beschreibung;
}


var numberOfGroups = 4;

function createGroup() {
    var n = document.querySelector("#name").value;
    var b = document.querySelector("#beschreibung").value;
    var s = document.querySelector("#studiengang").value;
    var m = document.querySelector("#modulIn").value;
    var p = document.querySelector("#person").value;
    var o = document.querySelector("#orte").value;
    var sem = document.querySelector("#semester").value; 
    
    var media = "";

    if(document.getElementById("WAin").checked === true){
        media += "Whatsapp ";
    }

    if(document.getElementById("disIn").checked === true){
        if(media === ""){
            media += "Discord ";
        }else{
            media += ",Discord ";
        } 
    }

    if(document.getElementById("mailIn").checked === true){
        if(media === ""){
            media += "E-Mail ";
        }else{
            media += ",E-Mail ";
        }
    }

    if(document.getElementById("teamsIn").checked === true){
        if(media === ""){
            media += "Teams ";
        }else{
            media += ",Teams ";
        }
    }

    var ortList = [o];
    var mediaList = [media];s
    var person = persons[0];
    var mit = [person];
    groups.push(new Group(mit, n, p, mediaList , ortList , m , b, zeiten[0]));



    var groupList = document.getElementById("gruppen");

    var div = '<button class="groupButton" onclick="loadGroup('+ numberOfGroups+ ')">'+n+'</button>';
    

    groupList.innerHTML += div;

    loadGroup(numberOfGroups);

    numberOfGroups +=1;

    

}


function addLink(){
    var linkList = document.getElementById("linksList");

    var link = document.querySelector("#linkIn").value;
    var name = document.querySelector("#linkNameIn").value;

    if(name === "" ||link === ""){

    }else{
        var tmp = ' <a href="'+link+'" target="_blank" style="padding-left: 20px;"> ,'+name+'</a>';
        linkList.innerHTML += tmp;
        
        document.querySelector("#linkIn").value = "";
        document.querySelector("#linkNameIn").value = "";

    }
}







