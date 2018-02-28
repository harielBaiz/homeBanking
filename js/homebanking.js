//Declaración de variables
var nombreUsuario = "Juan Gomez";
var saldoCuenta = 200;
var limiteExtraccion = 2000;

var sinSaldo;
var servAgua = 350;
var servTelefono = 425;
var servLuz = 210;
var servInternet = 570;

var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

var codigoSeguridad = 1234;

//Declaración de funciones globales
var sumarDinero = function(deposito){
   saldoCuenta += deposito;
}
var restarDinero = function(extraccion) {
  saldoCuenta -= extraccion
}
var saldoInsuficiente = function(monto){
  return monto>saldoCuenta;
}
var promptCheck = function(input){
  return (typeof input === "number") && isNaN(input)===false;
}
var valorInvalido = function(){
  alert("Ingresaste un valor inválido.");
}
var alertaSaldoInsuf = function(monto){
  alert("¡Saldo insuficiente!" + "\n" + "Saldo actual: $" + saldoCuenta + "\n" + "Valor de la operación: $" + monto);
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  var limite = parseInt(prompt("Ingrese el nuevo límite de extracción:"));
  if (promptCheck(limite)) {
    limiteExtraccion = limite;
    actualizarLimiteEnPantalla();
    alert("Tu nuevo límite de extracción es de: $" + limiteExtraccion);
  } else {
    valorInvalido();
  }
}

function extraerDinero() {
  var retirar = parseInt(prompt("¿Cuánto dinero desea retirar?"));
  var saldoAnterior = saldoCuenta;
    if (promptCheck(retirar)) {
      if (saldoInsuficiente(retirar) && retirar<=limiteExtraccion) {
        alertaSaldoInsuf(retirar);
      } else if (retirar>limiteExtraccion) {
        alert("El monto es mayor al límite de extracción.");
      } else if (retirar % 100 !== 0) {
        alert("Solo podés retirar billetes de $100.");
      } else {
        restarDinero(retirar);
        actualizarSaldoEnPantalla();
        alert ("Retiraste: $"+ retirar + "\n" + "Saldo actual: $" + saldoCuenta + "\n" + "Saldo anterior: $"+ saldoAnterior);
      }
    } else {
      valorInvalido();
    }
}

function depositarDinero() {
  var deposito = parseInt(prompt("¿Cuánto dinero desea depositar?"));
  if (promptCheck(deposito)) {
    var saldoAnterior = saldoCuenta;
    sumarDinero(deposito);
    actualizarSaldoEnPantalla();
    alert ("Depositaste: $"+ deposito + "\n" + "Saldo actual: $" + saldoCuenta + "\n" + "Saldo anterior: $"+ saldoAnterior);
  } else {
    valorInvalido();
  }
}

