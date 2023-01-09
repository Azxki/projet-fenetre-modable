

let newWin = window.open("about:blank", "hello", "width=500,height=500");
newWin.focus();
newWin.moveBy(700,200);

newWin.document.write("Voulez-vous accéder à la page du site non floutée ? <br>" +
    "<button id='refuser'>Non</button>" + "<button id='accepter'>Oui</button>");
newWin.addEventListener('click', function (){
    newWin.close();
    document.body.style.filter = "none";
})