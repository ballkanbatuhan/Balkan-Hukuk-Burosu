# GoDaddy’ye yayınlama (Ekonomik Hosting)

Site statik export olarak derlenir; `out/` klasörünün **içeriği** `public_html` köküne yüklenir.

## Yerelde derleme

```bash
cp .env.production.example .env.production   # ilk seferde
npm run build
```

Üretilen dosyalar: `out/` (`.htaccess` dahil). İsteğe bağlı tek seferlik paket:

```bash
cd out && zip -r ../balkanhukukburosu-static.zip . -x "*.DS_Store"
```

cPanel’de ZIP’i `public_html` içine yükleyip **Extract** edebilirsiniz.

## GoDaddy adımları

1. **Web Hosting** → **Yönet** → cPanel.
2. **Dosya Yöneticisi** → `public_html` → tüm içeriği ZIP indir veya `public_html_yedek_YYYYMMDD` olarak kopyala.
3. `public_html` içindeki eski dosyaları silin (yedekten sonra).
4. `out/` içindeki tüm dosya ve klasörleri `public_html` köküne yükleyin (klasörün kendisini değil).
   - SFTP: `ftp.balkanhukukburosu.com`, cPanel kullanıcı adı; mümkünse SFTP/FTPS.
5. cPanel **SSL/TLS Status** — alan adı için sertifika etkin olsun (HTTPS `.htaccess` ile zorunlu).

## Kontrol

- https://balkanhukukburosu.com
- `/sitemap.xml`, `/robots.txt`
- `/buro` → anasayfa `#yaklasim`
- `/gizlilik-politikasi` → `/kvkk`

## Sonraki güncellemeler

`npm run build` → yeni `out/` → FTP ile `public_html` üzerine yazın.
