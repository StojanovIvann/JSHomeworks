


let apiUrl = "https://dummyjson.com/products";

fetch(apiUrl)

  .then((response) => response.json())
  .then((products) => {
    console.log(` All Products`);
    console.log(products);
    // return products

    // Find all laptops sorted by price
    let laptopsByPrice = (items) => {
      const laptopsByPrice = items
        .filter((item) => item.category === "laptops").sort((a, b) => b.price - a.price);
      return laptopsByPrice;
    };
    let sortLaptops = laptopsByPrice(products.products);
    console.log(" Laptops By Price ");
    console.log(sortLaptops);



    // First grocey item
    let firstGroceryItem = (item) => {
      let grocery = item.find((item) => item.category === "groceries");
      return grocery;
    };
    let groceryItem = firstGroceryItem(products.products);
    console.log("First grocery item");
    console.log(groceryItem);



    // Is there a Sony item
    let sonyBrand = (item) => {
      let sony = item.includes((item) => item.brand === "Apple");
      return sony;
    };
    console.log(
      `Is there any item of Sony band: ${sonyBrand(products.products)}`
    );



    //Highest ranked skicare
    let hiestRankedSkinCare = (item) => {
      let skinCare = item.filter((item) => item.category === "skincare").sort((a, b) => b.rating - a.rating);
      console.log(skinCare[0]);
    };
    console.log("Highest ranked skincare product");
    hiestRankedSkinCare(products.products);



    // Avarage price of Aplle smartphones
    let avaragePriceOfAplle = (item) => {
      let appleBrand = item.filter((item) => item.brand === "Apple" && item.category ==='smartphones');
      let avgPrice = appleBrand.reduce(
        (acc, curr) => acc + curr.price / appleBrand.length,
        0
      );
      return avgPrice;
    };
    let avgPrice = avaragePriceOfAplle(products.products);
    console.log(
      ` The avarage price of Apple smartphones :${avgPrice}`
    );
    

    // Avarage discount percentege
    let avgDiscount = (item) =>{
        let rating = item.filter(item => item.rating > 4.5);
        let avgarageDiscount = rating.reduce((arr,curr) => arr + curr.discountPercentage/ rating.length ,0)
        return avgarageDiscount;
    }
    let discount = avgDiscount(products.products)
    console.log(`Avarage discount percentage of all items rated above 4.5 is: ${discount}`)



    //Highest priced item
    let highestPrice = (item) => {
      let price = item.sort((a, b) => b.price - a.price);
      return price;
    };
    let price = highestPrice(products.products);
    console.log(price);



    // Lowest price
    let lowestPrice = (item) => {
      let price = item.sort((a, b) => a.price - b.price);
      return price;
    };
    let lowPrice = lowestPrice(products.products);
    console.log(lowPrice[0]);
    
  });




