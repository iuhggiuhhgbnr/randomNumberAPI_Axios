var url = "https://random-data-api.com/api/cannabis/random_cannabis?size=1";
var url2 = "https://reqres.in/api/users";

var rapidCall = setInterval(getNumber,1000)
//var rapidCall = setTimeout(getNumber,2000)
function getNumber(){
    axios.get(url).then(incident => {
        //console.log(incident)
        const users = incident.data;
        //console.log(users)
        //console.log(users[0])
        //console.log(users[0].id)
        appendDataToElement(users[0].id)
        appendUidToElement(users[0].uid)
    }) 
}


function appendDataToElement(idValue){
    var getPElemt = document.getElementById('numberValue');
    getPElemt.innerHTML = idValue;

}

function appendUidToElement(uidValue){
    var getPElemt2 = document.getElementById('uidValue')
    getPElemt2.innerHTML = uidValue;
}