const searchBar = document.getElementById("text-box");
const fruitNameBox = document.getElementById("notif-text-box");
const calAmtText = document.getElementById("carlorie-amt");
const fatGramText = document.getElementById("fat-grams");
const choGramText = document.getElementById("cho-grams");
const sodGramText = document.getElementById("sod-grams");
const carbGramText = document.getElementById("carb-grams");
const sugarGramText = document.getElementById("sugar-grams");
const proGramText = document.getElementById("pro-grams");

const familyText = document.getElementById("family-text");
const genusText = document.getElementById("genus-text");

async function getFruit(){
    try{
        const response = await fetch("https://www.fruityvice.com/api/fruit/apple")
    
        // if(response){

        // }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}