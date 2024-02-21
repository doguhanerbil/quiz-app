function Soru(soruMetni,cevapSecenekleri,dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap

}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap;
}


let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır",{ a:"Node.js", b:"Typescript", c:"Npm", d:"Nuget"}, "c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez",{ a:"css", b:"HTML", c:"javascript", d:"sql"}, "d"),
    new Soru("3-Hangisi frontend kapsamında değerlendirilir",{ a:"Node.js", b:"Typescript", c:"angular", d:"react"}, "a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz",{ a:"react", b:"angular", c:"vuejs", d:"asp.net"}, "d")
];