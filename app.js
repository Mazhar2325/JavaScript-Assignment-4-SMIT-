let originalText = "I love my country Pakistan. <br> I like my city Faisalabad. <br> I love my home land."
document.getElementById("originalTextBox").innerHTML = originalText;

//lower Case
function lowerCase(){
    let lowerCaseText =  originalText.toLowerCase();
document.getElementById("output").innerHTML = lowerCaseText;
}

//upper Case
function upperCase(){
    let upperCaseText =  originalText.toUpperCase();
document.getElementById("output").innerHTML = upperCaseText;
}

//Capitalize a Text
function CapitalizeText(){
    let PascalCase = '<span style="text-transform: capitalize;">' + originalText +'</span>'
    document.getElementById("output").innerHTML = PascalCase;
}

// Better Formatting
function betterFormatting() {
   let text = document.getElementById("inputArea").value;
//    if (text === "")
     if(!text)
{
    alert("Please type your text");
    return;
   }
   text = text.lowerCase();
   document.getElementById("output").style.textTransform =  'capitalize';
   document.getElementById("output").innerHTML = text;
}