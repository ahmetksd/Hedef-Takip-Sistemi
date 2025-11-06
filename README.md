# Hedef-Takip-Sistemi
Dönem Projesi Olarak Hedef Takip Sistemi Projesi Yapılmıştır

🔹 1. Projenin Amacı

Bu projenin amacı, kullanıcıların kişisel veya akademik hedeflerini belirleyip, bu hedeflerdeki ilerlemelerini takip edebilecekleri bir web tabanlı sistem geliştirmektir.
Kullanıcı, örneğin “JavaScript öğrenmek” ya da “Proje raporunu bitirmek” gibi hedefler tanımlayabilir ve bu hedeflere ait ilerlemeleri (yüzde, tarih, açıklama vb.) sistem üzerinden kaydedebilir.

Sistem, HTML5 ve JavaScript teknolojileriyle tarayıcıda çalışacak şekilde geliştirilmiştir. Bu sayede kullanıcı, herhangi bir sunucu bağlantısına gerek kalmadan kendi hedeflerini tarayıcı üzerinden kaydedip güncelleyebilir.

🔹 2. Projenin Kapsamı

Proje; hedef belirleme, ilerleme kaydetme, güncelleme ve hedef silme işlemlerini içermektedir.
Ayrıca her hedefin ilerleme yüzdesi görsel olarak bir ilerleme çubuğu (progress bar) ile gösterilmektedir.

Sistemin Temel Özellikleri:

Yeni hedef ekleme

Hedef açıklaması ve tarih belirleme

Hedefe ait ilerleme yüzdesi ekleme ve güncelleme

Hedef silme

Verilerin tarayıcıda saklanması (LocalStorage)

Kullanıcı dostu arayüz (HTML + CSS ile)

🔹 3. Kullanılan Teknolojiler
Teknoloji	Kullanım Amacı
HTML5	Form yapıları, tablo ve ilerleme çubuklarını oluşturmak için kullanıldı.
CSS3	Arayüz tasarımı, renk düzeni ve görsel tutarlılık için kullanıldı.
JavaScript (ES6)	Hedef ekleme, silme, güncelleme işlemleri ve dinamik içerik yönetimi için kullanıldı.
LocalStorage API	Hedef verilerinin tarayıcıda saklanmasını sağladı.

🔹 4. Proje Tasarımı ve Çalışma Prensibi
4.1. Genel İşleyiş

Kullanıcı, ekrandaki form aracılığıyla bir hedef adı, açıklama ve başlangıç tarihi girer.

Hedef oluşturulduğunda sistem bu veriyi LocalStorage’a kaydeder.

Kullanıcı hedefin ilerleme oranını (örneğin %40) güncellediğinde, sistem ilgili hedefin çubuğunu günceller.

Kullanıcı hedefini tamamladığında (%100) sistem hedefi “Tamamlandı” olarak işaretler.

İstenirse hedef tamamen silinebilir veya yeniden düzenlenebilir.

