const salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
  };
  const companySalesData = [
    {
      name: "Telus",
      province: "BC",
      sales: [ 100, 200, 400 ]
    },
    {
      name: "Bombardier",
      province: "AB",
      sales: [ 80, 20, 10, 100, 90, 500 ]
    },
    {
      name: "Telus",
      province: "SK",
      sales: [ 500, 100 ]
    }
  ];


  const totalSales = function (sales) {
     let totalCash = 0;
     for(let i = 0; i < sales.length;i++) { 
        totalCash += sales[i];
     }
     return totalCash;

  };

  const totalTax = function (sales, rate) {
    let totalCash = 0;
     for(let i = 0; i < sales.length;i++) { 
        totalCash += sales[i];
     }
     let totalTax = (totalCash * rate);
     return totalTax;
  };
 
 
const calculateSalesTax = function (salesData, taxRate) {
    let results = {};
    for(let i = 0; i < salesData.length;i++) {
        if(!(salesData[i]["name"] in results)){
            let company = salesData[i]["name"];
            results[company] = {};
            results[company]["totalSales"] = totalSales(salesData[i]["sales"])
            results[company]["totalTaxes"] = totalTax(salesData[i]["sales"],salesTaxRates[salesData[i]["province"]]);
        } else { 
            let company = salesData[i]["name"];
            results[company]["totalSales"] += totalSales(salesData[i]["sales"])
            results[company]["totalTaxes"] += totalTax(salesData[i]["sales"],salesTaxRates[salesData[i]["province"]]);

        }
    }
    return results;
  }



console.log(calculateSalesTax(companySalesData, salesTaxRates));