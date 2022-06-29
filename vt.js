window.onload = (event) => {
  sku = document.querySelector("meta[property='sku']").getAttribute("content");
  fetch( 'https://vt.ehsanpatel.repl.co/api.php/SKU/' + sku )
    .then( response => response.json() )
    .then( response => {
        document.querySelector('[data-type-vt="title"]').innerText = response.name;
        document.querySelector('[data-type-vt="sku"]').innerText = response.sku;
        document.querySelector('[data-type-vt="description"]').innerText = response.description;
    } );
  
};
