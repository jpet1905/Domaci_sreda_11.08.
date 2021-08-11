//1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te (dve) vrednosti u (novi) niz
{
    function zbirIProizvod(niz) {
        let suma = 0;
        let proizvod = 1;
        let noviNiz = [];
        for (let i = 0; i < niz.length; i++) {
            suma += niz[i];
            proizvod *= niz[i];
        }
        noviNiz.push(suma, proizvod);
        return noviNiz;
    }
    let x = zbirIProizvod([1, 2, 3, 4, 5])
    console.log(x);

}
console.log("-------------------");
// 2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...
{
    function izbaciNedefinisane(niz) {
        for (let i = 0; i < niz.length; i++) {
            //druga opcija za NaN je preko funkcije i morala bi se zadati u obliku {if (Number.isNaN(x))}
            // ovo dole radi ako je x: NaN, 0, false, null, undefined...Svi se racunaju kao FALSE
            if (!niz[i]) {
                niz.splice(i, 1);
            }
        }
        return niz;
    }
    console.log(izbaciNedefinisane([1, 0, 3, NaN, 5, "abcd", undefined, 8, 0, 9, NaN, "bdjdj", 0]));
}
console.log("-------------------");
/*3. За првих 100 бројева исписати:
* ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
* Ако је дељив са 3,5,7 - FizzBuzzZazz
* 3,5 - FizzBuzz
* 3,7 - FizzZazz
* 5,7 - BuzzZazz
*/
{
    for (broj = 0; broj <= 100; broj++) {
        let stringZaIspis = ""; //mora ovde a ne iznad petlje, da bi se vrednost stringa resetovala za svaki broj iznova
        if (broj % 3 == 0) {
            stringZaIspis += "Fizz";
        }
        if (broj % 5 == 0) {
            stringZaIspis += "Buzz";
        }
        if (broj % 7 == 0) {
            stringZaIspis += "Zazz";
        }
        if (stringZaIspis == "") { //to znaci da nije ni sa jednim deljivo pa nije ulazilo nigde u if
            console.log(broj);
        } else {
            console.log(stringZaIspis);
        }
    }

}
console.log("-------------------");
// 4. Izvrsiti inverziju brojeva bez pomocne promenljive
{
    function rotacijaBrojeva(a, b) {
        //ako je a=5 i b= 9
        console.log(`Pocetna vrednost za a je ${a}, za b je ${b}`);
        a = a + b;  //5+9=14
        b = a - b;  //14-9=5 za b
        a = a - b;  //14-5=9 za a
        console.log(`Sada je a = ${a}, dok je b = ${b}`);
    }
    rotacijaBrojeva(7, 11);
}