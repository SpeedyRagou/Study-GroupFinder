window.onload = () => {
    selectTab(0);
    showHelp(3)
    getStud();
};

var help2 = 0;
var help1 = 0;
var help0 = 0;

function selectTab(index){

    var buttons = document.querySelectorAll("button");
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
