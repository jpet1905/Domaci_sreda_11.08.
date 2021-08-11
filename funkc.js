/*1. Napisati funkciju koja vraca najduzi palindrom u datom stringu.
Napomena: nije potrebno da se ispituje da li je uneti string palindrom, neka se podrazumeva da jeste
Primer: "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
Ispis: "12345678987654321"
*/
//RESENJE:
function vratiPalindrom(rec) {
    let nadjeniPalindromi = []; //prazan niz na pocetku u koji smestam palindrome iz stringa
    rec = rec.trim().toLowerCase(); //zbog poredjenja bitno da su sva slova ista i bez razmaka pre i posle reci
    let duzina = rec.length;
    for (let i = 0; i < duzina; i++) {
        for (let j = 0; j < duzina - i; j++) { //dve petlje da bi obuhvatilo reci sa svih mesta i svih duzina
            let slog = rec.substring(j, i + 1) //dodam 1 da ne bi isekao "i-to" mesto jer naredba ide DO neke pozicije
            if (slog == slog.split('').reverse().join('') && slog.length >= 2) {//odradim inverziju za proveru jednakosti s leva i s desna
                nadjeniPalindromi.push(slog); //pravim niz od svih nadjenih palindroma
            }
        }
    }
    console.log(nadjeniPalindromi);//meni sluzi za proveru uvrstenih stringova
    //nadji najduzeg clana niza i to je resenje
    let max = nadjeniPalindromi[0].length; //poredjenje krecem od prvog stringa u nizu
    for (i = 0; i < nadjeniPalindromi.length; i++) {
        if (nadjeniPalindromi[i].length > max)
            max = nadjeniPalindromi[i];
    }
    return max;
}
//poziv funkcijes
let x = vratiPalindrom("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"); //radi samo za slova-izdvoji samo slovne palindrome
// let x = vratiPalindrom("123456789876543216578945012")  //radi

console.log(`Najduzi palindrom u stringu je: ` + x);



