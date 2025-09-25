    // ============================
    // CLASE 1: Variables y Operadores
    // ============================
    function saludar() {
      console.log("👋 Hola holis");
    }

    function sumar(a, b) {
      console.log(`📌 Resultado de ${a} + ${b} = ${a + b}`);
    }

    function operaciones(a, b) {
      console.log("🔢 Operaciones básicas:");
      console.log(`${a} + ${b} =`, a + b);
      console.log(`${a} - ${b} =`, a - b);
      console.log(`${a} * ${b} =`, a * b);
      console.log(`${a} / ${b} =`, a / b);
    }

    // ============================
    // CLASE 2: Condicionales, Bucles y Funciones
    // ============================
    function verificarEdad(edad) {
      if (edad >= 18) {
        console.log(`🎉 Con ${edad} años, eres mayor de edad.`);
      } else {
        console.log(`😅 Con ${edad} años, todavía eres menor de edad.`);
      }
    }

    function imprimirNumeros() {
      console.log("📈 Números del 1 al 10:");
      for (let i = 1; i <= 10; i++) {
        console.log(i);
      }
    }

    function adivinar(numero) {
      let secreto = 7; // número fijo para el reto
      if (numero === secreto) {
        console.log("🎯 ¡Adivinaste el número secreto!");
      } else {
        console.log("❌ No es correcto, intenta otra vez.");
      }
    }

    // ============================
    // CLASE 3: Arreglos y Objetos
    // ============================
    let productos = [
      { nombre: "🍎 Manzana", precio: 100 },
      { nombre: "🍌 Banana", precio: 80 },
      { nombre: "🍊 Naranja", precio: 120 }
    ];

    function mostrarProductos() {
      console.log("🛒 Lista de productos disponibles:");
      productos.forEach((p, i) => {
        console.log(`${i + 1}. ${p.nombre} - $${p.precio}`);
      });
    }

    function calcularTotal() {
      let total = productos.reduce((suma, p) => suma + p.precio, 0);
      console.log(`💰 Total de todos los productos: $${total}`);
    }

    // ============================
    // MENSAJE INICIAL
    // ============================
    console.log("✅ Hola que tal ");
    console.log("👉 Prueba las funciones directamente en consola:");
    console.log("saludar()");
    console.log("sumar(4, 6)");
    console.log("operaciones(10, 5)");
    console.log("verificarEdad(20)");
    console.log("imprimirNumeros()");
    console.log("adivinar(7)");
    console.log("mostrarProductos()");
    console.log("calcularTotal()");
