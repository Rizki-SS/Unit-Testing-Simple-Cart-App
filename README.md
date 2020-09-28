# Simple Cart App
Aplikasi cart sederhana. Disadur dan dimodifikasi dari [https://github.com/kodeid-resources/simple-cart-app](https://github.com/kodeid-resources/simple-cart-app)

# Acknowledgment
[Riza Fahmi](https://github.com/rizafahmi)

#error Handling yang saya tambahkan
- Harga tidak dapat bernilai minus, apabila minus nilai otomatis di set 0;
- Quantity terkecil bernilai 1
- input type qty dan harga berupa number agar tidak menerima inputan carakter atau yang lain
- Harga akhir/sub Totaol tidak dapat bernilai minus setelah mendapat diskon
- Apablia input kode kupon berhasil / gagal akan mendapat alert pemberitahuan

#test case
  √ pembelian 2 bauh @500 (3ms)
  √ mengurangi qty 1
  √ mengurangi qty 3 (1ms)
  √ menambah qty 2
  √ cek kode diskon20 seharusnya ada (1ms)
  √ cek kode "tidakada" seharusnya kode tidak valid (1ms)
  √ payoff kupon off 20% dari 100 =  20
  √ payoff kupon off 2000 dari 1000 =  1000 (1ms)
  √ payoff kupon off 2000 dari 3000 =  2000
  √ total dari pembelian 2000 dengan diskon 1000 maka = 1000