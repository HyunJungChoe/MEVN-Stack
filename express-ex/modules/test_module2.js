const area = {
    square: (num) => {
        return num ** 2;
    },
    rectangle : (width, height) =>{
        return width * height;

    },
    circle : (radius)=> {
        return Math.PI * radius **2;

    }
    
}


module.exports = area;