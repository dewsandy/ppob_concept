$(document).ready(function(){
    $('#pulsa_data').on('change', function() {
        var id_provider = this.value
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/dataProduk',
            dataType: 'json',
            data : JSON.stringify({
              "id_produk": this.value,
              "channel" : "pulsa"
            }),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log("Success",data);
                var hosData = "";
                $.each(data, function(i){
                    hosData += '<div class="col-lg-3 col-md-4 mt-4 pt-2" id="'+data[i].id_produk+'" onclick=tes(this.id)>';
                    hosData += '<a href="http://localhost:3000/invoice/pulsa/'+id_provider+'/'+data[i].id_produk+'">'
                    hosData += '<div class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">';
                    hosData += '<span class="h1 icon2 text-primary">';
                    hosData += '<i class="uil uil-meeting-board"></i>';  
                    hosData += '</span>';
                    hosData += '<div class="card-body p-0 content">';
                    hosData += '<h5>'+data[i].nama_produk+'</h5>';  
                    hosData += '<h6 class="text-muted small font-italic mb-0 mt-1">'+ formatRupiah(data[i].harga, 'Rp. ')+'</h6>';
                    hosData += "</div>";
                    hosData += "</div>";
                    hosData += '</a>';
                    hosData += "</div>";
                    
                })
      
                $("#data").html(hosData);
            },
            error: function (data) {
                console.log("Error.", data);
            }

        });
      });

      $('#token_data').on('change', function() {
        var id_provider = this.value
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/dataProduk',
            dataType: 'json',
            data : JSON.stringify({
              "id_produk": this.value,
              "channel" : "token"
            }),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log("Success",data);
                var hosData = "";
                $.each(data, function(i){
                  hosData += '<div class="col-lg-3 col-md-4 mt-4 pt-2" id="'+data[i].id_produk+'" onclick=tes(this.id)>';
                  hosData += '<a href="http://localhost:3000/invoice/pln/'+id_provider+'/'+data[i].id_produk+'">'
                  hosData += '<div class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">';
                  hosData += '<span class="h1 icon2 text-primary">';
                  hosData += '<i class="uil uil-meeting-board"></i>';  
                  hosData += '</span>';
                  hosData += '<div class="card-body p-0 content">';
                  hosData += '<h5>'+data[i].nama_produk+'</h5>';  
                  hosData += '<h6 class="text-muted small font-italic mb-0 mt-1">'+ formatRupiah(data[i].harga, 'Rp. ')+'</h6>';
                  hosData += "</div>";
                  hosData += "</div>";
                  hosData += '</a>';
                  hosData += "</div>";
                })
      
                $("#data_token").html(hosData);
            },
            error: function (data) {
                console.log("Error.", data);
            }

        });
      });

      $('#game_data').on('change', function() {
        var id_provider = this.value
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/dataProduk',
            dataType: 'json',
            data : JSON.stringify({
              "id_produk": this.value,
              "channel" : "game"
            }),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log("Success",data);
                var hosData = "";
                $.each(data, function(i){
                  hosData += '<div class="col-lg-3 col-md-4 mt-4 pt-2" id="'+data[i].id_produk+'" onclick=tes(this.id)>';
                  hosData += '<a href="http://localhost:3000/invoice/game/'+id_provider+'/'+data[i].id_produk+'">'
                  hosData += '<div class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">';
                  hosData += '<span class="h1 icon2 text-primary">';
                  hosData += '<i class="uil uil-meeting-board"></i>';  
                  hosData += '</span>';
                  hosData += '<div class="card-body p-0 content">';
                  hosData += '<h5>'+data[i].nama_produk+'</h5>';  
                  hosData += '<h6 class="text-muted small font-italic mb-0 mt-1">'+ formatRupiah(data[i].harga, 'Rp. ')+'</h6>';
                  hosData += "</div>";
                  hosData += "</div>";
                  hosData += '</a>';
                  hosData += "</div>";
                })
      
                $("#data_game").html(hosData);
            },
            error: function (data) {
                console.log("Error.", data);
            }

        });
      });
    
      $('#tagihan_data').on('change', function() {
        var id_provider = this.value
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/dataProduk',
            dataType: 'json',
            data : JSON.stringify({
              "id_produk": this.value,
              "channel" : "tagihan"
            }),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log("Success",data);
                var hosData = "";
                $.each(data, function(i){
                  hosData += '<div class="col-lg-3 col-md-4 mt-4 pt-2" id="'+data[i].id_produk+'" onclick=tes(this.id)>';
                  hosData += '<a href="http://localhost:3000/invoice/tagihan/'+id_provider+'/'+data[i].id_produk+'">'
                  hosData += '<div class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">';
                  hosData += '<span class="h1 icon2 text-primary">';
                  hosData += '<i class="uil uil-meeting-board"></i>';  
                  hosData += '</span>';
                  hosData += '<div class="card-body p-0 content">';
                  hosData += '<h5>'+data[i].nama_produk+'</h5>';  
                  hosData += '<h6 class="text-muted small font-italic mb-0 mt-1">'+ formatRupiah(data[i].harga, 'Rp. ')+'</h6>';
                  hosData += "</div>";
                  hosData += "</div>";
                  hosData += '</a>';
                  hosData += "</div>";
                })
      
                $("#data_tagihan").html(hosData);
            },
            error: function (data) {
                console.log("Error.", data);
            }

        });
      });

      $('#emoney_data').on('change', function() {
        var id_provider = this.value
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/dataProduk',
            dataType: 'json',
            data : JSON.stringify({
              "id_produk": this.value,
              "channel" : "emoney"
            }),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log("Success",data);
                var hosData = "";
                $.each(data, function(i){
                  hosData += '<div class="col-lg-3 col-md-4 mt-4 pt-2" id="'+data[i].id_produk+'" onclick=tes(this.id)>';
                  hosData += '<a href="http://localhost:3000/invoice/emoney/'+id_provider+'/'+data[i].id_produk+'">'
                  hosData += '<div class="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">';
                  hosData += '<span class="h1 icon2 text-primary">';
                  hosData += '<i class="uil uil-meeting-board"></i>';  
                  hosData += '</span>';
                  hosData += '<div class="card-body p-0 content">';
                  hosData += '<h5>'+data[i].nama_produk+'</h5>';  
                  hosData += '<h6 class="text-muted small font-italic mb-0 mt-1">'+ formatRupiah(data[i].harga, 'Rp. ')+'</h6>';
                  hosData += "</div>";
                  hosData += "</div>";
                  hosData += '</a>';
                  hosData += "</div>";
                })
      
                $("#data_emoney").html(hosData);
            },
            error: function (data) {
                console.log("Error.", data);
            }

        });
      });
})

    function tes(event){
      console.log(event)
    }

    function formatRupiah(angka, prefix){
      var tes = angka.toString()
      var number_string = tes.replace(/[^,\d]/g, '').toString(),
      split   		= number_string.split(','),
      sisa     		= split[0].length % 3,
      rupiah     		= split[0].substr(0, sisa),
      ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

      // tambahkan titik jika yang di input sudah menjadi angka ribuan
      if(ribuan){
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
      }

      rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
      return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
        }