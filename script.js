class Carro {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
        this.ligado = false;
        this.velocidade = 0;
        this.somMotor = document.getElementById("somMotor")
        this.somAcelerar = document.getElementById("somAcelerar")

        console.log("somLigar:", this.somMotor); // Adicione este log
        console.log("somAcelerar:", this.somAcelerar); // Adicione este log
    }

    ligar() {
        this.ligado = true;
        console.log("Carro ligado!");
        this.atualizarEstado();
        this.tocarSom(this.somMotor)
    }

    desligar() {
        this.ligado = false;
        console.log("Carro desligado!");
        this.atualizarEstado();
    }

    acelerar() {
        if (this.ligado) {
            this.velocidade += 10;
            console.log("Carro acelerando! Velocidade:", this.velocidade);
            this.atualizarVelocidade();
            this.tocarSom(this.somAcelerar)
        } else {
            console.log("O carro precisa estar ligado para acelerar!");
        }
    }

    atualizarEstado() {
        document.getElementById("estado").textContent = this.ligado ? "Ligado" : "Desligado";
        const carroImagem = document.getElementById("carro-imagem");
        carroImagem.classList.toggle("ligado", this.ligado);
        carroImagem.classList.toggle("desligado", !this.ligado);
    }

    atualizarVelocidade() {
        document.getElementById("velocidade").textContent = this.velocidade;
    }

    tocarSom(audioElement){
        audioElement.currentTime = 0; // Reinicia o som para que ele toque desde o início
        audioElement.play();
    }
}

// Criar o objeto carro
const meuCarro = new Carro("Bugatti", "Azul");

// Exibir informações iniciais
document.getElementById("modelo").textContent = meuCarro.modelo;
document.getElementById("cor").textContent = meuCarro.cor;
meuCarro.atualizarEstado();
meuCarro.atualizarVelocidade();

// Lidar com os botões
const botaoLigarDesligar = document.getElementById("ligar-desligar");
const botaoAcelerar = document.getElementById("acelerar");

botaoLigarDesligar.addEventListener("click", () => {
    if (meuCarro.ligado) {
        meuCarro.desligar();
    } else {
        meuCarro.ligar();
    }
});

botaoAcelerar.addEventListener("click", () => {
    meuCarro.acelerar();
});