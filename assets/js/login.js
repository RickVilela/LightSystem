const lembrar = localStorage.getItem("lembrar");;

$(document).ready(() =>{
   if(lembrar){
        window.location.href = "https://novidadesls.000webhostapp.com/admin";
   }
})

$("#btnLogin").on("click", () => {
    const emailValue = $("#email").val();
    const senhaValue = $("#senha").val();

    $.ajax({
        url: "validate-login.php",
        type: "POST",
        data: {
        email: emailValue,
        senha: senhaValue
        },
        success: function (response){
            console.log(response)
            
            if( $("#customCheck").is(":checked")){
                localStorage.setItem("lembrar", "sim");
            }

            if(response == "https://novidadesls.000webhostapp.com/admin"){
                window.location.href = response;
            }else if(emailValue == '' && senhaValue == ''){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
            
                  Toast.fire({
                    icon: 'error',
                    title: 'Preencha todos os campos!'
                  })
            }else{
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
            
                  Toast.fire({
                    icon: 'error',
                    title: 'E-mail ou senha inválidos!'
                  })
            }
            
        },error: function(err){
            console.log(err)
        }
    })
})