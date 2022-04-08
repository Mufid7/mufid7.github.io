var kuadrat = 6;
var colors = generateRandomColors(kuadrat);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColorG();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyButton");
var hardBtn = document.querySelector("#hardButton");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	//set jumlah kotak menjadi 3
	kuadrat = 3;
	//ubah warna menjadi 3
	colors = generateRandomColors(kuadrat);
	//setel ulang warna yang menang
	pickedColor = randomColorG();
	//ubah tampilan untuk menampilkan warna pilihan baru
	colorDisplay.textContent = pickedColor;
	// ulangi 3 kotak dan setel ulang warna sambil tidak menampilkan kotak tanpa warna setel ulang baru
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	kuadrat = 6;
	colors = generateRandomColors(kuadrat);
	pickedColor = randomColorG();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//hasilkan semua warna baru
	colors = generateRandomColors(kuadrat);
	//pick a new random color from array
	pickedColor = randomColorG();
	//pilih warna acak baru dari array
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "reset";
	messageDisplay.textContent = "";
	//mengubah warna kotak
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//mengatur kembali 
	h1.style.background = "steelblue"; 
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	//menambahkan warna awal ke kotak
	squares[i].style.backgroundColor = colors[i];
	//menambahkan suara klik ke kotak
	squares[i].addEventListener("click", function(){
		//ambil warna kotak yang diklik
		var clickedColor = this.style.backgroundColor;
		//bandingkan warna dengan warna yang dipilih
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "keren , bener lo";
			resetButton.textContent = "mulai lagi";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}	else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "salah";
		}
		});
}

function changeColors(colorz){
	//mengulangi semua kotak
	for(var i = 0; i < squares.length; i++){
		//ubah setiap warna agar sesuai dengan warna yang diberikan
		squares[i].style.background = colorz;
	}	
}

function randomColorG(){
	//pilih nomor acak
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(genColor){
	//membuat array
	var arr = []
	for(var i = 0; i < genColor; i++){
	// warna acak dan masukkan ke dalam array
		arr.push(randomColor())
	}
	//kembalikan array 
	return arr;
}

function randomColor(){
	//pilih "merah" dari 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pilih "hijau" dari 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pilih "biru" dari 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g +", " + b +")";
}