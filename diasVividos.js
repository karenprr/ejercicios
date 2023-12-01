// Días vividos 
// Calcule el número de días que alguien ha vivido tomando en cuenta su fecha de nacimiento

var nacimiento = new Date(1994, 9, 12)
var hoy = new Date

var tiempoPasado= new Date() - nacimiento

//calculo segundos 
var segundos = tiempoPasado / 1000
var segf = segundos.toFixed(2);

var minutos = segundos / 60
tiempoPasado= tiempoPasado- (minutos - segundos)
var minutosf = tiempoPasado.toFixed(2);

var horas = minutos / 60
tiempoPasado= tiempoPasado- ( horas - minutos)
var horasf = tiempoPasado.toFixed(2);


var dias = horas / 24
tiempoPasado= tiempoPasado- (dias - horas)
var diasf = tiempoPasado.toFixed(2);


var meses = dias / 30.416666666666668
tiempoPasado= tiempoPasado- (meses - dias)
var mesesf = tiempoPasado.toFixed(2);

var años = meses / 12
var añosf = años.toFixed(2);


console.log(`Han pasado ${añosf} años, ${mesesf} meses,  ${diasf} dias, ${horasf} horas, ${minutosf} minutos y ${segf} segundos desde que naciste.`)


