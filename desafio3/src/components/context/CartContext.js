import React, {useState,useEffect} from 'react'

export const  CartContext = React.createContext([])

export const CartProvider = ({children}) => {
    // array con items de este forma ----------------  {item:item, quantity: number}
    const [cart,setCart] = useState([])
    const [totalItems,setTotalItems] = useState(0);
    const [totalPrecio,setTotalPrecio] = useState(0)

    useEffect(()=>{
        
        let totItems = 0;
        let precio = 0;

        for(let cartItem of cart) {
            totItems += cartItem.quantity;
            precio += cartItem.quantity * cartItem.item.price;
        }
//otraa manera de hacerlo
        //----     for(let cartItem of cart) {
        // ----    totItems += cartItem.quantity;
        // ----    precio += cartItem.quantity * cartItem.item.price;
        // }

        setTotalItems(totItems);
        setTotalPrecio(precio)

    },[cart])
    

    const addItem = (newItem, newQuantity)=>{

         /*   const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));

	const [cart, setCart] = useState(
		cartLocalStorage && cartLocalStorage.length > 0 ? cartLocalStorage : defaultValue
	);

	cart.totalPrice =
		cart.length > 0
			? cart.reduce((total, cartItem) => total + cartItem.quantity * cartItem.item.price, 0)
			: "";
	cart.totalItems =
		cart.length > 0
			? cart.reduce((totalItemsCart, cartItem) => totalItemsCart + cartItem.quantity, 0)
			: ""; 
*/
        const prevCartItem = cart.find(e=> e.item.id === newItem.id)

    
        let newCart;
        let qty;
        if (prevCartItem){
            newCart = cart.filter(e => e.item.id !== newItem.id)
            qty = prevCartItem.quantity + newQuantity;
        }else{
            newCart = [...cart]
            qty =  newQuantity;
        }

        setCart([...newCart, 
                { item: newItem , quantity: qty  }])
        
    } // ----agregar  cantidades de un ítem al carrito


    const removeItem = (itemId) =>{
        const newCart = cart.filter(e => e.item.id !== itemId)
        setCart(newCart)
    }// Remover un item del cart por -----> id
    
    const clear = ()=>{
        setCart([])
    } // Remover todos los items
    
    const isInCart = (id) =>{
        const currentItem = cart.find(e=> e.item.id === id)

        return currentItem ? true : false
    } 



    return (
    <CartContext.Provider value={{cart,addItem,removeItem,clear,isInCart, totalItems,totalPrecio}} >
        {children}
    </CartContext.Provider>
    )
}
