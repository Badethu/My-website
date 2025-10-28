    $(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 20){
                $('.buttons').addClass("sticky");
            }else {
                $('.buttons').removeClass("sticky");
            }
        });
        //toggle menu/button script
        $('.menu-button').click(function(){
            $('.buttons .menu').toggleClass("active");
            $('.menu-button i').toggleClass("active");
            $('.Home .Home-content a').toggleClass("active"); 
        });
    
            $('.menu li a').click(function(){
            $('.buttons .menu').removeClass("active");
            $('.menu-button i').removeClass("active");
        });

$('#contact-form').on('submit', async function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = {
    name: form.querySelector('[name="name"]').value,
    email: form.querySelector('[name="email"]').value,
    subject: form.querySelector('[name="text"]').value,
    message: form.querySelector('[name="message"]').value
  };

  try {
    const response = await fetch(form.action, {
      method: form.method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Your message has been sent!");
      form.reset();
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  } catch (error) {
    alert("⚠️ Network error — please try again later.");
  }
});


        });

    