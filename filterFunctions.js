function filterinit(){

    selectTab(0);
    showHelp(3);
    getStud();

}

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

function getStudC(){
}

function safeDateC(){
    selectTab(0);
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
