/*
  
  Koa.js ile web sunucumuzu yazalım.
  
  Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye başlama cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.

  koa paketini indirelim.
  index, hakkimda ve iletisim sayfaları oluşturalım.
  Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
  port numarası olarak 3000'i kullanalım.

*/

const router = require('@koa/router')();

const Koa = require('koa');
const app = module.exports = new Koa();

router.get('/', indexPage)
      .get('/index', indexPage)
      .get('/hakkimda', hakkimdaPage)
      .get('/iletisim', iletisimPage)

app.use(router.routes());

const h1Str = (str) => {
  return `<h1>${str}</h1>`
}

async function indexPage(ctx) {
  ctx.body = h1Str('index sayfasına hoşgeldiniz')
}

async function hakkimdaPage(ctx) {
  ctx.body = h1Str('hakkımda sayfasına hoşgeldiniz')
}

async function iletisimPage(ctx) {
  ctx.body = h1Str('iletişim sayfasına hoşgeldiniz')
}

if (!module.parent) app.listen(3000)