function pagarServicio() {
  var nroServ = parseInt(prompt("Ingrese el número del servicio que desea pagar:" + "\n" + "1 - Agua:" + " $" + servAgua + "\n" + "2 - Teléfono:" + " $" + servTelefono + "\n" +"3 - Luz:" + " $" + servLuz + "\n" + "4 - Internet:" + " $" + servInternet));
  if (promptCheck(nroServ)){
    switch(nroServ) {
      case 1:
        if (saldoInsuficiente(servAgua)){
          alertaSaldoInsuf(servAgua);
        } else {
          var saldoAnterior = saldoCuenta;
          restarDinero(servAgua);
          alert("Has pagado el servicio de Agua" + "\n" + "Saldo anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + servAgua + "\n" + "Saldo actual: $" + saldoCuenta);
          actualizarSaldoEnPantalla();
        }
        break;
      case 2:
        if (saldoInsuficiente(servTelefono)){
          alertaSaldoInsuf(servTelefono);
        } else {
          var saldoAnterior = saldoCuenta;
          restarDinero(servTelefono);
          alert("Has pagado el servicio de Teléfono" + "\n" + "Saldo anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + servTelefono + "\n" + "Saldo actual: $" + saldoCuenta);
          actualizarSaldoEnPantalla();
        }
        break;
      case 3:
        if (saldoInsuficiente(servLuz)){
          alertaSaldoInsuf(servLuz);
        } else {
          var saldoAnterior = saldoCuenta;
          restarDinero(servLuz);
          alert("Has pagado el servicio de Luz" + "\n" + "Saldo anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + servLuz + "\n" + "Saldo actual: $" + saldoCuenta);
          actualizarSaldoEnPantalla();
        }
        break;
      case 4:
        if (saldoInsuficiente(servInternet)){
          alertaSaldoInsuf(servInternet);
        } else {
          var saldoAnterior = saldoCuenta;
          restarDinero(servInternet);
          alert("Has pagado el servicio de Internet" + "\n" + "Saldo anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + servInternet + "\n" + "Saldo actual: $" + saldoCuenta);
          actualizarSaldoEnPantalla();
        }
        break;
        default:
        alert("No existe el número del servicio a pagar.")
      }
    }
}

function transferirDinero() {
  var transferencia = parseInt(prompt("Ingrese monto a transferir:"));
  if (promptCheck(transferencia)){
    if(saldoInsuficiente(transferencia)) {
      alertaSaldoInsuf(transferencia);
    } else {
        var nroCuenta = parseInt(prompt("Ingrese el número de cuenta:"));
        switch(nroCuenta){
          case cuentaAmiga1:
            restarDinero(transferencia);
            actualizarSaldoEnPantalla();
            alert("Se han transferido: $" + transferencia + "\n" + "Cuenta destino: " + cuentaAmiga1);
            break;
          case cuentaAmiga2:
            restarDinero(transferencia);
            actualizarSaldoEnPantalla();
            alert("Se han transferido: $" + transferencia + "\n" + "Cuenta destino: " + cuentaAmiga2);
            break;
          default:
            alert("Solo se pueden realizar transferencias a cuentas amigas.");
        }
      }
    } else {
      valorInvalido();
    }
}
//Funcion agregada para cargar celulares o tarjeta SUBE
function recargarServicios() {
  var nroServicio = parseInt(prompt("Ingrese el número del servicio a realizar una recarga:" + "\n" + "1 - Celular" + "\n" + "2 - SUBE"));
  switch(nroServicio) {
    case 1:
      var monto = parseInt(prompt("Ingrese el monto para realizar la recarga:"));
      if(promptCheck(monto)){
        if (saldoInsuficiente(monto)){
          alertaSaldoInsuf(monto);
        }
        else {
          var nroCelular = parseInt(prompt("Ingrese el número del celular a recargar:"));
          if (promptCheck(nroCelular)) {
            alert("Cargaste $" + monto + " en el número de celular: " + nroCelular + ".");
            restarDinero(monto);
            actualizarSaldoEnPantalla();
          }
          else {
            valorInvalido();
          }
        }
      }
      else {
        valorInvalido();
      }
      break;

    case 2:
      var monto = parseInt(prompt("Ingrese el monto para realizar la recarga:"));
      if(promptCheck(monto)){
        if (saldoInsuficiente(monto)){
          alertaSaldoInsuf(monto);
        }
        else {
          var nroSube = parseInt(prompt("Ingrese el número de la tarjeta SUBE a recargar:"));
          if (promptCheck(nroSube)){
            alert("Cargaste $" + monto + " en la tarjeta SUBE " + nroSube + ".");
            restarDinero(monto);
            actualizarSaldoEnPantalla();
          }
          else {
            valorInvalido();
          }
        }
      }
      else {
        valorInvalido();
      }
      break;
    default:
      alert("No existe el número del servicio ingresado.");
  }
}

function iniciarSesion() {
  var codigo = parseInt(prompt("Ingrese su código de seguridad de 4 dígitos:"));
  if (codigo===codigoSeguridad){
    alert("Bienvenida/o "+ nombreUsuario + ", ya puedes comenzar a realizar operaciones.");
  }
  else {
    alert("Código incorrecto." + "\n" + "Tu dinero ha sido retenido por cuestiones de seguridad.");
    saldoCuenta=0;
    actualizarSaldoEnPantalla();
  }
}
iniciarSesion();

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
