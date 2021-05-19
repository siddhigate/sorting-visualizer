var red_color ="#EF4444";
var blue_color="#3B82F6";
var yellow_color ="#F59E0B";
var purple_color="#8B5CF6";

bubble_button.addEventListener("click", Bubble);

function Bubble()
{
    c_delay=0;


    disable_buttons();
    bubble_button.style="background-color:#4B5563; color:white";
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#F59E0B");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#EF4444");//Color update
                div_update(divs[j+1],div_sizes[j+1], "#EF4444");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#EF4444");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#EF4444");//Height update
            }
            div_update(divs[j],div_sizes[j], "#60A5FA");//Color updat
        }
        div_update(divs[j],div_sizes[j], "#3B82F6");//Color update
    }
    div_update(divs[0],div_sizes[0], "#3B82F6");//Color update

    enable_buttons();
}
