// Criando um array inicial com alguns números
let numbers = [5, 8, 2, 9, 3];

// Função para imprimir o array
function printArray(arr) {
    console.log("Array Atual:", arr.join(", "));
}

// 1. Adicionando elementos no array
function addElement(arr, element) {
    arr.push(element);
    console.log(`Adicionando o elemento ${element}`);
    printArray(arr);
}

// 2. Removendo um elemento especifico do array
function removeElement(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1) {
        arr.splice(index, 1);
            console.log(`Removido o elemento ${element}`);
        } else {
            console.log(`Elemento ${element} não encontrado!`);
    }
    printArray(arr);

}

// 3. Buscando por um elemento no array
function findElement(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1) {
        console.log(`Elemento ${element} encontrado na posição ${index}`);
    } else {
        console.log(`Elemento ${element} não encontrado!`);
    }
}

//4. Ordenando o Array em ordem crescente
function sortArray(arr) {
    arr.sort((a,b) => a - b);
    console.log("Array ordenado em ordem crescente:");
    printArray(arr);
}

// Exemplo de uso das funções

printArray(numbers); // Mostra os Array original

addElement(numbers, 7); //Adiciona o número 7 no array

removeElement(numbers, 9); //Remove o  número 9 do array

findElement(numbers, 8); //Procura pelo número 8

sortArray(numbers); // Ordena o array em ordem crescente