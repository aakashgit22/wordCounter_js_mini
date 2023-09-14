let textbox = document.getElementById("textbox");
textbox.addEventListener('input',function(){
    var text = this.value;
    // console.log(text);
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    // to remove extra spaces in starting and end
text = text.trim();
//  to split agter space 
let words= text.split(" ");

// to remove extra spaces in b/w
let cleanList = words.filter(function(elm){
    return elm != "";         })

// console.log(words);
document.getElementById("word").innerHTML = cleanList.length;

});