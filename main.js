var app = new Vue({ // Class
el: '#app',
data:{//data object
    brand: 'Vue.Js Website',
    product: 'Tesla Model S',//property oder Eigenschaften
    image: 'images/Auto.jpg',
    link: 'https://de.wikipedia.org/wiki/Adolf_Hitler',
    inventory: 15,
    inStock: true,
    onSale: true,
    details: ["Reichweite: 600km", "Höchstgeschwindigkeit:322kmh", "PS:1020PS"],//Array in komischen Klammern
    variants: [{ 
            variantId: 23123,
            variantColor: "black",
            variantImage:"images/autoBlack.jpg"
        },
        {
            variantId: 123141,
            variantColor: "red",
            variantImage:"images/autoRed.jpg"
        }
    ],
    sizes:["40", "41", "42", "43", "44", "45", "46"],//wird nicht benutzt
    cart: 0
},
methods:{
    addToCart: function(){
        this.cart += 1;
    },
    updateProduct(variantImage){
        this.image = variantImage
    },
    deleteOne: function(){
        if (this.cart != 0){//mit this.cart greift man auf die jeweilige Eigenschaft zu. Diese kann man schließlich manipulieren
        this.cart -= 1;
        }
    }
},
computed:{//errechnet z.B property + property 
    title(){
       return this.brand  + ' ' + this.product
    }
}

})
// console.log(document.getElementById("Test").getAttribute("key"));//Warum funktioniert das nicht ?