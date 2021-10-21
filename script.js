let nama = prompt("hai selamat datang kalo boleh tau siapa namamu ?");
if (typeof nama == "string") {
    alert("Salam kenal " + nama) 
} else {
    console.error ("you didn't write your real name")
}