/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    if (!localStorage.datacount || localStorage.dataacount == null)
        localStorage.dataacount=0;
    
    var link3 = crossroads.addRoute('', function() {
        datalength = localStorage.dataacount;
        htmlText = "";
        if (dataLength > 0){
            for (var i = 1; i <= datalength; i++){
                mydata = localStorage.getItem("data" + i);
                myData = JSON.parse(myData);
                htmlText = htmlTExt + "<tr onclick='trClick(this,"
                    +i+")'><td>"
                    + myData.nickname
                    + "</td><tr>";
            }
        }
        else{
            htmlText = htmlText + "<tr><td> no data found </td></tr>";
        }
            $('#maintable tbody').html(htmlText);
        
        $("#masterC").show();

          $("#divFrmAddKenalan").hide();
          $("#divFrmEditKenalan").hide();
    });

    var link4 = crossroads.addRoute('btnAddKenalan', function() {

        $("#masterC").hide();

          $("#divFrmAddKenalan").show();
          $("#divFrmEditKenalan").hide();
    });

    $("#frmAddKenalan").submit(function(e){
        e.preventDefault();
        e.stopPropagation();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var nickName = $("#nickName").val();
        var phoneNum = $("#phoneNum").val();
        var emailAdd = $("#contactEmail").val();

        mydata={firstname:"",lastname:"",nickname:"",mphone:"",email:""};
        mydata.firstname=firstName;
        mydata.lastname=lastName;
        mydata.nickname=nickName;
        mydata.phoneno=phoneNum;
        mydata.email=emailAdd;
        var i = localStorage.datacount
        i++;
        localStorage.setItem("data"+i, JSON.stringify(mydata));
        localStorage.datacount=i;

        alert('New data added');
    });

    function parseHash(newHash, oldHash){
        crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();
}
