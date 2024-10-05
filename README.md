// PROBLEMA 1

function Motor(potencia, tipo) {
    this.potencia = potencia;
    this.tipo = tipo;
}

function Carro(cor, modelo, velocidadeAtual, velocidadeMaxima, motor) {
    this.cor = cor;
    this.modelo = modelo;
    this.velocidadeAtual = velocidadeAtual;
    this.velocidadeMaxima = velocidadeMaxima;
    this.motor = motor;
    
    this.liga = function() {
        console.log(`O carro está ligado. Motor: ${this.motor.tipo}`);
    };

    this.acelera = function(quantidade) {
        this.velocidadeAtual += quantidade;
        if (this.velocidadeAtual > this.velocidadeMaxima) {
            this.velocidadeAtual = this.velocidadeMaxima;
            console.log("Atingiu a velocidade máxima!");
        }
    };

    this.informaMarcha = function() {
        if (this.velocidadeAtual < 0) {
            return -1; // marcha ré
        } else if (this.velocidadeAtual >= 0 && this.velocidadeAtual <= 39) {
            return 1;
        } else if (this.velocidadeAtual >= 40 && this.velocidadeAtual <= 79) {
            return 2;
        } else {
            return 3;
        }
    };
}

// PROBLEMA 2

let motorGasolina = new Motor(150, "Gasolina");
let fusca = new Carro("Verde", "Fusca", 0, 80, motorGasolina);
console.log(fusca);

// PROBLEMA 3

fusca.liga(); 
fusca.acelera(20);
console.log(`Velocidade atual: ${fusca.velocidadeAtual}`); 

// PROBLEMA 4 

console.log(`Marcha atual: ${fusca.informaMarcha()}`); 
fusca.acelera(30);
console.log(`Velocidade atual: ${fusca.velocidadeAtual}`); 
console.log(`Marcha atual: ${fusca.informaMarcha()}`); 
fusca.acelera(50);
console.log(`Velocidade atual: ${fusca.velocidadeAtual}`);
console.log(`Marcha atual: ${fusca.informaMarcha()}`); 


// PROBLEMA 5

function CarroEncapsulado(cor, modelo, velocidadeAtual, velocidadeMaxima, motor) {
    this.cor = cor;
    this.modelo = modelo;
    this.velocidadeAtual = velocidadeAtual;

    let _velocidadeMaxima = velocidadeMaxima; 

    this.getVelocidadeMaxima = function() {
        return _velocidadeMaxima;
    };

    this.setVelocidadeMaxima = function(novaVelocidadeMaxima) {
        _velocidadeMaxima = novaVelocidadeMaxima;
    };

    this.acelera = function(quantidade) {
        this.velocidadeAtual += quantidade;
        if (this.velocidadeAtual > _velocidadeMaxima) {
            this.velocidadeAtual = _velocidadeMaxima;
            console.log("Atingiu a velocidade máxima!");
        }
    };

    this.verificaVelocidade = function() {
        if (this.velocidadeAtual > _velocidadeMaxima) {
            console.log("Cuidado! A velocidade atual excede a velocidade máxima.");
        }
    };
}


// PROBLEMA 6

let motorEletrico = new Motor(200, "Elétrico");
let carroEletrico = new Carro("Azul", "Tesla", 0, 150, motorEletrico);
carroEletrico.liga(); 
carroEletrico.acelera(50);
console.log(`Velocidade atual: ${carroEletrico.velocidadeAtual}`); 
console.log(`Marcha atual: ${carroEletrico.informaMarcha()}`); 
carroEletrico.acelera(200);
console.log(`Velocidade atual: ${carroEletrico.velocidadeAtual}`); 
