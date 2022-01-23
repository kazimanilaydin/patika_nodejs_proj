/*

Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.

*/


const http = require('http')

const server = http.createServer((req, res) => {
	const url = req.url

	if (url === '/' || url === '/index') {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8',  })
		res.write('<h2>index sayfasına hoşgeldiniz</h2>')

	} else if (url === '/hakkimda') {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
		res.write('<h2>hakkimda sayfasına hoşgeldiniz</h2>')

	} else if (url === '/iletisim') {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
		res.write('<h2>iletisim sayfasına hoşgeldiniz</h2>')
	}

	res.end()
})

const port = 5000

server.listen(port, () => {
	console.log(`Sunucu port ${port} de baslatildi.`)
})