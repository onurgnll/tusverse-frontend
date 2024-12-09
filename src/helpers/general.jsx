export const filterOldEvents = (events) => {
    const today = new Date(); // Bugünün tarihi

    return events.filter(event => {
        const eventStartDate = new Date(event.eventDateTime[0]);
        return eventStartDate >= today;
    });
};
export const getNext30Days = () => {
  const today = new Date(); // Bugünün tarihi
  const days = [];
  const dayNames = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']; 
  const monthNames = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']; 

  for (let i = 0; i < 30; i++) {
    const currentDay = new Date(today);
    currentDay.setDate(today.getDate() + i); // Bugünden itibaren i gün ekle
    
    const dayName = dayNames[currentDay.getDay()]; // Gün ismini al
    const day = currentDay.getDate(); // Gün (tarih) numarasını al
    const monthName = monthNames[currentDay.getMonth()]; // Ay ismini al
    const year = currentDay.getFullYear(); // Yılı al
    const formattedDate = `${year}-${String(currentDay.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    days.push({
      formattedDate: formattedDate,
      dayName: dayName,
      day: day,
      monthName: monthName,
      year: year
    }); // Obje olarak gün ve tarih bilgilerini ekle
  }

  return days;
};


export function validateEmail(email) {
  // Email formatını kontrol eden regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
export function getTimeIntervals(selectedDate) {
  let intervals = [];
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let targetDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());

  function formatTime(date) {
      let hours = date.getHours().toString().padStart(2, '0');
      let minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
  }

  if (targetDate.getTime() === today.getTime()) {
      // Selected date is today
      let startTime = new Date(now);
      startTime.setMinutes(startTime.getMinutes() + 30 - (startTime.getMinutes() % 30));
      startTime.setSeconds(0);
      startTime.setMilliseconds(0);

      let endTime = new Date(today);
      endTime.setDate(endTime.getDate() + 1);

      while (startTime < endTime) {
          intervals.push(formatTime(startTime));
          startTime.setMinutes(startTime.getMinutes() + 30);
      }
  } else {
      // Selected date is another day
      let startTime = new Date(targetDate);
      let endTime = new Date(targetDate);
      endTime.setDate(endTime.getDate() + 1);

      while (startTime < endTime) {
          intervals.push(formatTime(startTime));
          startTime.setMinutes(startTime.getMinutes() + 30);
      }
  }

  return intervals;
}



export const cities = [
  {
    ad: "Bütün Şehirler",
    ilceler: ["Bütün İlçeler"]
  },
    {
      ad: "Adana",
      ilceler: ["Bütün İlçeler","Seyhan", "Çukurova", "Yüreğir", "Sarıçam", "Aladağ", "Ceyhan", "Feke", "İmamoğlu", "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli", "Tufanbeyli", "Yumurtalık"]
    },
    {
      ad: "Adıyaman",
      ilceler: ["Bütün İlçeler","Merkez", "Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta", "Samsat", "Sincik", "Tut"]
    },
    {
      ad: "Afyonkarahisar",
      ilceler: ["Bütün İlçeler","Merkez", "Başmakçı", "Bayat", "Bolvadin", "Çay", "Çobanlar", "Dazkırı", "Dinar", "Emirdağ", "Evciler", "Hocalar", "İhsaniye", "İscehisar", "Kızılören", "Sandıklı", "Sinanpaşa", "Sultandağı", "Şuhut"]
    },
    {
      ad: "Ağrı",
      ilceler: ["Bütün İlçeler","Merkez", "Diyadin", "Doğubayazıt", "Eleşkirt", "Hamur", "Patnos", "Taşlıçay", "Tutak"]
    },
    {
      ad: "Aksaray",
      ilceler: ["Bütün İlçeler","Merkez", "Ağaçören", "Eskil", "Gülağaç", "Güzelyurt", "Ortaköy", "Sarıyahşi"]
    },
    {
      ad: "Amasya",
      ilceler: ["Bütün İlçeler","Merkez", "Göynücek", "Gümüşhacıköy", "Hamamözü", "Merzifon", "Suluova", "Taşova"]
    },
    {
      ad: "Ankara",
      ilceler: ["Bütün İlçeler","Altındağ", "Çankaya", "Etimesgut", "Keçiören", "Mamak", "Sincan", "Yenimahalle", "Akyurt", "Ayaş", "Bala", "Beypazarı", "Çamlıdere", "Çubuk", "Elmadağ", "Evren", "Güdül", "Haymana", "Kalecik", "Kazan", "Kızılcahamam", "Nallıhan", "Polatlı", "Şereflikoçhisar"]
    },
    {
      ad: "Antalya",
      ilceler: ["Bütün İlçeler","Alanya", "Demre", "Elmalı", "Finike", "Gazipaşa", "Gündoğmuş", "İbradı", "Kaş", "Kemer", "Korkuteli", "Kumluca", "Manavgat", "Serik", "Akseki", "Aksu", "Döşemealtı", "Kepez", "Konyaaltı", "Muratpaşa"]
    },
    {
      ad: "Ardahan",
      ilceler: ["Bütün İlçeler","Merkez", "Çıldır", "Damal", "Göle", "Hanak", "Posof"]
    },
    {
      ad: "Artvin",
      ilceler: ["Bütün İlçeler","Ardanuç", "Arhavi", "Artvin Merkez", "Borçka", "Hopa", "Murgul", "Şavşat", "Yusufeli"]
    },
    {
      ad: "Aydın",
      ilceler: ["Bütün İlçeler","Buharkent", "Çine", "Didim", "Efeler", "Germencik", "İncirliova", "Karacasu", "Karpuzlu", "Koçarlı", "Köşk", "Kuşadası", "Kuyucak", "Nazilli", "Söke", "Sultanhisar", "Yenipazar"]
    },
    {
      ad: "Balıkesir",
      ilceler: ["Bütün İlçeler","Altıeylül", "Ayvalık", "Balya", "Bandırma", "Bigadiç", "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gömeç", "Gönen", "Havran", "İvrindi", "Karesi", "Kepsut", "Manyas", "Marmara", "Savaştepe", "Sındırgı", "Susurluk"]
    },
    {
      ad: "Bartın",
      ilceler: ["Bütün İlçeler","Merkez", "Amasra", "Kurucaşile", "Ulus"]
    },
    {
      ad: "Batman",
      ilceler: ["Bütün İlçeler","Merkez", "Beşiri", "Gercüş", "Hasankeyf", "Kozluk", "Sason"]
    },
    {
      ad: "Bayburt",
      ilceler: ["Bütün İlçeler","Merkez", "Aydıntepe", "Demirözü"]
    },
    {
      ad: "Bilecik",
      ilceler: ["Bütün İlçeler","Merkez", "Bozüyük", "Gölpazarı", "İnhisar", "Osmaneli", "Pazaryeri", "Söğüt", "Yenipazar"]
    },
    {
      ad: "Bingöl",
      ilceler: ["Bütün İlçeler","Merkez", "Adaklı", "Genç", "Karlıova", "Kiğı", "Solhan", "Yayladere", "Yedisu"]
    },
    {
      ad: "Bitlis",
      ilceler: ["Bütün İlçeler","Merkez", "Adilcevaz", "Ahlat", "Güroymak", "Hizan", "Mutki", "Tatvan"]
    },
    {
      ad: "Bolu",
      ilceler: ["Bütün İlçeler","Merkez", "Dörtdivan", "Gerede", "Göynük", "Kıbrıscık", "Mengen", "Mudurnu", "Seben", "Yeniçağa"]
    },
    {
      ad: "Burdur",
      ilceler: ["Bütün İlçeler","Merkez", "Ağlasun", "Altınyayla", "Bucak", "Çavdır", "Çeltikçi", "Gölhisar", "Karamanlı", "Kemer", "Tefenni", "Yeşilova"]
    },
    {
      ad: "Bursa",
      ilceler: ["Bütün İlçeler","Osmangazi", "Yıldırım", "Nilüfer", "Gemlik", "İnegöl", "İznik", "Karacabey", "Keles", "Kestel", "Mudanya", "Mustafakemalpaşa", "Orhaneli", "Orhangazi", "Yenişehir", "Büyükorhan", "Harmancık"]
    },
    {
      ad: "Çanakkale",
      ilceler: ["Bütün İlçeler","Merkez", "Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan", "Eceabat", "Ezine", "Gelibolu", "Gökçeada", "Lapseki", "Yenice"]
    },
    {
      ad: "Çankırı",
      ilceler: ["Bütün İlçeler","Merkez", "Atkaracalar", "Bayramören", "Çerkeş", "Eldivan", "Ilgaz", "Kızılırmak", "Korgun", "Kurşunlu", "Orta", "Şabanözü", "Yapraklı"]
    },
    {
      ad: "Çorum",
      ilceler: ["Bütün İlçeler","Merkez", "Alaca", "Bayat", "Boğazkale", "Dodurga", "İskilip", "Kargı", "Laçin", "Mecitözü", "Oğuzlar", "Ortaköy", "Osmancık", "Sungurlu", "Uğurludağ"]
    },
    {
      ad: "Denizli",
      ilceler: ["Bütün İlçeler","Acıpayam", "Babadağ", "Baklan", "Bekilli", "Beyağaç", "Bozkurt", "Buldan", "Çal", "Çameli", "Çardak", "Çivril", "Güney", "Honaz", "Kale", "Merkezefendi", "Pamukkale", "Sarayköy", "Serinhisar", "Tavas"]
    },
    {
      ad: "Diyarbakır",
      ilceler: ["Bütün İlçeler","Bağlar", "Kayapınar", "Sur", "Yenişehir", "Bismil", "Çermik", "Çınar", "Çüngüş", "Dicle", "Eğil", "Ergani", "Hani", "Hazro", "Kocaköy", "Kulp", "Lice", "Silvan"]
    },
    {
      ad: "Düzce",
      ilceler: ["Bütün İlçeler","Merkez", "Akçakoca", "Cumayeri", "Çilimli", "Gölyaka", "Gümüşova", "Kaynaşlı", "Yığılca"]
    },
    {
      ad: "Edirne",
      ilceler: ["Bütün İlçeler","Merkez", "Enez", "Havsa", "İpsala", "Keşan", "Lalapaşa", "Meriç", "Süloğlu", "Uzunköprü"]
    },
    {
      ad: "Elazığ",
      ilceler: ["Bütün İlçeler","Merkez", "Ağın", "Alacakaya", "Arıcak", "Baskil", "Karakoçan", "Keban", "Kovancılar", "Maden", "Palu", "Sivrice"]
    },
    {
      ad: "Erzincan",
      ilceler: ["Bütün İlçeler","Merkez", "Çayırlı", "İliç", "Kemah", "Kemaliye", "Otlukbeli", "Refahiye", "Tercan", "Üzümlü"]
    },
    {
      ad: "Erzurum",
      ilceler: ["Bütün İlçeler","Yakutiye", "Aziziye", "Palandöken", "Aşkale", "Çat", "Hınıs", "Horasan", "İspir", "Karaçoban", "Karayazı", "Köprüköy", "Narman", "Oltu", "Olur", "Pasinler", "Pazaryolu", "Şenkaya", "Tekman", "Tortum", "Uzundere"]
    },
    {
      ad: "Eskişehir",
      ilceler: ["Bütün İlçeler","Tepebaşı", "Odunpazarı", "Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han", "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Sarıcakaya", "Seyitgazi", "Sivrihisar"]
    },
    {
      ad: "Gaziantep",
      ilceler: ["Bütün İlçeler","Şahinbey", "Şehitkamil", "Araban", "İslahiye", "Karkamış", "Nizip", "Nurdağı", "Oğuzeli", "Yavuzeli"]
    },
    {
      ad: "Giresun",
      ilceler: ["Bütün İlçeler","Merkez", "Alucra", "Bulancak", "Çamoluk", "Çanakçı", "Dereli", "Doğankent", "Espiye", "Eynesil", "Görele", "Güce", "Keşap", "Piraziz", "Şebinkarahisar", "Tirebolu", "Yağlıdere"]
    },
    {
      ad: "Gümüşhane",
      ilceler: ["Bütün İlçeler","Merkez", "Kelkit", "Köse", "Kürtün", "Şiran", "Torul"]
    },
    {
      ad: "Hakkari",
      ilceler: ["Bütün İlçeler","Merkez", "Çukurca", "Şemdinli", "Yüksekova"]
    },
    {
      ad: "Hatay",
      ilceler: ["Bütün İlçeler","Antakya", "Arsuz", "Defne", "Dörtyol", "Erzin", "Hassa", "İskenderun", "Kırıkhan", "Kumlu", "Payas", "Reyhanlı", "Samandağ", "Yayladağı", "Altınözü", "Belen"]
    },
    {
      ad: "Iğdır",
      ilceler: ["Bütün İlçeler","Merkez", "Aralık", "Karakoyunlu", "Tuzluca"]
    },
    {
      ad: "Isparta",
      ilceler: ["Bütün İlçeler","Merkez", "Aksu", "Atabey", "Eğirdir", "Gelendost", "Gönen", "Keçiborlu", "Senirkent", "Sütçüler", "Şarkikaraağaç", "Uluborlu", "Yalvaç", "Yenişarbademli"]
    },
    {
      ad: "İstanbul",
      ilceler: ["Bütün İlçeler","Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüp", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"]
    },
    {
      ad: "İzmir",
      ilceler: ["Bütün İlçeler","Aliağa", "Balçova", "Bayındır", "Bayraklı", "Bergama", "Beydağ", "Bornova", "Buca", "Çeşme", "Çiğli", "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karabağlar", "Karaburun", "Karşıyaka", "Kemalpaşa", "Kınık", "Kiraz", "Konak", "Menderes", "Menemen", "Narlıdere", "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla"]
    },
    {
      ad: "Kahramanmaraş",
      ilceler: ["Bütün İlçeler","Onikişubat", "Dulkadiroğlu", "Afşin", "Andırın", "Çağlayancerit", "Ekinözü", "Elbistan", "Göksun", "Nurhak", "Pazarcık", "Türkoğlu"]
    },
    {
      ad: "Karabük",
      ilceler: ["Bütün İlçeler","Merkez", "Eflani", "Eskipazar", "Ovacık", "Safranbolu", "Yenice"]
    },
    {
      ad: "Karaman",
      ilceler: ["Bütün İlçeler","Merkez", "Ayrancı", "Başyayla", "Ermenek", "Kazımkarabekir", "Sarıveliler"]
    },
    {
      ad: "Kars",
      ilceler: ["Bütün İlçeler","Merkez", "Akyaka", "Arpaçay", "Digor", "Kağızman", "Sarıkamış", "Selim", "Susuz"]
    },
    {
      ad: "Kastamonu",
      ilceler: ["Bütün İlçeler","Merkez", "Abana", "Ağlı", "Araç", "Azdavay", "Bozkurt", "Cide", "Çatalzeytin", "Daday", "Devrekani", "Doğanyurt", "Hanönü", "İhsangazi", "İnebolu", "Küre", "Pınarbaşı", "Şenpazar", "Seydiler", "Taşköprü", "Tosya"]
    },
    {
      ad: "Kayseri",
      ilceler: ["Bütün İlçeler","Kocasinan", "Melikgazi", "Talas", "Akkışla", "Bünyan", "Develi", "Felahiye", "Hacılar", "İncesu", "Özvatan", "Pınarbaşı", "Sarıoğlan", "Sarız", "Tomarza", "Yahyalı", "Yeşilhisar"]
    },
    {
      ad: "Kırıkkale",
      ilceler: ["Bütün İlçeler","Merkez", "Bahşılı", "Balışeyh", "Çelebi", "Delice", "Karakeçili", "Keskin", "Sulakyurt", "Yahşihan"]
    },
    {
      ad: "Kırklareli",
      ilceler: ["Bütün İlçeler","Merkez", "Babaeski", "Demirköy", "Kofçaz", "Lüleburgaz", "Pehlivanköy", "Pınarhisar", "Vize"]
    },
    {
      ad: "Kırşehir",
      ilceler: ["Bütün İlçeler","Merkez", "Akçakent", "Akpınar", "Boztepe", "Çiçekdağı", "Kaman", "Mucur"]
    },
    {
      ad: "Kilis",
      ilceler: ["Bütün İlçeler","Merkez", "Elbeyli", "Musabeyli", "Polateli"]
    },
    {
      ad: "Kocaeli",
      ilceler: ["Bütün İlçeler","Başiskele", "Çayırova", "Darıca", "Derince", "Dilovası", "Gebze", "Gölcük", "İzmit", "Kandıra", "Karamürsel", "Kartepe", "Körfez"]
    },
    {
      ad: "Konya",
      ilceler: ["Bütün İlçeler","Meram", "Selçuklu", "Karatay", "Ahırlı", "Akören", "Akşehir", "Altınekin", "Beyşehir", "Bozkır", "Cihanbeyli", "Çeltik", "Çumra", "Derbent", "Derebucak", "Doğanhisar", "Emirgazi", "Ereğli", "Güneysınır", "Hadim", "Halkapınar", "Hüyük", "Ilgın", "Kadınhanı", "Karapınar", "Kulu", "Sarayönü", "Seydişehir", "Taşkent", "Tuzlukçu", "Yalıhüyük", "Yunak"]
    },
    {
      ad: "Kütahya",
      ilceler: ["Bütün İlçeler","Merkez", "Altıntaş", "Aslanapa", "Çavdarhisar", "Domaniç", "Dumlupınar", "Emet", "Gediz", "Hisarcık", "Pazarlar", "Simav", "Şaphane", "Tavşanlı"]
    },
    {
      ad: "Malatya",
      ilceler: ["Bütün İlçeler","Battalgazi", "Yeşilyurt", "Akçadağ", "Arapgir", "Arguvan", "Darende", "Doğanşehir", "Doğanyol", "Hekimhan", "Kale", "Kuluncak", "Pütürge", "Yazıhan"]
    },
    {
      ad: "Manisa",
      ilceler: ["Bütün İlçeler","Şehzadeler", "Yunusemre", "Akhisar", "Alaşehir", "Demirci", "Gölmarmara", "Gördes", "Kırkağaç", "Köprübaşı", "Kula", "Salihli", "Sarıgöl", "Saruhanlı", "Selendi", "Soma", "Turgutlu"]
    },
    {
      ad: "Mardin",
      ilceler: ["Bütün İlçeler","Artuklu", "Dargeçit", "Derik", "Kızıltepe", "Mazıdağı", "Midyat", "Nusaybin", "Ömerli", "Savur", "Yeşilli"]
    },
    {
      ad: "Mersin",
      ilceler: ["Bütün İlçeler","Akdeniz", "Mezitli", "Toroslar", "Yenişehir", "Anamur", "Aydıncık", "Bozyazı", "Çamlıyayla", "Erdemli", "Gülnar", "Mut", "Silifke", "Tarsus"]
    },
    {
      ad: "Muğla",
      ilceler: ["Bütün İlçeler","Bodrum", "Dalaman", "Datça", "Fethiye", "Kavaklıdere", "Köyceğiz", "Marmaris", "Menteşe", "Milas", "Ortaca", "Seydikemer", "Ula", "Yatağan"]
    },
    {
      ad: "Muş",
      ilceler: ["Bütün İlçeler","Merkez", "Bulanık", "Hasköy", "Korkut", "Malazgirt", "Varto"]
    },
    {
      ad: "Nevşehir",
      ilceler: ["Bütün İlçeler","Merkez", "Avanos", "Derinkuyu", "Gülşehir", "Hacıbektaş", "Kozaklı", "Ürgüp"]
    },
    {
      ad: "Niğde",
      ilceler: ["Bütün İlçeler","Merkez", "Altunhisar", "Bor", "Çamardı", "Çiftlik", "Ulukışla"]
    },
    {
      ad: "Ordu",
      ilceler: ["Bütün İlçeler","Altınordu", "Akkuş", "Aybastı", "Çamaş", "Çatalpınar", "Çaybaşı", "Fatsa", "Gölköy", "Gülyalı", "Gürgentepe", "Ikizce", "Kabadüz", "Kabataş", "Korgan", "Kumru", "Mesudiye", "Perşembe", "Ulubey", "Ünye"]
    },
    {
      ad: "Osmaniye",
      ilceler: ["Bütün İlçeler","Merkez", "Bahçe", "Düziçi", "Hasanbeyli", "Kadirli", "Sumbas", "Toprakkale"]
    },
    {
      ad: "Rize",
      ilceler: ["Bütün İlçeler","Merkez", "Ardeşen", "Çamlıhemşin", "Çayeli", "Derepazarı", "Fındıklı", "Güneysu", "Hemşin", "İkizdere", "İyidere", "Kalkandere", "Pazar"]
    },
    {
      ad: "Sakarya",
      ilceler: ["Bütün İlçeler","Adapazarı", "Akyazı", "Arifiye", "Erenler", "Ferizli", "Geyve", "Hendek", "Karapürçek", "Karasu", "Kaynarca", "Kocaali", "Pamukova", "Sapanca", "Serdivan", "Söğütlü", "Taraklı"]
    },
    {
      ad: "Samsun",
      ilceler: ["Bütün İlçeler","Atakum", "Canik", "İlkadım", "Tekkeköy", "Alaçam", "Asarcık", "Ayvacık", "Bafra", "Çarşamba", "Havza", "Kavak", "Ladik", "Salıpazarı", "Terme", "Vezirköprü", "Yakakent"]
    },
    {
      ad: "Siirt",
      ilceler: ["Bütün İlçeler","Merkez", "Aydınlar", "Baykan", "Eruh", "Kurtalan", "Pervari", "Şirvan"]
    },
    {
      ad: "Sinop",
      ilceler: ["Bütün İlçeler","Merkez", "Ayancık", "Boyabat", "Dikmen", "Durağan", "Erfelek", "Gerze", "Saraydüzü", "Türkeli"]
    },
    {
      ad: "Sivas",
      ilceler: ["Bütün İlçeler","Merkez", "Akıncılar", "Altınyayla", "Divriği", "Doğanşar", "Gemerek", "Gölova", "Gürün", "Hafik", "İmranlı", "Kangal", "Koyulhisar", "Suşehri", "Şarkışla", "Ulaş", "Yıldızeli", "Zara"]
    },
    {
      ad: "Şanlıurfa",
      ilceler: ["Bütün İlçeler","Akçakale", "Birecik", "Bozova", "Ceylanpınar", "Eyyübiye", "Halfeti", "Haliliye", "Harran", "Hilvan", "Karaköprü", "Siverek", "Suruç", "Viranşehir"]
    },
    {
      ad: "Şırnak",
      ilceler: ["Bütün İlçeler","Merkez", "Beytüşşebap", "Cizre", "Güçlükonak", "İdil", "Silopi", "Uludere"]
    },
    {
      ad: "Tekirdağ",
      ilceler: ["Bütün İlçeler","Çerkezköy", "Çorlu", "Ergene", "Hayrabolu", "Kapaklı", "Malkara", "Marmaraereğlisi", "Muratlı", "Saray", "Süleymanpaşa", "Şarköy"]
    },
    {
      ad: "Tokat",
      ilceler: ["Bütün İlçeler","Merkez", "Almus", "Artova", "Başçiftlik", "Erbaa", "Niksar", "Pazar", "Reşadiye", "Sulusaray", "Turhal", "Yeşilyurt", "Zile"]
    },
    {
      ad: "Trabzon",
      ilceler: ["Bütün İlçeler","Ortahisar", "Akçaabat", "Araklı", "Arsin", "Beşikdüzü", "Çarşıbaşı", "Çaykara", "Dernekpazarı", "Düzköy", "Hayrat", "Köprübaşı", "Maçka", "Of", "Sürmene", "Şalpazarı", "Tonya", "Vakfıkebir", "Yomra"]
    },
    {
      ad: "Tunceli",
      ilceler: ["Bütün İlçeler","Merkez", "Çemişgezek", "Hozat", "Mazgirt", "Nazımiye", "Ovacık", "Pertek", "Pülümür"]
    },
    {
      ad: "Uşak",
      ilceler: ["Bütün İlçeler","Merkez", "Banaz", "Eşme", "Karahallı", "Sivaslı", "Ulubey"]
    },
    {
      ad: "Van",
      ilceler: ["Bütün İlçeler","İpekyolu", "Tuşba", "Edremit", "Bahçesaray", "Başkale", "Çaldıran", "Çatak", "Erciş", "Gevaş", "Gürpınar", "Muradiye", "Özalp", "Saray"]
    },
    {
      ad: "Yalova",
      ilceler: ["Bütün İlçeler","Merkez", "Altınova", "Armutlu", "Çınarcık", "Çiftlikköy", "Termal"]
    },
    {
      ad: "Yozgat",
      ilceler: ["Bütün İlçeler","Merkez", "Akdağmadeni", "Aydıncık", "Boğazlıyan", "Çandır", "Çayıralan", "Çekerek", "Kadışehri", "Saraykent", "Sarıkaya", "Sorgun", "Şefaatli", "Yenifakılı", "Yerköy"]
    },
    {
      ad: "Zonguldak",
      ilceler: ["Bütün İlçeler","Merkez", "Alaplı", "Çaycuma", "Devrek", "Ereğli", "Gökçebey"]
    }
  ]
  

  
export function roundToDecimalPlace(num, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}


export function groupArrayElements(array, groupSize) {
  const result = [];
  for (let i = 0; i < array.length; i += groupSize) {
    result.push(array.slice(i, i + groupSize));
  }
  return result;
}

export const downloadFile = async (url) => {
  const response = await fetch(url);
  
  if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  
  const blob = await response.blob();
  const urlBlob = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = urlBlob;
  link.setAttribute('download', 'bilet.png'); // Dosya adını burada belirleyin
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(urlBlob);
};