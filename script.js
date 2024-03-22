// Fungsi clamb:
let d = document;
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
// Fungsi ini mengembalikan nilai terkecil di antara val, min, dan max, serta nilai terbesar di antara ketiganya. Ini digunakan untuk membatasi nilai.

// Regular Expression untuk Angka:
const regex_num = new RegExp("^$|^[0-9]{1,2}$");
// Ini adalah ekspresi reguler yang digunakan untuk memeriksa apakah sebuah string kosong atau mengandung 1 hingga 2 digit angka.

// Toggle Class Active pada Navbar:
const navbarNav = d.querySelector(".navbar-nav")
d.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Ketika elemen dengan id hamburger-menu diklik, kelas active pada elemen dengan kelas navbar-nav akan ditoggle.

//Toggle Class Active pada Shopping Bag:
const shoppingBag = d.querySelector(".shopping-bag");
d.querySelector("#shopping-bag-button").onclick = (e) => {
  shoppingBag.classList.toggle("active");
  e.preventDefault();
};
//Ketika elemen dengan id shopping-bag-button diklik, kelas active pada elemen dengan kelas shopping-bag akan ditoggle, dan fungsi preventDefault mencegah perilaku default dari elemen tersebut.

// Penanganan Klik di Luar Elemen:
const hm = d.querySelector("#hamburger-menu");
const sbg = d.querySelector("#shopping-bag-button");

d.addEventListener("click", function (e) {
  if (!e.target.matches(".remove-item")) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }

    if (!sbg.contains(e.target) && !shoppingBag.contains(e.target)) {
      shoppingBag.classList.remove("active");
    }
  } else {
    checkout_form.reset();
  }
});
//Ini adalah penanganan klik di luar elemen tertentu, di mana kelas active akan dihapus dari elemen tertentu jika klik dilakukan di luar elemen tersebut.


document.addEventListener('DOMContentLoaded', function () {
  var submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', function (event) {
      event.preventDefault();

      // Mengambil data dari form
      var nama = document.getElementsByName('nama')[0].value;
      var email = document.getElementsByName('email')[0].value;
      var pesan = document.getElementsByName('pesan')[0].value;

      // Validasi form (tidak boleh kosong)
      if (!nama || !email || !pesan) {
          alert("Harap lengkapi semua kolom form sebelum mengirim.");
          return;
      }

      // Membangun pesan email
      var emailSubject = "Pesan dari " + nama;
      var emailBody = "Nama: " + nama + "\n" +
                      "Email: " + email + "\n" +
                      "Pesan: " + pesan;

      // Mengirim email
      window.location.href = "mailto:rominmuh230@gmail.com?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(emailBody);
  });
});


  // Fungsi untuk mengirim data pelanggan ke WhatsApp
  function kirimDataKeWhatsApp() {
    // Mengumpulkan data dari formulir
    var itemNames = document.querySelectorAll('.item-name h3');
    var itemPrices = document.querySelectorAll('.item-price');
    var currentItemsTotal = document.getElementById('current-items-total').textContent;
    var names = document.getElementById('names').value;
    var emails = document.getElementById('emails').value;
    var catatan = document.getElementById('catatan').value;

    // Format pesan WhatsApp dengan data yang dikumpulkan
    var message = "Detail Pesanan:\n";
    for (var i = 0; i < itemNames.length; i++) {
      message += itemNames[i].textContent + " - " + itemPrices[i].textContent + "\n";
    }
    message += "\nTotal Harga: " + currentItemsTotal + "\n";
    message += "Nama: " + names + "\n";
    message += "Email: " + emails + "\n";
    message += "Catatan: " + catatan;

    // Membuat link WhatsApp dengan pesan yang diformat
    var whatsappLink = "https://wa.me/6282244623402?text=" + encodeURIComponent(message);

    // Membuka link WhatsApp di tab baru
    window.open(whatsappLink, '_blank');
  }

  // Mendengarkan klik tombol checkout
  document.getElementById('co-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah formulir dikirim secara default
    kirimDataKeWhatsApp(); // Memanggil fungsi untuk mengirim data ke WhatsApp
  });

