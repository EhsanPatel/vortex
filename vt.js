window.onload = (event) => {
  fetch( 'https://vt.ehsanpatel.repl.co/api.php/SKU/VT-RZR-63601' )
    .then( response => response.json() )
    .then( response => {
        document.querySelector('[data-type-vt="title"]').innerText = response.name;
        document.querySelector('[data-type-vt="sku"]').innerText = response.sku;
        document.querySelector('[data-type-vt="description"]').innerText = response.description;
    } );
  
};
