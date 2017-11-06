// smoothscroll

var posY=0;
var jarak=15;
function smoothScroll(id){
	var tujuan=document.getElementById(id).offsetTop;//jarak antara atas dan div.a

	var scrollAnimate=setTimeout(function(){
		smoothScroll(id);
	},2) //fungsi,waktu

	posY=posY+jarak;

	// berhenti pd bagian tertentu
	if (posY >= tujuan) {
		clearTimeout(scrollAnimate);
		posY=0;
	}else{
		window.scroll(0,posY) //x dan y
	}


	// return false=mencegah action asli dri html jdi link href html tdk dieksekusi
	return false;
}
// untuk gambar
var target_gambar=document.getElementById('target_gambar');
var array_gambar=document.getElementById('karya_lain').children;
var no_sekarang=0;

function ganti_gambar(gambar){
	target_gambar.src=gambar.getAttribute('src');
	no_sekarang=gambar.className;
}

function ganti_sebelum(){
	no_sekarang=no_sekarang-1;
	if(no_sekarang<0)
	no_sekarang=2;
	target_gambar.src= array_gambar[no_sekarang].getAttribute('src');

}
function ganti_berikut(){
	no_sekarang=no_sekarang+1;
	if (no_sekarang>2)
	no_sekarang=0;
target_gambar.src= array_gambar[no_sekarang].getAttribute('src');

}


// fungsi untuk falidasi form
function validasi(form){
	var lolos = true;

	for(i=0;i<3;i++){
	if(form[i].value.trim().length<=0){

		switch (i) {
			case 0:errortext="Nama" ;break;
			case 1:errortext="Email" ;break;
			case 2:errortext="Alamat" ;break;
			default:

		}

		// kalau blm error
		if (form[i].nextElementSibling.className !='error') {
		form[i].style.borderColor='red';
		form[i].insertAdjacentHTML('afterend',"<div class='error'>"+errortext+" Tidak boleh kosong</div>");
		}
		lolos= false;
	}else {
		// sebelumnya sdh da error, hapus error
		if (form[i].nextElementSibling.ClassName =='error'){
			 form[i].style.borderColor='#0074b9';
			 form[i].nextElementSibling.remove();

			}


		}
	} //end for

	return lolos;
}
