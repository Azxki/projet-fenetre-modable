

let newWin = window.open("about:blank", "hello", "width=500,height=500");
newWin.focus();
newWin.moveBy(700,200);

newWin.document.write("Voulez-vous continuer en acceptant les cookies ? <br>" +
    "<button>Refuser</button>" + "<button>Accepter</button>");

newWin.addEventListener('click', function (){
    newWin.close();
    document.body.style.filter = "none";
})