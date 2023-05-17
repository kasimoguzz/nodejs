
// koa paketini indirelim.
// index, hakkimda ve iletisim sayfaları oluşturalım.
// Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
// port numarası olarak 3000'i kullanalım.

const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if (ctx.path === "/") {
        ctx.status = 200;
        ctx.type = "html";
        ctx.body = "<h1>INDEX SAYFASINA HOŞGELDİNİZ</h1>";
    }
    else if (ctx.path === "/about"){
        ctx.status = 200 ;
        ctx.type = "html"
        ctx.body = "<h1>HAKKIMDA SAYFASINA HOŞGELDİNİZ</h1>";
    }
    else if (ctx.path === "/contact"){
        ctx.status = 200 ;
        ctx.type = "html"
        ctx.body = "<h1>ILETISIM SAYFASINA HOŞGELDİNİZ</h1>";
    }
    else{
        ctx.status = 404 ;
        ctx.type = "html"
        ctx.body = "<h1>404 SAYFA BULUNAMDI</h1>";
    }

});

const port = 3000

app.listen(port , () => {
    console.log(`sunucu ${port} de başlatıldı`)
});