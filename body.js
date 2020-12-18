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