//Ini menangani pengiriman formulir ke email. Setelah pengiriman, fungsi showPopup dipanggil untuk menampilkan popup.

// Mata Uang Rupiah:
const rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
//Membuat objek formatter mata uang Rupiah.

// Template dan Pembuatan Daftar Menu dan Produk:
function appendTemplate(elem, target) {
  elem.classList.remove("hidden");
  elem.removeAttribute("id");
  target.appendChild(elem);
}
//Menyiapkan template dan membuat daftar menu dan produk dengan menggunakan data yang sudah ada.

// Daftar Menu
const menu_card_template = d.getElementById("menu-card-template");
const menu_list = d.getElementById("menu-list");
for (const menu2 in menu_populer) {
  let menu_card = menu_card_template.cloneNode(true);
  let menu = menu_populer[menu2];

  menu_card.getElementsByClassName("menu-card-title")[0].textContent =
    menu.nama;
  menu_card.getElementsByClassName("menu-card-price")[0].textContent =
    rupiah.format(menu.harga);
  menu_card
    .getElementsByClassName("menu-card-img")[0]
    .setAttribute("src", menu.gambar);
  menu_card
    .getElementsByClassName("menu-card-img")[0]
    .setAttribute("alt", menu.nama);

  appendTemplate(menu_card, menu_list);
}

// Daftar Produk
const product_card_template = d.getElementById("product-card-template");
const product_list = d.getElementById("product-list");
for (const minuman in daftar_menu) {
  let product_card = product_card_template.cloneNode(true);
  let product = daftar_menu[minuman];

  product_card
    .getElementsByClassName("item-detail-button")[0]
    .setAttribute("data-product", minuman);

  product_card
    .getElementsByClassName("shopping-bag-btn")[0]
    .setAttribute("data-product", minuman);

  product_card
    .getElementsByClassName("product-image")[0]
    .getElementsByTagName("img")[0]
    .setAttribute("src", product.gambar);

  product_card
    .getElementsByClassName("products-content")[0]
    .getElementsByTagName("h3")[0].textContent = product.nama;

  product_card.getElementsByClassName("product-price-base")[0].textContent =
    rupiah.format(product.harga);

  product_card.getElementsByClassName("product-price-discount")[0].textContent =
    rupiah.format(product.harga - product.harga * product.diskon);

  product_card
    .getElementsByClassName("product-price")[0]
    .setAttribute("data-diskon", product.diskon > 0.0);

  for (let i = 0; i < 5 - product.nilai; i++) {
    product_card.getElementsByClassName("star-full")[i].classList.add("hidden");
  }

  appendTemplate(product_card, product_list);
}

// Modal Box untuk Detail Produk:
//Ini menangani tampilan modal dan detail produk saat tombol detail ditekan.
const itemDetailModal = d.querySelector("#item-detail-modal");
const itemDetailButtons = d.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
    showDetail(btn);
  };
});

// Klik Tombol Close
d.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  product_rating_reset();
  e.preventDefault();
};

// Klik diluar Modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
    product_rating_reset();
  }
};

// Details
const product_name = d.getElementById("product-name");
const product_desc = d.getElementById("product-desc");
const product_img = d.getElementById("product-img");
const product_rating = d.getElementById("product-rating");
const product_discount = d.getElementById("product-price-discount");
const product_price = d.getElementById("product-price");
const product_prices = d.getElementById("product-prices");
const product_add_cart = d.getElementsByClassName("add-to-cart")[0];

