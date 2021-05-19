
var speed=1000;

inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        
    console.log("enable")
    merge_button.style="color: var(--dark-gray);"
    bubble_button.style="color: var(--dark-gray);"
    selection_button.style="color: var(--dark-gray);"
    insertion_button.style="color: var(--dark-gray);"
    quick_button.style="color: var(--dark-gray);"
    heap_button.style="color: var(--dark-gray);"

    merge_button.style = "pointer-events:all";
    insertion_button.style = "pointer-events:all";
    selection_button.style = "pointer-events:all";
    bubble_button.style = "pointer-events:all";
    heap_button.style = "pointer-events:all";
    quick_button.style = "pointer-events:all";
    inp_as.disabled = false;
    inp_gen.disabled = false;
    inp_aspeed.disabled = false;
    },c_delay+=delay_time);
}

function disable_buttons(){

    merge_button.style = "pointer-events:none";
    insertion_button.style = "pointer-events:none";
    selection_button.style = "pointer-events:none";
    bubble_button.style = "pointer-events:none";
    heap_button.style = "pointer-events:none";
    quick_button.style = "pointer-events:none";
    
    inp_as.disabled = true;
    inp_gen.disabled = true;
    inp_aspeed.disabled = true;
}