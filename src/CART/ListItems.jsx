import Items from "./Items"
import ImportImagesItem1 from "./imagems/shoes.png"
import CART from "./imagems/cart.png"

function ListItems() {
  return (
    <div>
      <div className="CartName">
       <img src={CART} alt="crt" />
       <h1>Carrinho</h1>
      </div>
        <Items 
        ImageItems ={ImportImagesItem1} 
        NameItem ="Sapato Masculino Brogue" 
        SizeItem="Num 39" 
        ColorItem="Cor - Preto"
        PriceItem="146,99"/>
        <Items 
        ImageItems ={ImportImagesItem1} 
        NameItem ="Sapato Masculino Brogue" 
        SizeItem="Num 39" 
        ColorItem="Cor - Preto"
        PriceItem="146,99"/>
        <Items 
        ImageItems ={ImportImagesItem1} 
        NameItem ="Sapato Masculino Brogue" 
        SizeItem="Num 39" 
        ColorItem="Cor - Preto"
        PriceItem="146,99"/>
        <Items 
        ImageItems ={ImportImagesItem1} 
        NameItem ="Sapato Masculino Brogue" 
        SizeItem="Num 39" 
        ColorItem="Cor - Preto"
        PriceItem="146,99"/>
        <Items 
        ImageItems ={ImportImagesItem1} 
        NameItem ="Sapato Masculino Brogue" 
        SizeItem="Num 39" 
        ColorItem="Cor - Preto"
        PriceItem="146,99"/>
      <div className="button">
       <button className="Checkout">Finalizar Compras</button>
      </div>
    </div>
    
  )
}

export default ListItems
