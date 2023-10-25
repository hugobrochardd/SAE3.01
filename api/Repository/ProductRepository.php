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
        $requete = $this->cnx->prepare("SELECT `id_product`, `name`, `category`, `id_category`,`price`, `delivery`, `description`, `image1`, `image2`, `image3`, `image4`, `image5` FROM `Product` INNER JOIN Categories ON Product.id_category = Categories.id_category WHERE id_product=:value"); // prepare la requête SQL
        $requete->bindParam(':value', $id); // fait le lien entre le "tag" :value et la valeur de $id
        $requete->execute(); // execute la requête
        $answer = $requete->fetch(PDO::FETCH_OBJ);
        
        if ($answer==false) return null; // may be false if the sql request failed (wrong $id value for example)
        
        $p = new Product($answer->id_product);
        $p->setName($answer->name);
        $p->setPrice($answer->price);
        $p->setDelivery($answer->delivery);
        $p->setDescription($answer->description);
        $p->setIdcategory($answer->id_category);
        $p->setImage1($answer->image1);
        $p->setImage2($answer->image2);
        $p->setImage3($answer->image3);
        $p->setImage4($answer->image4);
        $p->setImage5($answer->image5);
        return $p;
    }

    public function findAll(): array {

       
        $requete = $this->cnx->prepare("SELECT `id_product`, `name`, `category`, `id_category`,`price`, `delivery`, `description`, `image1`, `image2`, `image3`, `image4`, `image5` FROM `Product` INNER JOIN Categories ON Product.id_category = Categories.id_category WHERE 1");
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $p = new Product($obj->id_product);
            $p->setName($obj->name);
            $p->setPrice($obj->price);
            $p->setDelivery($obj->delivery);
            $p->setDescription($obj->description);
            $p->setIdcategory($obj->id_category);
            $p->setImage1($obj->image1);
            $p->setImage2($obj->image2);
            $p->setImage3($obj->image3);
            $p->setImage4($obj->image4);
            $p->setImage5($obj->image5);
            array_push($res, $p);
        }
       
        return $res;
    }


    public function findByCategory($cat): array {

       
        $requete = $this->cnx->prepare("SELECT `id_product`, `name`, `category`, `id_category`,`price`, `delivery`, `description`, `image1`, `image2`, `image3`, `image4`, `image5` FROM `Product` INNER JOIN Categories ON Product.id_category = Categories.id_category WHERE category=:value;");
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
            $p->setIdcategory($obj->id_category);
            $p->setCategory($obj->category);
            $p->setImage1($obj->image1);
            $p->setImage2($obj->image2);
            $p->setImage3($obj->image3);
            $p->setImage4($obj->image4);
            $p->setImage5($obj->image5);
            array_push($res, $p);
        }
       
        return $res;
    }




    


    public function save($product){
        $requete = $this->cnx->prepare("insert into Product (name, price, delivery, description, category) values (:name, :price, :delivery, :description, :id_category)");
        $name = $product->getName();
        $price = $product->getPrice();
        $delivery = $product->getDelivery();
        $description = $product->getDescription();
        $idcat = $product->getIdcategory();
        $image1 = $product->getImage1();
        $image2 = $product->getImage2();
        $image3 = $product->getImage3();
        $image4 = $product->getImage4();
        $image5 = $product->getImage5();
        $requete->bindParam(':name', $name );
        $requete->bindParam(':price', $price );
        $requete->bindParam(':delivery', $delivery );
        $requete->bindParam(':description', $description );
        $requete->bindParam(':idcategory', $idcat);
        $requete->bindParam(':image1', $image1);
        $requete->bindParam(':image2', $image2);
        $requete->bindParam(':image3', $image3);
        $requete->bindParam(':image4', $image4);
        $requete->bindParam(':image5', $image5);

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