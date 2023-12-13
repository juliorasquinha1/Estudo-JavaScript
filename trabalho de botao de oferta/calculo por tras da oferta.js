function inicio(){
    let produto = window.prompt('digite o produto que voce quer comprar:');
    let preço = parseFloat(window.prompt(`digite o preço do ${produto} R$:`)); 
    let desconto = 10
    let valor_do_desconto = (preço)*(desconto) / 100
    let preço_com_desconto = (preço) - (valor_do_desconto)
    let res = window.document.getElementById('resultado2');
      res.innerHTML =
       `<p>calculando o desconto de 10% para ${produto}
    
        <p> o preço original era R$${preço},00
        
        <p>voce acaba de ganhar R$${valor_do_desconto},00 de desconto (-10%)

        <p> valor final foi de R$${preço_com_desconto},00</p>`

    }