function product_rating_reset() {
  const stars = product_rating.children;
  for (let q = 0; q < stars.length; q++) {
    stars[q].classList.remove("hidden");
  }
}
function showDetail(btn) {
  let product = daftar_menu[btn.getAttribute("data-product")];
  product_name.textContent = product.nama;
  product_desc.innerHTML = product.deskripsi;
  product_img.setAttribute("src", product.gambar);

  product_price.textContent = rupiah.format(product.harga);
  product_discount.textContent = rupiah.format(
    product.harga - product.harga * product.diskon
  );
  product_prices.setAttribute("data-diskon", product.diskon > 0.0);

  for (let i = 0; i < 5 - product.nilai; i++) {
    product_rating
      .getElementsByClassName("star-full")
      [i].classList.add("hidden");
  }
  product_add_cart.setAttribute(
    "data-product",
    btn.getAttribute("data-product")
  );
  product_add_cart.addEventListener("click", () => {
    addCartItem(
      btn.getAttribute("data-product"),
      current_items[btn.getAttribute("data-product")].qty + 1,
      false
    );
  });
}


//Shopping Cart:
//Menangani logika keranjang belanja, termasuk penambahan, pengurangan, dan pembaruan item dalam keranjang.
const shopping_bag_count = d.getElementById("shopping-bag-count");
const shopping_bag = d.getElementsByClassName("shopping-bag-inner")[0];
const shopping_bag_total = d.getElementById("current-items-total");
const shopping_bag_empty = d.getElementsByClassName("shopping-bag-empty")[0];
const shopping_bag_footer = d.getElementsByClassName("shopping-bag-footer")[0];
const cart_item_template = d.getElementById("cart-item-template");
let current_items = {};

for (const l in daftar_menu) {
  current_items[l] = {
    price: daftar_menu[l].harga - daftar_menu[l].harga * daftar_menu[l].diskon,
    qty: 0,
  };
}

function countItems() {
  let o = 0;
  for (const v in current_items) {
    o += current_items[v].qty;
  }
  return o;
}

function updateItemsCount(save = false) {
  shopping_bag_count.textContent = countItems();
  shopping_bag_count.classList.toggle(
    "hidden",
    shopping_bag_count.textContent == "0"
  );
  shopping_bag_empty.classList.toggle(
    "hidden",
    shopping_bag_count.textContent != "0"
  );
  shopping_bag_footer.classList.toggle(
    "hidden",
    shopping_bag_count.textContent == "0"
  );
  shopping_bag_count.classList.remove("anim-pop");
  void shopping_bag_count.offsetWidth;
  shopping_bag_count.classList.add("anim-pop");
  let total = 0;
  for (const item in current_items) {
    total += current_items[item].qty * current_items[item].price;
  }
  shopping_bag_total.textContent = rupiah.format(total);

  if (save) {
    localStorage.setItem("current_items", JSON.stringify(current_items));
  }
}
updateItemsCount(false);

d.querySelectorAll(".shopping-bag-btn").forEach((n) => {
  console.log(n.getAttribute("data-product"));

  n.addEventListener("click", () => {
    addCartItem(
      n.getAttribute("data-product"),
      current_items[n.getAttribute("data-product")].qty + 1
    );
  });
});

