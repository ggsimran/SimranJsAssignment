let cubes = 0;

for(let i = 1; i <= 100; i++){
    cubes += Math.pow(i, 3);
    if(i!== 100){
        cubes += ", ";
    }
}

document.write("<b>The cubes of all natural numbers up to 100 are:</b> " + cubes + ".");