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
        buttons[index-2].style.backgroundColor = '#28497c';
        buttons[index-2].style.color = "#a5c8fa";
    }else{
        buttons[index].style.backgroundColor = '#28497c';   
        buttons[index].style.color = "#a5c8fa";                       
    }

    

    tabs.forEach(function(node){
        node.style.display="none";
    });

    tabs[index].style.display="block";
    tabs[index].style.backgroundColor = '#28497c'; 
}

function safeDate(){
    selectTab(0);
}

function showHelp(){
    
}