function addCartItem(product_id, set_qty = 0, from_storage = false) {
  const product = daftar_menu[product_id];

  if (current_items[product_id].qty == 0) {
    let cart_item = cart_item_template.cloneNode(true);

    const qty_input = cart_item.getElementsByClassName("item-quantity")[0];
    const itm_total = cart_item.getElementsByClassName("item-price-total")[0];

    cart_item
      .getElementsByTagName("img")[0]
      .setAttribute("src", product.gambar);
    cart_item.getElementsByTagName("img")[0].setAttribute("alt", product.nama);
    cart_item.getElementsByTagName("h3")[0].textContent = product.nama;
    cart_item.getElementsByClassName("item-price")[0].textContent =
      rupiah.format(product.harga - product.harga * product.diskon);

    cart_item.setAttribute("data-product", product_id);

    cart_item
      .getElementsByClassName("remove-item")[0]
      .addEventListener("click", (e) => {
        current_items[product_id].qty = 0;
        updateItemsCount(true);
        cart_item.remove();
      });

    cart_item
      .getElementsByClassName("qty-add")[0]
      .addEventListener("click", () => {
        qty_input.value = clamp(parseInt(qty_input.value, 10) + 1, 1, 99);
        current_items[product_id].qty = parseInt(qty_input.value, 10);
        itm_total.textContent = rupiah.format(
          current_items[product_id].qty * current_items[product_id].price
        );
        updateItemsCount(true);
      });

    cart_item
      .getElementsByClassName("qty-sub")[0]
      .addEventListener("click", () => {
        qty_input.value = clamp(parseInt(qty_input.value, 10) - 1, 1, 99);
        current_items[product_id].qty = parseInt(qty_input.value, 10);
        itm_total.textContent = rupiah.format(
          current_items[product_id].qty * current_items[product_id].price
        );
        updateItemsCount(true);
      });

    current_items[product_id].qty = 1;
    itm_total.textContent = rupiah.format(
      current_items[product_id].qty * current_items[product_id].price
    );
    appendTemplate(cart_item, shopping_bag);
  } else {
    current_items[product_id].qty = set_qty;
  }

  const qty_input = shopping_bag
    .querySelectorAll(`[data-product=${product_id}]`)[0]
    .getElementsByClassName("item-quantity")[0];

  qty_input.addEventListener("input", () => {
    const itm_total_ = shopping_bag
      .querySelectorAll(`[data-product=${product_id}]`)[0]
      .getElementsByClassName("item-price-total")[0];
    if (qty_input.value.length > 2) {
      qty_input.value = qty_input.value.slice(0, 2);
    }
    if (!regex_num.test(qty_input.value.toString())) {
      current_items[product_id].qty = 0;
      qty_input.value = "";
    } else {
      current_items[product_id].qty = parseInt(qty_input.value);
      qty_input.value = current_items[product_id].qty;
    }
    if (isNaN(current_items[product_id].qty)) {
      current_items[product_id].qty = 0;
    }
    itm_total_.textContent = rupiah.format(
      current_items[product_id].qty * current_items[product_id].price
    );
    updateItemsCount(true);
  });

  if (set_qty === 0) {
    current_items[product_id].qty = clamp(qty_input.value, 1, 99);
  } else {
    qty_input.value = set_qty;
    current_items[product_id].qty = set_qty;
  }

  qty_input.value = current_items[product_id].qty;
  updateItemsCount(!from_storage);
}

if (localStorage.getItem("current_items") != null) {
  const data = JSON.parse(localStorage.getItem("current_items"));
  for (const itm in data) {
    console.log(data[itm].qty);
    if (data[itm].qty != 0) {
      addCartItem(itm, data[itm].qty, true);
    }
  }
}

// Validation Co Form
const check_out_btn = document.querySelector(".co-btn");
check_out_btn.disabled = true;

const checkout_form = d.querySelector("#co-form");

checkout_form.addEventListener("input", function () {
  for (let i = 0; i < checkout_form.elements.length; i++) {
    if (checkout_form.elements[i].value.length !== 0) {
      check_out_btn.classList.remove("disabled");
      check_out_btn.classList.add("disabled");
    } else {
      return false;
    }
  }
  check_out_btn.disabled = false;
  check_out_btn.classList.remove("disabled");
});

// OffSet Cart Menu
const resizeCartMenu = () => {
  const navHeight = d.querySelector("nav.navbar").offsetHeight;
  shoppingBag.style.height = (window.innerHeight - navHeight).toString() + "px";
};
window.onresize = () => {
  resizeCartMenu();
};
window.onscroll = () => {
  resizeCartMenu();
};
resizeCartMenu();

d.getElementById("co-form").addEventListener("submit", (e) => {
  e.preventDefault();
});
