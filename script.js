let arr=["red","blue","green","pink","orange"];
let i=0;
function change()
{
        const txt=document.getElementById("text");
        const bt=document.getElementById("btn");
        document.getElementById('section').style.backgroundColor=arr[i];
        bt.style.backgroundColor=arr[i];

        if(arr[i]=="red")
        {
                txt.innerText="Background Color : Red";
        }
        else if(arr[i]=="blue")
        {
                txt.innerText="Background Color : Blue";
        }
        else if(arr[i]=="green")
        {
                txt.innerText="Background Color : Green";
        }
        else if(arr[i]=="pink")
        {
                txt.innerText="Background Color : Pink";
        }
        else if(arr[i]=="orange")
        {
                txt.innerText="Background Color : Orange";
        }  
        i=(i+1)%arr.length;
}



