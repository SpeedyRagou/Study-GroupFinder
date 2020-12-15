window.onload = () => {
    selectTab(0);
};

function selectTab(index){

    var buttons = document.querySelectorAll("button");
    var tabs = document.querySelectorAll(".tabContent");
    
    buttons.forEach(function(node){
        node.style.backgroundColor = "";
        node.style.color = "";
    });

    if(index == 2){
        buttons[index-2].style.backgroundColor = '#808080';
    }else{
        buttons[index].style.backgroundColor = '#808080';                          
    }

    

    tabs.forEach(function(node){
        node.style.display="none";
    });

    tabs[index].style.display="block";
    tabs[index].style.backgroundColor = '#808080'; 
}

function safeDate(){
    selectTab(0);
}

function showHelp(){
    
}
