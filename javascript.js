
//convert text to emoji
function func1()
{
    let a = document.getElementById("enter").value;
    let arr1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",",",".","'"];
    let arr2 = ["\u{1F600}","\u{1F60B}","\u{1F634}","\u{1F976}","\u{1F92F}","\u{1F910}","\u{1F606}","\u{1F60D}","\u{1F617}","\u{1F975}","\u{1F605}","\u{1F496}","\u{1F49C}","\u{1F499}","\u{1F4AF}","\u{1F9D0}","\u{1F643}","\u{1F9D2}","\u{1F47C}","\u{1F64F}","\u{1F607}","\u{1F601}","\u{1F602}","\u{1F642}","\u{1F970}","\u{1F929}","\u{1F61D}","\u{1F3C2}","\u{1F6A3}","\u{1F3CB}","\u{1F6B4}","\u{1F93D}","\u{1F93E}","\u{1F6C0}","\u{1F46D}","\u{1F46C}","\u{1F46A}","\u{1F468}","\u{1F5E3}","\u{1F415}","\u{1F984}","\u{1F426}","\u{1F42C}","\u{1F432}","\u{1F338}","\u{1F339}","\u{1F332}","\u{1F609}","\u{1F341}","\u{1F96D}","\u{1F349}","\u{1F347}","\u{1F34F}","\u{1F35E}","\u{1F957}","\u{1F36D}"];
    let arr3 = [];

    for(let i=0;i<a.length;i++)
    {
        for (let j = 0; j < 56; j++) 
        {
            if(a[i]==arr1[j])
            {
                arr3.push(arr2[j]);
                arr3.push("\u{1F603}");
                break;
            }
        }
    }
    document.getElementById("demo").innerHTML = arr3.join("");
}

//convert emoji to text
function func2()
{
    // let a = (document.getElementById("enter").value).codePointAt(0).toString(16);
    let a = [];
    let size = (document.getElementById("enter").value);
    let i = 0;
    for (let x = 0; x <size.length; x+=2) {
        a[i] = (document.getElementById("enter").value).codePointAt(x).toString(16);
        i++;
    }
    console.log(a.length)
    let b = document.getElementById("enter").value;
    let c = (document.getElementById("enter").value).codePointAt(0).toString(16);
    console.log(a , b);

    let arr1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",",",".","'"];
    let arr2 = ["1f600","1f60b","1f634","1f976","1f92f","1f910","1f606","1f60d","1f617","1f975","1f605","1f496","1f49c","1f499","1f4af","1f9d0","1f643","1f9d2","1f47c","1f64f","1f607","1f601","1f602","1f642","1f970","1f929","1f61d","1f3c2","1f6a3","1f3cb","1f6b4","1f93d","1f93e","1f6c0","1f46d","1f46c","1f46a","1f468","1f5e3","1f415","1f984","1f426","1f42c","1f432","1f338","1f339","1f332","1f609","1f341","1f96d","1f349","1f347","1f34f","1f35e","1f957","1f36d"];
    let arr3 = [];

    for(let i=0;i<a.length;i++)
    {
        for (let j = 0; j < 56; j++) 
        {
            if(a[i]==arr2[j])
            {
                arr3.push(arr1[j]);
                break;
            }
        }
    }
    document.getElementById("demo").innerHTML = arr3.join("");
}

