// Menu Kopi
const menu_populer = {
  caramel_breeze: {
    nama: "Caramel Breeze",
    harga: 10000,
    gambar: "img/Menu/CaramelBreeze.jpg",
  },

  milk_mocha: {
    nama: "Milk Mocha",
    harga: 15000,
    gambar: "img/Menu/MilkMocha.jpg",
  },

  lemon_breeze: {
    nama: "Lemon Breeze",
    harga: 12000,
    gambar: "img/Menu/LemonBreeze.jpg",
  },

  teh_delight: {
    nama: "Teh Delight",
    harga: 7000,
    gambar: "img/Menu/TehDelight.jpg",
  }
};

// Daftar List Kopi
const daftar_menu = {
  caramel_breeze: {
    nama: "Caramel Breeze",
    deskripsi:
      "Nikmati keharuman dan kelembutan Caramel Breeze, minuman kopi yang memukau dengan paduan sempurna antara kopi pilihan dan sentuhan karamel yang lembut. Dengan aroma kopi yang kaya dan rasa karamel yang menggoda, Caramel Breeze adalah pilihan sempurna bagi pecinta kopi yang mencari kombinasi manis dan gurih. Setiap tegukan membawa suasana kehangatan dan kelembutan, memberikan pengalaman yang memanjakan lidah. Disajikan dengan es batu untuk sensasi kesegaran yang menyegarkan, dan taburan marshmallow di atasnya memberikan sentuhan manis yang tak terlupakan. Caramel Breeze, sebuah karya seni kopi yang akan membuat setiap momen istimewa.",
  
    nilai: 5,
    harga: 10000,
    diskon: 0.15,
    tersedia: true,
    gambar: "img/product/CaramelBreeze.jpg",
  },
  
  choco_cloud: {
    nama: "Choco Cloud",
    deskripsi:
      "Sajikan diri Anda dengan kelezatan Choco Cloud, minuman kopi yang memadukan kekuatan kopi pilihan dengan kenikmatan cokelat yang lembut. Dengan aroma kopi yang menggoda dan rasa cokelat yang kaya, Choco Cloud memberikan pengalaman minum kopi yang luar biasa. Tekstur yang ringan seperti awan membuat setiap tegukan terasa seperti menyelami langit yang penuh kenikmatan. Minuman ini disajikan dalam suhu yang sempurna untuk memberikan kehangatan yang memeluk jiwa. Topping marshmallow yang lembut menambah sentuhan manis yang sempurna, menciptakan pengalaman kopi yang tak terlupakan. Choco Cloud, sajian kopi yang mengangkat semangat Anda ke puncak kelezatan.",
  
    nilai: 4,
    harga: 20000,
    diskon: 0.1,
    tersedia: true,
    gambar: "img/product/ChocoCloud.jpg",
  },
  

  lemon_breeze: {
    nama: "Lemon Breeze",
    deskripsi:
      "Rasakan kesegaran Lemon Breeze, minuman kopi yang menyajikan harmoni unik antara rasa kopi yang ringan dan sentuhan menyegarkan lemon. Dengan citra rasa yang seimbang dan aroma kopi yang segar, Lemon Breeze cocok untuk mereka yang menginginkan pengalaman kopi yang berbeda. Setiap tegukan menghadirkan kombinasi yang memikat antara keasaman lemon yang segar dan kelembutan kopi. Disajikan dalam suhu yang pas, Lemon Breeze membawa keceriaan dan kesegaran dalam setiap kesempatan. Tambahkan es batu untuk sensasi yang lebih menyegarkan dan nikmati sentuhan khususnya dengan taburan lemon yang segar.",
  
    nilai: 4,
    harga: 12000,
    diskon: 0.1667,
    tersedia: true,
    gambar: "img/product/LemonBreeze.jpg",
  },
  
  manggo_bliss: {
    nama: "Manggo Bliss",
    deskripsi:
      "Selamati lidah Anda dengan kelezatan Manggo Bliss, minuman kopi yang memadukan cita rasa kopi yang lembut dengan kelembutan mangga yang manis. Aroma kopi yang khas dan kelezatan mangga yang segar menciptakan paduan yang tak terlupakan. Manggo Bliss cocok untuk mereka yang mencari keunikan dalam setiap tegukan kopi. Disajikan dalam suhu yang ideal, minuman ini memberikan pengalaman kopi yang eksotis. Tambahkan es batu untuk sensasi yang lebih menyegarkan dan nikmati taburan mangga segar yang memperkaya setiap tegukan. Manggo Bliss, penyelamat untuk pencinta kopi yang mencari petualangan rasa.",
  
    nilai: 3,
    harga: 12000,
    diskon: 0.1667,
    tersedia: true,
    gambar: "img/product/MangoBliss.jpg",
  },
  

  milk_mocha: {
    nama: "Milk Mocha",
    deskripsi:
      "Hadapi hari Anda dengan kehangatan Milk Mocha, minuman kopi yang mempersembahkan paduan lembut antara kopi pilihan dan cokelat yang kaya. Aroma kopi yang menggoda dan kelembutan cokelat menciptakan kombinasi yang memikat setiap penyuka kopi. Milk Mocha disajikan dalam suhu yang pas, memberikan pengalaman minum kopi yang memanjakan seluruh indera. Tambahkan sentuhan kenikmatan dengan topping krim whipped di atasnya, dan rasakan nikmatnya setiap tegukan. Dengan nilai tertinggi, Milk Mocha adalah pilihan utama bagi pecinta kopi yang menghargai kesempurnaan rasa.",
  
    nilai: 5,
    harga: 15000,
    diskon: 0.2,
    tersedia: true,
    gambar: "img/product/MilkMocha.jpg",
  },
  
  sereni_tea: {
    nama: "Sereni Tea",
    deskripsi:
      "Ciptakan momen ketenangan dengan Sereni Tea, minuman teh yang menenangkan dan lezat. Dengan kombinasi teh pilihan dan hint aroma bunga, Sereni Tea menghadirkan pengalaman minum teh yang luar biasa. Cocok untuk mereka yang mencari kesegaran dalam setiap tegukan, Sereni Tea disajikan dalam suhu yang ideal. Aroma teh yang menyegarkan dan rasa yang lembut memberikan ketenangan dan kesejukan. Disajikan tanpa gula, namun Anda dapat menyesuaikan rasanya sesuai selera. Dengan nilai rasa yang tinggi, Sereni Tea adalah pilihan terbaik untuk pecinta teh yang menghargai kedamaian dalam secangkir minuman.",
  
    nilai: 3,
    harga: 5000,
    diskon: 0,
    tersedia: true,
    gambar: "img/product/SereniTea.jpg",
  },
  
  teh_delight: {
    nama: "Teh Delight",
    deskripsi:
      "Hadirkan kebahagiaan dengan Teh Delight, minuman teh yang memukau dengan kelezatan rasa dan aroma yang menggoda. Dengan kombinasi teh yang dipilih dengan hati dan hint manis yang lembut, Teh Delight menghadirkan pengalaman minum teh yang tak terlupakan. Rasakan kehangatan teh menyelimuti lidah Anda dan nikmati perpaduan rasa yang harmonis. Disajikan dalam suhu yang pas, Teh Delight memberikan kenikmatan pada setiap tegukan. Tambahkan sentuhan manis dengan sedikit madu atau nikmati teh ini secara alami. Dengan nilai rasa yang tinggi, Teh Delight adalah teman setia bagi pecinta teh yang mencari kelezatan tanpa batas.",
  
    nilai: 4,
    harga: 7000,
    diskon: 0,
    tersedia: true,
    gambar: "img/product/TehDelight.jpg",
  },
  
};
