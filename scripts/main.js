
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
var merge_button = document.querySelector("#merge");
var bubble_button = document.querySelector("#bubble");
var selection_button = document.querySelector("#selection");
var insertion_button = document.querySelector("#insertion");
var quick_button = document.querySelector("#quick");
var heap_button = document.querySelector("#heap");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
// cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    
    cont.innerHTML="";
    
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:#60A5FA; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        
        enable_btns();
    
    }
    
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}


function enable_btns()
{
    merge_button.style="color: var(--dark-gray);"
    bubble_button.style="color: var(--dark-gray);"
    selection_button.style="color: var(--dark-gray);"
    insertion_button.style="color: var(--dark-gray);"
    quick_button.style="color: var(--dark-gray);"
    heap_button.style="color: var(--dark-gray);"

    merge_button.disabled = false;
    bubble_button.disabled= false;
    selection_button.disabled = false;
    insertion_button.disabled = false;
    quick_button.disabled = false;
    heap_button.disabled = false;
    inp_as.disabled = false;
    inp_gen.disabled = false;
    inp_aspeed.disabled = false;
    
}

window.onload=update_array_size();


