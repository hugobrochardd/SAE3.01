<?php
/**
 *  Class Product
 * 
 *  Représente un produit avec uniquement 3 propriétés (id, name, category)
 * 
 *  Implémente l'interface JsonSerializable 
 *  qui oblige à définir une méthode jsonSerialize. Cette méthode permet de dire comment les objets
 *  de la classe Product doivent être converti en JSON. Voire la méthode pour plus de détails.
 */
class Product implements JsonSerializable {
    private int $id_product; // id du produit
    private string $name; // nom du produit
    private int $price; 
    private string $delivery; 
    private string $description; 
    private string $id_category; 
    private string $image1; 
    private string $image2; 
    private string $image3; 
    private string $image4; 
    private string $image5; 

    // id de la catégorie du produit

    public function __construct(int $id){
        $this->id_product = $id;
    }

    /**
     * Get the value of id
     */ 
    public function getId(): int
    {
        return $this->id_product;
    }

    /**
     *  Define how to convert/serialize a Product to a JSON format
     *  This method will be automatically invoked by json_encode when apply to a Product
     * 
     *  En français : On sait qu'on aura besoin de convertir des Product en JSON pour les
     *  envoyer au client. La fonction json_encode sait comment convertir en JSON des données
     *  de type élémentaire. A savoir : des chaînes de caractères, des nombres, des booléens
     *  des tableaux ou des objets standards (stdClass). 
     *  Mais json_encode ne saura pas convertir un objet de type Product dont les propriétés sont
     *  privées de surcroit. Sauf si on définit la méthode JsonSerialize qui doit retourner une
     *  représentation d'un Product dans un format que json_encode sait convertir (ici un tableau associatif)
     * 
     *  Le fait que Product "implémente" l'interface JsonSerializable oblige à définir la méthode
     *  JsonSerialize et permet à json_encode de savoir comment convertir un Product en JSON.
     * 
     *  Parenthèse sur les "interfaces" : Une interface est une classe (abstraite en générale) qui
     *  regroupe un ensemble de méthodes. On dit que "une classe implémente une interface" au lieu de dire 
     *  que "une classe hérite d'une autre" uniquement parce qu'il n'y a pas de propriétés dans une "classe interface".
     * 
     *  Voir aussi : https://www.php.net/manual/en/class.jsonserializable.php
     *  
     */
    public function JsonSerialize(): mixed{
        
        return ["id_product" => $this->id_product, "name" => $this->name, "price" => $this->price, "delivery" => $this->delivery, "description" => $this->description, "category" => $this->id_category, "image1" => $this->image1, "image2" => $this->image2, "image3" => $this->image3, "image4" => $this->image4, "image5" => $this->image5];
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * Get the value of idcategory
     */ 
    public function getIdcategory()
    {
        return $this->idcategory;
    }

    /**
     * Set the value of idcategory
     *
     * @return  self
     */ 
    public function setIdcategory(int $idcategory): self
    {
        $this->id_category = $idcategory;
        return $this;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id): self
    {
        $this->id_product = $id;
        return $this;
    }

    /**
     * Get the value of description
     */ 
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @return  self
     */ 
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of price
     */ 
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set the value of price
     *
     * @return  self
     */ 
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get the value of delivery
     */ 
    public function getDelivery()
    {
        return $this->delivery;
    }

    /**
     * Set the value of delivery
     *
     * @return  self
     */ 
    public function setDelivery($delivery)
    {
        $this->delivery = $delivery;

        return $this;
    }

    /**
     * Get the value of image1
     */ 
    public function getImage1()
    {
        return $this->image1;
    }

    /**
     * Set the value of image1
     *
     * @return  self
     */ 
    public function setImage1($image1)
    {
        $this->image1 = $image1;

        return $this;
    }

    /**
     * Get the value of image2
     */ 
    public function getImage2()
    {
        return $this->image2;
    }

    /**
     * Set the value of image2
     *
     * @return  self
     */ 
    public function setImage2($image2)
    {
        $this->image2 = $image2;

        return $this;
    }

    /**
     * Get the value of image3
     */ 
    public function getImage3()
    {
        return $this->image3;
    }

    /**
     * Set the value of image3
     *
     * @return  self
     */ 
    public function setImage3($image3)
    {
        $this->image3 = $image3;

        return $this;
    }

    /**
     * Get the value of image4
     */ 
    public function getImage4()
    {
        return $this->image4;
    }

    /**
     * Set the value of image4
     *
     * @return  self
     */ 
    public function setImage4($image4)
    {
        $this->image4 = $image4;

        return $this;
    }

    /**
     * Get the value of image5
     */ 
    public function getImage5()
    {
        return $this->image5;
    }

    /**
     * Set the value of image5
     *
     * @return  self
     */ 
    public function setImage5($image5)
    {
        $this->image5 = $image5;

        return $this;
    }
}