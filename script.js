function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
  }
  
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = "<p>Thank you for your message! I'll get back to you soon.</p>";
    responseMessage.style.color = "green";
  });