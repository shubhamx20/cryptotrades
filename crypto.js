           
  
   fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH,BTC,BNB,TRX,SAND,XRP,ADA,LINK,NEO&tsyms=BTC,USD,EUR,ETH,BNB&api_key=8df9c980ce1e4c6c68a63f1e17f180aa0bc774aacd96ed2c31a90e37e5950fd8')

   .then(response => {
     console.log(response);
   
     return response.json();
   })
    .then(actualdata =>{
        console.log(actualdata);
        
      
         const mydata1= actualdata.BTC.BTC
         const mydata2= actualdata.BTC.USD
         const mydata3= actualdata.BTC.EUR
         const mydata4= actualdata.BTC.ETH
         const mydata5= actualdata.BTC.ETH

         const mydata6= actualdata.ETH.BTC
         const mydata7= actualdata.ETH.USD
         const mydata8= actualdata.ETH.EUR
         const mydata9= actualdata.ETH.ETH
         const mydata10= actualdata.ETH.BNB

         const mydata11= actualdata.DASH.BTC
         const mydata12= actualdata.DASH.USD
         const mydata13= actualdata.DASH.EUR
         const mydata14= actualdata.DASHBNB
         const mydata15= actualdata.DASH.BNB

         
         const mydata16= actualdata.BNB.BTC
         const mydata17= actualdata.BNB.USD
         const mydata18= actualdata.BNB.EUR
         const mydata19= actualdata.BNB.ETH
         const mydata20= actualdata.BNB.BNB

         const mydata21= actualdata.TRX.BTC
         const mydata22= actualdata.TRX.USD
         const mydata23= actualdata.TRX.EUR
         const mydata24= actualdata.TRX.ETH
         const mydata25= actualdata.TRX.BNB

         const mydata26= actualdata.SAND.BTC
         const mydata27= actualdata.SAND.USD
         const mydata28= actualdata.SAND.EUR
         const mydata29= actualdata.SAND.ETH
         const mydata30= actualdata.SAND.BNB

         
         const mydata31= actualdata.XRP.BTC
         const mydata32= actualdata.XRP.USD
         const mydata33= actualdata.XRP.EUR
         const mydata34= actualdata.XRP.ETH
         const mydata35= actualdata.XRP.BNB

         
         const mydata36= actualdata.ADA.BTC
         const mydata37= actualdata.ADA.USD
         const mydata38= actualdata.ADA.EUR
         const mydata39= actualdata.ADA.ETH
         const mydata40= actualdata.ADA.BNB

         
         const mydata41= actualdata.LINK.BTC
         const mydata42= actualdata.LINK.USD
         const mydata43= actualdata.LINK.EUR
         const mydata44= actualdata.LINK.ETH
         const mydata45= actualdata.LINK.BNB

         
         const mydata46= actualdata.NEO.BTC
         const mydata47= actualdata.NEO.USD
         const mydata48= actualdata.NEO.EUR
         const mydata49= actualdata.NEO.ETH
         const mydata50= actualdata.NEO.BNB
         
        

        document.getElementById('crypto1').innerHTML= mydata1;
        document.getElementById('crypto2').innerHTML= mydata6;
        document.getElementById('crypto3').innerHTML= mydata11;
        document.getElementById('crypto4').innerHTML= mydata16;
        document.getElementById('crypto5').innerHTML= mydata21;
        document.getElementById('crypto6').innerHTML= mydata26;
        document.getElementById('crypto7').innerHTML= mydata31;
        document.getElementById('crypto8').innerHTML= mydata36;
        document.getElementById('crypto9').innerHTML= mydata41;
        document.getElementById('crypto10').innerHTML= mydata46;

        document.getElementById('crypto11').innerHTML= mydata2;
        document.getElementById('crypto12').innerHTML= mydata7;
        document.getElementById('crypto13').innerHTML= mydata12;
        document.getElementById('crypto14').innerHTML= mydata17;
        document.getElementById('crypto15').innerHTML= mydata22;
        document.getElementById('crypto16').innerHTML= mydata27;
        document.getElementById('crypto17').innerHTML= mydata32;
        document.getElementById('crypto18').innerHTML= mydata37;
        document.getElementById('crypto19').innerHTML= mydata42;
        document.getElementById('crypto20').innerHTML= mydata47;

        document.getElementById('crypto21').innerHTML= mydata3;
        document.getElementById('crypto22').innerHTML= mydata8;
        document.getElementById('crypto23').innerHTML= mydata13;
        document.getElementById('crypto24').innerHTML= mydata18;
        document.getElementById('crypto25').innerHTML= mydata23;
        document.getElementById('crypto26').innerHTML= mydata28;
        document.getElementById('crypto27').innerHTML= mydata33;
        document.getElementById('crypto28').innerHTML= mydata38;
        document.getElementById('crypto29').innerHTML= mydata43;
        document.getElementById('crypto30').innerHTML= mydata48;

        document.getElementById('crypto31').innerHTML= mydata4;
        document.getElementById('crypto32').innerHTML= mydata9;
        document.getElementById('crypto33').innerHTML= mydata14;
        document.getElementById('crypto34').innerHTML= mydata19;
        document.getElementById('crypto35').innerHTML= mydata24;
        document.getElementById('crypto36').innerHTML= mydata29;
        document.getElementById('crypto37').innerHTML= mydata34;
        document.getElementById('crypto38').innerHTML= mydata39;
        document.getElementById('crypto39').innerHTML= mydata44;
        document.getElementById('crypto40').innerHTML= mydata49;

        document.getElementById('crypto41').innerHTML= mydata5;
        document.getElementById('crypto42').innerHTML= mydata10;
        document.getElementById('crypto43').innerHTML= mydata15;
        document.getElementById('crypto44').innerHTML= mydata20;
        document.getElementById('crypto45').innerHTML= mydata25;
        document.getElementById('crypto46').innerHTML= mydata30;
        document.getElementById('crypto47').innerHTML= mydata35;
        document.getElementById('crypto48').innerHTML= mydata40;
        document.getElementById('crypto49').innerHTML= mydata45;
        document.getElementById('crypto50').innerHTML= mydata50;
    })

   .catch(err => {
     console.log(err)
   });

