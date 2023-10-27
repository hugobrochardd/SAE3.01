<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Product.php");


/**
 *  Classe ProductRepository
 * 
 *  Cette classe représente le "stock" de Product.
 *  Toutes les opérations sur les Product doivent se faire via cette classe 
 *  qui tient "synchro" la bdd en conséquence.
 * 
 *  La classe hérite de EntityRepository ce qui oblige à définir les méthodes  (find, findAll ... )
 *  Mais il est tout à fait possible d'ajouter des méthodes supplémentaires si
 *  c'est utile !
 *  
 */
class ProductRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function find($id): ?Product{
        /*
            La façon de faire une requête SQL ci-dessous est "meilleur" que celle vue
            au précédent semestre (cnx->query). Notamment l'utilisation de bindParam
            permet de vérifier que la valeur transmise est "safe" et de se prémunir
            d'injection SQL.
        */
        $requete = $this->cnx->prepare("SELECT `id_product`, `name`, `category`, Product.id_category,`price`, `delivery`, `description`, `images`, `option`, `options`, `stock` FROM `Product` INNER JOIN Categories ON Product.id_category = Categories.id_category INNER JOIN Options ON Product.id_option = Options.id_option WHERE id_product=:value"); // prepare la requête SQL
        $requete->bindParam(':value', $id); // fait le lien entre le "tag" :value et la valeur de $id
        $requete->execute(); // execute la requête
        $answer = $requete->fetch(PDO::FETCH_OBJ);
        
        if ($answer==false) return null; // may be false if the sql request failed (wrong $id value for example)
        
        $p = new Product($answer->id_product);
        $p->setName($answer->name);
        $p->setPrice($answer->price);
        $p->setDelivery($answer->delivery);
        $p->setDescription($answer->description);
        $p->setId_category($answer->id_category);
        $p->setCategory($answer->category);
        $p->setImages($answer->images);
        $p->setOption($answer->option);
        $p->setOptions($answer->options);
        $p->setStock($answer->stock);

        return $p;
    }

    public function findAll(): array {

       
        $requete = $this->cnx->prepare("SELECT `id_product`, `name`, `category`, Product.id_category,`price`, `delivery`, `description`, `images`, `option`, `options`, `stock` FROM `Product` INNER JOIN Categories ON Product.id_category = Categories.id_category INNER JOIN Options ON Product.id_option = Options.id_option WHERE 1;");
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $p = new Product($obj->id_product);
            $p->setName($obj->name);
            $p->setPrice($obj->price);
            $p->setDelivery($obj->delivery);
            $p->setDescription($obj->description);
            $p->setId_category($obj->id_category);
            $p->setCategory($obj->category);
            $p->setImages($obj->images);
            $p->setOption($obj->option);
            $p->setOptions($obj->options);
            $p->setStock($obj->stock);
            array_push($res, $p);
        }
       
        return $res;
    }


    public function findAllByCategory($cat): array {

       
        $requete = $this->cnx->prepare("SELECT `id_product`, `name`, `category`, Product.id_category,`price`, `delivery`, `description`, `images`, `option`, `options`, `stock` FROM `Product` INNER JOIN Categories ON Product.id_category = Categories.id_category INNER JOIN Options ON Product.id_option = Options.id_option WHERE category=:value;");
        $requete->bindParam(':value', $cat); // fait le lien entre le "tag" :value et la valeur de $id
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $p = new Product($obj->id_product);
            $p->setName($obj->name);
            $p->setPrice($obj->price);
            $p->setDelivery($obj->delivery);
            $p->setDescription($obj->description);
            $p->setId_category($obj->id_category);
            $p->setCategory($obj->category);
            $p->setImages($obj->images);
            $p->setOption($obj->option);
            $p->setOptions($obj->options);
            $p->setStock($obj->stock);
            array_push($res, $p);
        }
       
        return $res;
    }




    


    public function save($product){
        $requete = $this->cnx->prepare("/////////////////////////////////insert into Product (name, price, delivery, description, category) values (:name, :price, :delivery, :description, :id_category)");
        $name = $product->getName();
        $price = $product->getPrice();
        $delivery = $product->getDelivery();
        $description = $product->getDescription();
        $idcat = $product->getIdcategory();
        $images = $product->getImages();
        $option = $product->getOption();
        $options = $product->getOptions();
        $stock = $product->getStock();
        $requete->bindParam(':name', $name );
        $requete->bindParam(':price', $price );
        $requete->bindParam(':delivery', $delivery );
        $requete->bindParam(':description', $description );
        $requete->bindParam(':idcategory', $idcat);
        $requete->bindParam(':images', $images);
        $requete->bindParam(':option', $option);
        $requete->bindParam(':options', $options);
        $requete->bindParam(':stock', $stock);


        $answer = $requete->execute(); // an insert query returns true or false. $answer is a boolean.

        if ($answer){
            $id = $this->cnx->lastInsertId(); // retrieve the id of the last insert query
            $product->setId($id); // set the product id to its real value.
            return true;
        }
          
        return false;
    }

    public function delete($id){
        // Not implemented ! TODO when needed !
        return false;
    }

    public function update($product){
        // Not implemented ! TODO when needed !
        return false;
    }

   
    
}