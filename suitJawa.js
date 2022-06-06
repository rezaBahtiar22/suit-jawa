var tanya = 'true';
while( tanya ) {
    // menangkap pilihan player
    var p = prompt('Masukkan pilihan : Jempol, Telunjuk, kelingking');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();
    if( comp < 0.34 ) {
        comp = 'Jempol';
    } else if( comp >= 0.34 && comp < 0.67 ) {
        comp = 'Telunjuk';
    } else {
        comp = 'Kelingking';
    }
    console.log(comp);


    // menentukan Rules
    var hasil = '';
    if( p == comp ) {
        hasil = 'SERI!'
    } else if( p == 'Jempol' ) {
        // if( comp == 'Telunjuk' ) {
        //     hasil = 'MENANG!'
        // } else {
        //     hasil = 'KALAH!'
        // }
        hasil = ( comp == 'Telunjuk' ) ? 'MENANG!' : 'KALAH!';
    } else if( p == 'Jempol' ) {
        hasil = ( comp == 'Kelingking' ) ? 'KALAH!' : 'MENANG!';
    } else if( p == 'Telunjuk' ) {
        hasil = ( comp == 'Jempol' ) ? 'KALAH!' : 'MENANG!';
    } else if( p == 'Telunjuk' ) {
        hasil = ( comp == 'Kelingking' ) ? 'MENANG!' : 'KALAH!';
    } else if( p == 'Kelingking' ) {
        hasil = ( comp == 'Jempol' ) ? 'MENANG!' : 'KALAH!';
    } else if( p == 'Kelingking' ) {
        hasil = ( comp == 'Telunjuk' ) ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'anda memasukkan pilihan yang salah';
    }

    // tampilkan hasil
    alert( 'kamu mamilih : ' + p + ' dan komputer memilih : ' + comp + '\nmaka hasilnya : kamu ' + hasil );

    tanya = confirm('lagi?');
}
alert('terima kasih telah bermain -_-');