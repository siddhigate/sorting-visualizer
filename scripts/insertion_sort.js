var red_color ="#EF4444";
var blue_color="#3B82F6";
var yellow_color ="#F59E0B";
var purple_color="#8B5CF6";

insertion_button.addEventListener("click", Insertion);


function Insertion()
{
    c_delay=0;

    disable_buttons();
    insertion_button.style="background-color:#4B5563; color:white"

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],yellow_color);//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],red_color);//Color update
            div_update(divs[i+1],div_sizes[i+1],red_color);//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],red_color);//Height update
            div_update(divs[i+1],div_sizes[i+1],red_color);//Height update
    
            div_update(divs[i],div_sizes[i],purple_color);//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],yellow_color);//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],purple_color);//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],blue_color);//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],blue_color);//Color update

    enable_buttons();
}
