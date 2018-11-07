function verifyInfo()
{
    

    if(typeof(Storage)!== "undefined")
    {

        localStorage.setItem("UserName",document.getElementById("txt_name").value);
        localStorage.setItem("UserEmail",document.getElementById("txt_email").value);
     // alert("User Name " + localStorage.getItem("UserName")  + "User Email " + localStorage.getItem("UserEmail"));
    // window.close();
   //  window.open("popup.html");

    } 
    else 
    {
            alert("Your Browser does not support web storage");
    }

}
function getData()
{
if(typeof(Storage)!== "undefined")
{
    var UName = localStorage.getItem("UserName");
    document.getElementById('userName').innerHTML = UName;

    document.getElementById('userEmail').innerText=localStorage.getItem("UserEmail");
// var userEmail = document.getElementById('txt_email').value;

} 
else 
{
        alert("Your Browser does not support web storage");
}

}
