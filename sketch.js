var resultado;
var ax,ay;
var x,y;
var mitadW,mitadH
var rebanadas,repartir 

function setup() {
  createCanvas(windowWidth, windowHeight);
  mitadW=windowWidth/2
  mitadH=windowHeight/2
}

function draw() {  
  
	ellipseMode(CENTER)
	fill(color( 228, 159, 0 ))
  
	ellipse(200,250,300,300)
	ellipse(mitadW, 250, 300, 300)
	ellipse(windowWidth-200,250,300,300)
	noLoop()
   
}
  
function CortarP(){
  repartir=document.getElementById("input-number").value;
  rebanadas = parseInt(repartir);


  if(rebanadas>1)
  {

   
  let radio=150;
  let grados=360/rebanadas
  let auxiliar=grados;

	let xMitadP1 = 200
	let xMitadP2= mitadW
	let xMitadP3 = windowWidth-200

	let yCentro = 250

	draw()

    while(grados<=360){
     
      
    let x2=radio*Math.cos(grados* Math.PI / 180)
    let y2=radio*Math.sin(grados * Math.PI / 180)


	  let x2P1=xMitadP1+x2;
	  let x2P2 = xMitadP2 + x2
	  let x2P3 = xMitadP3 + x2;
	  y2=yCentro+y2;
	  
	  x2P1=floor(x2P1)
	  x2P2=floor(x2P2)
	  x2P3 = floor(x2P3)
	  y2=floor(y2)

	  EPendiente(xMitadP1,yCentro,x2P1,y2);
	  ADDA(xMitadP2,yCentro,x2P2,y2)
	  ABresenham(xMitadP3,yCentro,x2P3,y2)
        

      grados+=auxiliar;
    } 

  }

}

function ADDA(x1, y1, x2, y2) {

  let dx=x2-x1
  let dy=y2-y1

  let x=x1
  let y= y1

  let i = 0

  let limite

  if(Math.abs(dx)>Math.abs(dy))
    limite=Math.abs(dx)
  else
    limite=Math.abs(dy)

  let xi=dx/limite
  let yi=dy/limite
 
  while(i < limite){
		point(x,y)
		x += xi
		y += yi 

		i++
	}

  
}
//Usar solo enteros!
function ABresenham(x1, y1, x2, y2) {

  //Variables para guardar los pasos en x/y
  let pY
  let pX
  
  // Variables para el Algoritmo Bresenham
	let x
	let y
	let p
	let incE
	let incNE

	let dx = x2 - x1
	let dy = y2 - y1


  /* determinar que punto usar para empezar*/
	if(dy < 0) {
		dy = -dy
		pY = -1
	}else{
		pY = 1
	}

	if(dx < 0) {
		dx = -dx
		pX = -1
	}else{
		pX = 1
	}

	x = x1
	y = y1
	
	point(x,y)


	//Se dibujan los puntos de la linea
	if(dx > dy) {
		
		
		p = 2 * dy - dx
		incE = 2 * dy
		incNE = 2 * (dy - dx)

		while(x != x2) {
			x += pX

			if(p < 0) {
				p += incE
			}else {
				y += pY
				p += incNE
			}

			point(x,y)
		}
	
	}else{
		
		p = 2 * dx - dy
		incE = 2 * dx
		incNE = 2 * (dx - dy)

		while(y != y2) {
			y += pY

			if(p < 0) {
				p += incE
			}else {
				x += pX
				p += incNE
			}

			point(x,y)


	}
	
  }
}

function EPendiente(x1,y1,x2,y2){

	if(x2<x1)
	{
		let aux=x2;
		x2=x1;
		x1=aux

		aux = y2
		y2=y1
		y1=aux
	}

	const dx = x2 - x1
	const dy = y2 - y1

	const m = dy / dx
	const b = y1 - (m * x1)

	
	point( x1, y1 )

	


	if(x1===x2){
	
		if(y1>y2)
		{
			let aux=y1;
			y1=y2;
			y2=aux
		}
		let y = y1 + 1
		while(y!=y2)
		{
			point(x1,y)
			y++
		}

	}
	else{

		
		
		let x = x1+ 1
		let y = m * x + b
		
		while(x !=x2){
			y = m * x + b
			y = floor(y)
			point(x, y)
			x++
		}
  }
  
  

	

}
