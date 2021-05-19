var red_color ="#EF4444";
var blue_color="#3B82F6";
var yellow_color ="#F59E0B";
var purple_color="#8B5CF6";

quick_button.addEventListener("click", Quick);

function Quick()
{
    c_delay=0;
    disable_buttons();
    quick_button.style="background-color:#4B5563; color:white"
    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = div_sizes[start] ;//make the first element as pivot element.
    div_update(divs[start],div_sizes[start],yellow_color);//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv)
            {
                div_update(divs[j],div_sizes[j],yellow_color);//Color update

                div_update(divs[i],div_sizes[i],red_color);//Color update
                div_update(divs[j],div_sizes[j],red_color);//Color update

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],red_color);//Height update
                div_update(divs[j],div_sizes[j],red_color);//Height update

                div_update(divs[i],div_sizes[i],purple_color);//Height update
                div_update(divs[j],div_sizes[j],purple_color);//Height update

                i += 1;
            }
    }
    div_update(divs[start],div_sizes[start],red_color);//Color update
    div_update(divs[i-1],div_sizes[i-1],red_color);//Color update
    
    var temp=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[start],div_sizes[start],red_color);//Height update
    div_update(divs[i-1],div_sizes[i-1],red_color);//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],blue_color);//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }
