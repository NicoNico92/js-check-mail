alert('ciao')

var arrayMail = ['pippo@email.com','pluto@email.com','paperino@email.com'];

var mailToCheck = prompt("Insert your mail address:");
console.log('hai inserito: ' + mailToCheck );


for (var i = 0; i < arrayMail.length; i++) {
    if (mailToCheck == arrayMail[i]){
        if (arrayMail[i] == 'pippo@email.com')
        { console.log('Benvenuto Pippo');
        }
        if (arrayMail[i] == 'pluto@email.com') {
            console.log('Benvenuto Pluto');
        }
        if (arrayMail[i] == 'paperino@email.com') {
            console.log('Benvenuto Paperino');
        }
    } else { 
        console.log('Il tuo indirizzo email non è valido per il login');
    }
}
