var red_color ="#EF4444";
var blue_color="#3B82F6";
var yellow_color ="#F59E0B";
var purple_color="#8B5CF6";

selection_button.addEventListener("click", Selection_sort);

function Selection_sort()
{
    c_delay=0;

    disable_buttons();
    selection_button.style="background-color:#4B5563; color:white"
    
    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],red_color);//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],yellow_color);//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],purple_color);//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],red_color);//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],purple_color);//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],red_color);//Height update
            div_update(divs[i],div_sizes[i],red_color);//Height update
            div_update(divs[index_min],div_sizes[index_min],purple_color);//Color update
        }
        div_update(divs[i],div_sizes[i],blue_color);//Color update
    }
    div_update(divs[i],div_sizes[i],blue_color);//Color update

    enable_buttons();
}
