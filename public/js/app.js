

submitForm = document.querySelector('form');
submitForm.addEventListener('submit',(e)=>{
    e.preventDefault();
var location=document.querySelector('input').value;
    if(location){
        fetch('/weather?address=' + location).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    console.log('error',data.error)
                } else {
                    console.log(data.address)
                    console.log(data.forecast)
                }
            })
    })
    }
})