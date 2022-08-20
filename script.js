  //Get the button
  var mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }



  // function srcfnc() {
  //   location.replace("https://www.w3schools.com")
  // }

  // var input = document.getElementById("src_box");
  // input.addEventListener("keypress", function(event) {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     document.getElementById("src_btn").click();
  //   }
  // });

  function updateTextInput(val) {
    document.getElementById('textInput').value=val+"%"; 
  }
