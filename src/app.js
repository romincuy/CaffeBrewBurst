document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {id: 1, name: 'Robusta Brazil', img: 'product-1.jpg', price: 20000},
            {id: 2, name: 'Cappucino', img: 'product-1.jpg', price: 30000},
            {id: 3, name: 'Vanilla Latte', img: 'product-1.jpg', price: 20000},
            {id: 4, name: 'Arabica Blend', img: 'product-1.jpg', price: 30000},
            {id: 5, name: 'Aceh Gayo', img: 'product-1.jpg', price: 10000},
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0, // Define the 'quantity' property
        add(newItem) {
            const cartItem = this.items.find((item) => item.id === newItem.id);

            if (!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;
            } else {
                cartItem.quantity++;
                cartItem.total = cartItem.price * cartItem.quantity;
                this.quantity++;
                this.total += cartItem.price;
            }
        },
        // fungsi menambah item barang sama
        addItem(item) {
            const cartItem = this.items.find((i) => i.id === item.id);
            if (cartItem) {
                cartItem.quantity++;
                cartItem.total = cartItem.quantity * cartItem.price;
                this.quantity++;
                this.total += cartItem.price;
            }
        },
        // fungsi mengurangi item barang sama
        removeItem(item) {
            const cartItem = this.items.find((i) => i.id === item.id);
            if (cartItem && cartItem.quantity > 1) {
                cartItem.quantity--;
                cartItem.total = cartItem.quantity * cartItem.price;
                this.quantity--;
                this.total -= cartItem.price;
            } else if (cartItem && cartItem.quantity === 1) {
                this.items = this.items.filter((i) => i.id !== item.id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
});

//form validation
// const checkoutButton = document.querySelector(".checkout-button");
// checkoutButton.disabled = true;

// const form = document.querySelector("#chechoutForm");

// form.addEventListener('keyup', function() {
//     for(let i = 0; i < form.ELEMENT_NODE.length; i++) {
//         if(form.element[i].value.length !==0) {
//             checkoutButton.classList.remove('disabled');
//             checkoutButton.classList.add('disabled');
//         } else {
//             return false;
//         }
//     }
//     checkoutButton.disabled = false;
//     checkoutButton.classList.remove('disabled');
// });


// to rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};