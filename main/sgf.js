function init(){
    id = "gruppen";
    var tab = document.getElementById(id);
    tab.style.display = "block";

    id = "gruppenbutton"; 
    var tab = document.getElementById(id);
    tab.className += " active";
    openChat(-1);
    openGroup(-1);
    selectTab(0);
    showHelp(3);
    getStud();
    selectTabC(0);
    showHelpC(3);
    getStudC();
    selectKategorie(0);
}

function tabopen(event, id){

    var tabs = document.getElementsByClassName("tabinhalt");
    console.log(tabs.length);

    for(var i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
    }

    var tabbuttons = document.getElementsByClassName("tablinks");
    console.log(tabbuttons.length);

    for(var i = 0; i < tabbuttons.length; i++){
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    var tab = document.getElementById(id);
    tab.style.display = "block";
    event.currentTarget.className += " active"

}

function selectKategorie(index){


    /*
    Order: Home, Filter, Suchergebnisse, Neue Gruppe, Profil, Gruppen, Chats, Person
    */
    var kat = document.querySelectorAll(".kategorien");
    var workbenches = document.querySelectorAll(".workbench");

    workbenches.forEach(function (node){
        node.style.display ="none";
    });
    workbenches[index].style.display = "block";
}

function openGroup(index){
    selectKategorie(5);
    var buttons = document.querySelectorAll(".groupButtons");
    var group = document.querySelectorAll(".groupNumber");

    group.forEach(function (node){
        node.style.display ="none";
    });
    if(index != -1){
       group[index].style.display = "block"; 
    }
}

function openChat(index){
    selectKategorie(6);
    var buttons = document.querySelectorAll(".chatButtons");
    var chats = document.querySelectorAll(".chatNumber");

    chats.forEach(function (node){
        node.style.display ="none";
    });
    if(index != -1){
       chats[index].style.display = "block"; 
    }
}
function addMessage(){
    document.getElementById("newMessage").style.display = "block";
    document.getElementById("sent").value = '';
    document.getElementById("newChat").style.display = 'block';
}

function newGroup(){
    selectKategorie(3);
}

function search(){
    selectKategorie(1)
}

function openProfil(){
    selectKategorie(4)
}

function openPerson(){
    selectKategorie(7);
}

function eingabePlaceholder(event){
    var leiste = event.currentTarget;
    
    leiste.removeAttribute("placeholder");

    leiste.style.textAlign = "left";
    
}

function returnPlaceholder(event){
    var leiste = event.currentTarget;

    leiste.setAttribute("placeholder", "Eingabe ...");
    leiste.style.textAlign = "center";
}


/*TIM: Filter functions */

var help2 = 0;
var help1 = 0;
var help0 = 0;

function selectTab(index){

    var buttons = document.querySelectorAll(".selectButton");
    var tabs = document.querySelectorAll(".tabContent");
    
    buttons.forEach(function(node){
        node.style.backgroundColor = "";
        node.style.color = "";
    });

    if(index == 2){
        buttons[index-2].style.backgroundColor = '#f5f0e1';
        buttons[index-2].style.color = "#1e3d59";
    }else{
        buttons[index].style.backgroundColor = '#f5f0e1';   
        buttons[index].style.color = "#1e3d59";                       
    }

    

    tabs.forEach(function(node){
        node.style.display="none";
    });

    tabs[index].style.display="block";
    tabs[index].style.backgroundColor = '#f5f0e1'; 
}

function getStud(){
}

function safeDate(){
    selectTab(0);
}

function back(){
    selectTab(0);
}

function showHelp(index){

    var container = document.querySelectorAll(".helpContainer");
 
    container.forEach(function(node){
        node.style.display="none";
    })
    if(index == 2){
        help2 +=1;
        if(help2%2 == 1){
            container[index].style.display = "block";
        }else{
            container[index].style.display = "none";
        }   
    } else if(index == 1){
        help1 +=1;
        if(help1%2 == 1){
            container[index].style.display = "block";
        }else{
            container[index].style.display = "none";
        }
    }else if(index == 0){
        help0 +=1;
        if(help0%2 == 1){
            container[index].style.display = "block";
        }else{
            container[index].style.display = "none";
        }
    } 
}

function searchPerson(){
    selectKategorie(7);
}

function searchGroup(){
    selectKategorie(2);
}



/* NIKLAS: Create functions */

var help2C = 0;
var help1C = 0;
var help0C = 0;

function selectTabC(index){

    var buttons = document.querySelectorAll(".selectButtonC");
    var tabs = document.querySelectorAll(".tabContentC");
    
    buttons.forEach(function(node){
        node.style.backgroundColor = "";
        node.style.color = "";
    });    

    tabs.forEach(function(node){
        node.style.display="none";
    });

    tabs[index].style.display="block";
    tabs[index].style.backgroundColor = '#f5f0e1'; 
}

function getStudC(){
}

function safeDateC(){
    selectTabC(0);
}

function backC(){
    selectTabC(0);
}

function showHelpC(index){

    var container = document.querySelectorAll(".helpContainerC");
 
    container.forEach(function(node){
        node.style.display="none";
    })
    if(index == 2){
        help2C +=1;
        if(help2C%2 == 1){
            container[index].style.display = "block";
        }else{
            container[index].style.display = "none";
        }   
    } else if(index == 1){
        help1C +=1;
        if(help1C%2 == 1){
            container[index].style.display = "block";
        }else{
            container[index].style.display = "none";
        }
    }else if(index == 0){
        help0C +=1;
        if(help0C%2 == 1){
            container[index].style.display = "block";
        }else{
            container[index].style.display = "none";
        }
    } 
}

function createGroup(){
    selectKategorie(0);
}






