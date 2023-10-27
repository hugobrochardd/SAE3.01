import { Product } from "../class/product.js";

const homeTemplate = document.querySelector("#home").innerHTML;
const cardsTemplate = document.querySelector("#cards").innerHTML;
const productTemplate = document.querySelector("#product").innerHTML;
const optionTemplate = document.querySelector("#product-options").innerHTML;
const imageTemplate = document.querySelector("#product-images").innerHTML;

  
// data attend un tableau de Product
let renderHome = function(data){
  
    let html = "";
    let all = "";
    // on vérifie que data est bien est tableau
    if (data instanceof Array === false) { 
        console.error( "data has to be an array of Products");
        return all;
    }
            html = homeTemplate.replace('{{image1XL}}', data[7].getImages()[0]);
            html = html.replace('{{nameXL}}', data[7].getName());
            html = html.replace('{{priceXL}}', data[7].getPrice());
            html = html.replace('{{id_productXL}}', data[7].getId_product());
            if(data[7].getStock()==0){
                html = html.replace('{{displayLowXL}}', "none");
                html = html.replace('{{displayNoXL}}', "block");
            }
            if(data[7].getStock()<100){
                html = html.replace('{{displayNoXL}}', "none");
                html = html.replace('{{displayLowXL}}', "block");
            }
            if(data[7].getStock()>100){
                html = html.replace('{{displayNoXL}}', "none");
                html = html.replace('{{displayLowXL}}', "none");
            }

            

            html = html.replace('{{image1News1}}', data[8].getImages()[0]);
            html = html.replace('{{nameNews1}}', data[8].getName());
            html = html.replace('{{priceNews1}}', data[8].getPrice());
            html = html.replace('{{id_productNews1}}', data[8].getId_product());
            if(data[8].getStock()==0){
                html = html.replace('{{displayLowNews1}}', "none");
                html = html.replace('{{displayNoNews1}}', "block");
            }
            if(data[8].getStock()<100){
                html = html.replace('{{displayLowNews1}}', "block");
                html = html.replace('{{displayNoNews1}}', "none");
            }
            if(data[8].getStock()>100){
                html = html.replace('{{displayLowNews1}}', "none");
                html = html.replace('{{displayNoNews1}}', "none");
            }



            html = html.replace('{{image1News2}}', data[9].getImages()[0]);
            html = html.replace('{{nameNews2}}', data[9].getName());
            html = html.replace('{{priceNews2}}', data[9].getPrice());
            html = html.replace('{{id_productNews2}}', data[9].getId_product());
            if(data[9].getStock()==0){
                html = html.replace('{{displayLowNews2}}', "none");
                html = html.replace('{{displayNoNews2}}', "block");
            }
            if(data[9].getStock()<100){
                html = html.replace('{{displayNoNews2}}', "none");
                html = html.replace('{{displayLowNews2}}', "block");
            }
            if(data[9].getStock()>100){
                html = html.replace('{{displayLowNews2}}', "none");
                html = html.replace('{{displayNoNews2}}', "none");
            }


            html = html.replace('{{image1Line1-1}}', data[6].getImages()[0]);
            html = html.replace('{{nameLine1-1}}', data[6].getName());
            html = html.replace('{{priceLine1-1}}', data[6].getPrice());
            html = html.replace('{{id_productLine1-1}}', data[6].getId_product());
            if(data[6].getStock()==0){
                html = html.replace('{{displayNoLine1-1}}', "block");
                html = html.replace('{{displayLowLine1-1}}', "none");
            } 
            if(data[6].getStock()<100){
                html = html.replace('{{displayLowLine1-1}}', "block");
                html = html.replace('{{displayNoLine1-1}}', "none");
            }           
            if(data[6].getStock()>100){
                html = html.replace('{{displayNoLine1-1}}', "none");
                html = html.replace('{{displayLowLine1-1}}', "none");
            }
            




            html = html.replace('{{image1Line1-2}}', data[4].getImages()[0]);
            html = html.replace('{{nameLine1-2}}', data[4].getName());
            html = html.replace('{{priceLine1-2}}', data[4].getPrice());
            html = html.replace('{{id_productLine1-2}}', data[4].getId_product());
            if(data[4].getStock()==0){
                html = html.replace('{{displayLowLine1-2}}', "none");
                html = html.replace('{{displayNoLine1-2}}', "block");
            }
            if(data[4].getStock()<100){
                html = html.replace('{{displayNoLine1-2}}', "none");
                html = html.replace('{{displayLowLine1-2}}', "block");

            }
            if(data[4].getStock()>100){
                html = html.replace('{{displayLowLine1-2}}', "none");
                html = html.replace('{{displayNoLine1-2}}', "none");
            }



            html = html.replace('{{image1Line1-3}}', data[5].getImages()[0]);
            html = html.replace('{{nameLine1-3}}', data[5].getName());
            html = html.replace('{{priceLine1-3}}', data[5].getPrice());
            html = html.replace('{{id_productLine1-3}}', data[5].getId_product());
            if(data[5].getStock()==0){
                html = html.replace('{{displayLowLine1-3}}', "none");
                html = html.replace('{{displayNoLine1-3}}', "block");
            }
            if(data[5].getStock()<100){
                html = html.replace('{{displayNoLine1-3}}', "none");
                html = html.replace('{{displayLowLine1-3}}', "block");
            }
            if(data[5].getStock()>100){
                html = html.replace('{{displayLowLine1-3}}', "none");
                html = html.replace('{{displayNoLine1-3}}', "none");
            }

            html = html.replace('{{image1L}}', data[1].getImages()[0]);
            html = html.replace('{{nameL}}', data[1].getName());
            html = html.replace('{{priceL}}', data[1].getPrice());
            html = html.replace('{{id_productL}}', data[1].getId_product());
            if(data[1].getStock()==0){
                html = html.replace('{{displayLowL}}', "none");
                html = html.replace('{{displayNoL}}', "block");
            }
            if(data[1].getStock()<100){
                html = html.replace('{{displayNoL}}', "none");
                html = html.replace('{{displayLowL}}', "block");
            }
            if(data[1].getStock()>100){
                html = html.replace('{{displayLowL}}', "none");
                html = html.replace('{{displayNoL}}', "none");
            }

            html = html.replace('{{image1Line2-1}}', data[10].getImages()[0]);
            html = html.replace('{{nameLine2-1}}', data[10].getName());
            html = html.replace('{{priceLine2-1}}', data[10].getPrice());
            html = html.replace('{{id_productLine2-1}}', data[10].getId_product());
            if(data[10].getStock()==0){
                html = html.replace('{{displayLowLine2-1}}', "none");
                html = html.replace('{{displayNoLine2-1}}', "block");
            }
            if(data[10].getStock()<100){
                html = html.replace('{{displayNoLine2-1}}', "none");
                html = html.replace('{{displayLowLine2-1}}', "block");
            }
            if(data[10].getStock()>100){
                html = html.replace('{{displayLowLine2-1}}', "none");
                html = html.replace('{{displayNoLine2-1}}', "none");
            }

            html = html.replace('{{image1Line2-2}}', data[11].getImages()[0]);
            html = html.replace('{{nameLine2-2}}', data[11].getName());
            html = html.replace('{{priceLine2-2}}', data[11].getPrice());
            html = html.replace('{{id_productLine2-2}}', data[11].getId_product());
            if(data[11].getStock()==0){
                html = html.replace('{{displayLowLine2-2}}', "none");
                html = html.replace('{{displayNoLine2-2}}', "block");
            }
            if(data[11].getStock()<100){
                html = html.replace('{{displayNoLine2-2}}', "none");
                html = html.replace('{{displayLowLine2-2}}', "block");
            }
            if(data[11].getStock()>100){
                html = html.replace('{{displayLowLine2-2}}', "none");
                html = html.replace('{{displayNoLine2-2}}', "none");
            }

            html = html.replace('{{image1Line2-3}}', data[12].getImages()[0]);
            html = html.replace('{{nameLine2-3}}', data[12].getName());
            html = html.replace('{{priceLine2-3}}', data[12].getPrice());
            html = html.replace('{{id_productLine2-3}}', data[12].getId_product());
            if(data[12].getStock()==0){
                html = html.replace('{{displayLowLine2-3}}', "none");
                html = html.replace('{{displayNoLine2-3}}', "block");
            }
            if(data[12].getStock()<100){
                html = html.replace('{{displayNoLine2-3}}', "none");
                html = html.replace('{{displayLowLine2-3}}', "block");
            }            
            if(data[12].getStock()>100){
                html = html.replace('{{displayLowLine2-3}}', "none");
                html = html.replace('{{displayNoLine2-3}}', "none");
            }

            all += html;

    return all;
 }

 let renderCards = function(data){
  
    let html = "";
    let all = "";
    // on vérifie que data est bien est tableau
    if (data instanceof Array === false) { 
        console.error( "data has to be an array of Products");
        return all;
    }
    for(let p of data){
        // on vérifie que p est bien un Product
        if (p instanceof Product){
            html = cardsTemplate.replace('{{image1}}', p.getImages()[0]);
            html = html.replace('{{name}}', p.getName());
            html = html.replace('{{price}}', p.getPrice());
            html = html.replace('{{id_product}}', p.getId_product());
            if(p.getStock()==0){
                html = html.replace('{{displayLow}}', "none");
                html = html.replace('{{displayNo}}', "block");
            }
            if(p.getStock()<100){
                html = html.replace('{{displayNo}}', "none");
                html = html.replace('{{displayLow}}', "block");
            }
            else{
                html = html.replace('{{displayNo}}', "none");
                html = html.replace('{{displayLow}}', "none");
            }
            all += html;
        }
    }

    return all;
 }



 let renderOptions = function(data){
  
    let html = "";
    let all = "";
    // on vérifie que data est bien est tableau

    for(let i=0; i<data.getOptions().length; i++){
        html = optionTemplate.replace('{{option}}', data.getOptions()[i]);

        all += html;

    }

    return all;
 }


 let renderImages = function(data){
  
    let html = "";
    let all = "";
    // on vérifie que data est bien est tableau

    for(let i=0; i<data.getImages().length; i++){
        html = imageTemplate.replaceAll('{{image}}', data.getImages()[i]);
        all += html;

    }

    return all;
 }









 let renderProduct = function(data){
  
    let html = "";
    let all = "";
    // on vérifie que data est bien est tableau
    if (data instanceof Array === false) { 
        console.error( "data has to be an array of Products");
        return all;
    }
        console.log(data)
        html = productTemplate.replace('{{imagecover}}', data[0].getImages()[0]);
        html = html.replace('{{name}}', data[0].getName());
        html = html.replace('{{price}}', data[0].getPrice());
        html = html.replace('{{delivery}}', data[0].getDelivery());
        html = html.replace('{{description}}', data[0].getDescription());
        html = html.replaceAll('{{option}}', data[0].getOption());
        html = html.replace('{{listoptions}}', renderOptions(data[0]));
        html = html.replace('{{listimages}}', renderImages(data[0]));
        console.log(data[0].getStock())
        if(data[0].getStock()==0){
            html = html.replace('{{stock}}', "No");
        }
        if(data[0].getStock()<100){
            html = html.replace('{{stock}}', "Low");
        }
        else{
            html = html.replace('{{stock}}', "Good");
        }
        all += html;
    
    return all;
}


 

 export {renderHome as HomeRenderer};
 export {renderCards as CardsRenderer};
 export {renderProduct as ProductRenderer};
