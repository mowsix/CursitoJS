//CALLBACK

function modifyArray(array, callback){

    //Hacer algo
    array.push(100);

    //despues de hacer algo el callback
    callback();
    
}

const numbers = [1,2,3,4,5];

modifyArray(numbers, function() {
    console.log("El array ha sido modificado");
});



function modifyNames(names, callback){

    //Hacer algo
    names.push("Luis");

    //despues de hacer algo espera 1 segundo y ejecuta el callback
    setTimeout(function() {
        callback();
    }, 1000);
    
}

const names = ["Juan", "Maria", "Pedro"];

modifyNames(names, function() {
    console.log("El array ha sido modificado");

});

    
    