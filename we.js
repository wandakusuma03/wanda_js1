        var username = prompt("Username:");
        var password = prompt("Password:");
        document.write("<h3>NESTED IF</h3>")
        if(username == "wanda"){
            if(password == "123"){
                document.write("<h2>Selamat datang pak bos!</h2>");
            } else {
                document.write("<p>Password salah, coba lagi!</p>");
            }
        } else {
            document.write("<p>Anda tidak terdaftar!</p>");
        }
      document.write("<h3>IF ELSE</h3>")
        var angka = 11;
        if (angka%3 == 0) document.write (" genap");
        else document.write(" ganjil")

    document.write("<h3>SWICTH</h3>")
        var hewan ="K";
        switch(hewan){
            case "L" : document.write("lalat");
            break;
            case "S" : document.write("Sapi");
            break;
            case "B" : document.write("badak");
            break;
            default: document.write("Kucing");
        }

    document.write("<h3>WHILE</h3>")
        var hitung =1;
        while (hitung < 3){
            document.write("Angka : "+ hitung + "<br>");
            hitung++;
        }
        document.write("Hitungan terakhir: "+ hitung + "<br>")
   
    document.write("<h3>DO WHILE</h3>")
        var hitung =0;
        do{
            document.write("Angka : "+hitung + "<br>");
            hitung++;
        }while (hitung<3);
        document.write("Hitungan terakhir "+hitung+ "<br>")
    
    document.write("<h3>FOR</h3>")
        var hitung;
        for (hitung=5; hitung<5; hitung++){
            document.write("hitungan mencapai "+hitung+ "<br>")  
        }
        document.write("Akhir "+hitung+ "<br>")
        

        function apaaja(fullapa){
           return fullapa
        }
        alert(apaaja('YA ALLAH FUNCTION NYUSAHIIINNNNNN'))
