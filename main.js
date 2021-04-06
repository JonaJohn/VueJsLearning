Vue.component('product', {//template kann nur ein Element wiedergeben. Deswegen wird ein großes Div wiedergegeben
    props:{//möglichkeit Daten von drausen mit reinzubringen
        premium:{
            type: Boolean,
            required: true

        }
    },
    template:`
    <div class = "product">

    <div class = 'product-image'>
        <img v-bind:src="image"> 
    </div>  
    <div class = 'product-info'>
        <h1>{{ title }}</h1>
        <p v-if = "inventory > 10">in Stock</p>
        <p v-else-if ="inventory <= 10 && inventory > 0">Almost out of Stock</p>
        <p v-else :class="{outOfStock: !inStock}">out of Stock</p>

        <ul>
            <li v-for = "detail in details">{{detail}}</li>
        </ul>
        <div v-for = "(variant, index) in variants" 
            v-bind:key="variant.variantId"
            class ="color-box"
            v-bind:style="{backgroundColor: variant.variantColor}"
            v-on:mouseover="updateProduct(index)"><!--backgroundColor is the css property  -->
        </div>

        <button v-on:click="addToCart" 
                v-bind:disabled="!inStock"
                v-bind:class="{disabledButton: !inStock}">Add to Cart</button>

        <div class="cart">
            <p>Cart({{cart}})</p>
            <p>{{printoutSomething}}</p>
        </div>
        
        <button v-on:click="deleteOne">Delete one</button>
        
    </div>
    <div>
        <span v-if="onSale">OnSale</span>
        <a v-bind:href="link"> Einmal bitte drücken </a>
        <p>User is Premium: {{premium}}</p>
    </div>      

</div>`,
data(){//returns an data object
    return {
        brand: 'Vue.Js Website',
        product: 'Tesla Model S',//property oder Eigenschaften
        // image: 'images/Auto.jpg',
        link: 'https://de.wikipedia.org/wiki/Adolf_Hitler',
        inventory: 15,
        selection: 0,
        onSale: true,
        details: ["Reichweite: 600km", "Höchstgeschwindigkeit:322kmh", "PS:1020PS"],//Array in komischen Klammern
        variants: [{ 
                variantId: 23123,
                variantColor: "black",
                variantImage:"images/autoBlack.jpg",
                variantQuantity: 10
            },
            {
                variantId: 123141,
                variantColor: "red",
                variantImage:"images/autoRed.jpg",
                variantQuantity: 0
            }
        ],
        sizes:["40", "41", "42", "43", "44", "45", "46"],//wird nicht benutzt
        cart: 0
    } 
},
methods:{
        addToCart: function(){
            this.cart += 1;
        },
        updateProduct(index){
            this.selection = index
            console.log(index)
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
    },
    image(){
        return this.variants[this.selection].variantImage
    },
    inStock(){
        return this.variants[this.selection].variantQuantity
    },
    printoutSomething(){
        if (this.inStock != 0){
        return this.brand + " " + this.product
        }
    }

}
})


var app = new Vue({ // Class
el: '#app',
data:{
    premium: true
}

})
// console.log(document.getElementById("Test").getAttribute("key"));//Warum funktioniert das nicht ?