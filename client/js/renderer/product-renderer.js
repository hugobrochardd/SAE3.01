import { Product } from "../class/product.js";

const homeTemplate = document.querySelector("#home").innerHTML;
  
// data attend un tableau de Product
let render = function(data){
  
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

            html = homeTemplate.replace("{{id}}", p.getId() );
            html = homeTemplate.replace('{{image1XL}}', data[7].getImages()[0]);
            html = html.replace('{{nameXL}}', data[7].getName());
            html = html.replace('{{priceXL}}', data[7].getPrice());

            html = html.replace('{{image1News1}}', data[8].getImages()[0]);
            html = html.replace('{{nameNews1}}', data[8].getName());
            html = html.replace('{{priceNews1}}', data[8].getPrice());

            html = html.replace('{{image1News2}}', data[9].getImages()[0]);
            html = html.replace('{{nameNews2}}', data[9].getName());
            html = html.replace('{{priceNews2}}', data[9].getPrice());

            html = html.replace('{{image1Line1-1}}', data[6].getImages()[0]);
            html = html.replace('{{nameLine1-1}}', data[6].getName());
            html = html.replace('{{priceLine1-1}}', data[6].getPrice());

            html = html.replace('{{image1Line1-2}}', data[4].getImages()[0]);
            html = html.replace('{{nameLine1-2}}', data[4].getName());
            html = html.replace('{{priceLine1-2}}', data[4].getPrice());

            html = html.replace('{{image1Line1-3}}', data[5].getImages()[0]);
            html = html.replace('{{nameLine1-3}}', data[5].getName());
            html = html.replace('{{priceLine1-3}}', data[5].getPrice());

            html = html.replace('{{image1L}}', data[1].getImages()[0]);
            html = html.replace('{{nameL}}', data[1].getName());
            html = html.replace('{{priceL}}', data[1].getPrice());

            html = html.replace('{{image1Line2-1}}', data[10].getImages()[0]);
            html = html.replace('{{nameLine2-1}}', data[10].getName());
            html = html.replace('{{priceLine2-1}}', data[10].getPrice());

            html = html.replace('{{image1Line2-2}}', data[11].getImages()[0]);
            html = html.replace('{{nameLine2-2}}', data[11].getName());
            html = html.replace('{{priceLine2-2}}', data[11].getPrice());

            html = html.replace('{{image1Line2-3}}', data[12].getImages()[0]);
            html = html.replace('{{nameLine2-3}}', data[12].getName());
            html = html.replace('{{priceLine2-3}}', data[12].getPrice());

            all += html;
        }
    }

    return all;
 }

 export {render as productRenderer};