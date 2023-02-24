function form() {
    var name = document.register.uname.value;
    var pass = document.register.pass.value;
    var mail = document.register.mail.value;
    var gen = document.register.gen.value;
    var add = document.register.add.value;
    var date = document.register.date.value;
    var mob = document.register.mob.value;
    var tele = document.register.tel.value;
    var pro = document.register.pro.value;
    var cBox = document.getElementById('repass');

    document.write('Name:' + " " + name + "<br>");
    document.write('Password: ' + " " + pass + "<br>");
    document.write('E-mail:' + " " + mail + "<br>");
    document.write('Gender: ' + " " + gen + "<br>");
    document.write('Address: ' + " " + add + "<br>");
    document.write('Remember password: ' + " " );
    if (cBox.checked==true) {
        document.write("yes" + "<br>");
    }
    else {
        document.write("No" + "<br>");
    }
    document.write('Date of Birth: ' + "" + date + "<br>");
    document.write('Mobile Number : ' + " " + mob + "<br>");
    document.write('Tel No : ' + " " + tele + "<br>");
    document.write('Profession : ' + " " + pro + "<br>");


    


}