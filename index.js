document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('header nav');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('open');
    });

    // Optional: Close navigation when a link is clicked
    navigation.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {
            navigation.classList.remove('open');
        });
    });
      
    window.onload = function() {
        setTimeout(function() {
          document.getElementById("myForm").style.display = "flex";
          document.getElementById("overlay").style.display = "block";
        }, 10000); // 10000 milliseconds = 10 seconds
    };
    
    document.querySelector('.open-button').addEventListener('click', function() {
        document.getElementById("myForm").style.display = "flex";
        document.getElementById("overlay").style.display = "block";
    });
    
    document.querySelector('.cancel').addEventListener('click', function(){
        document.getElementById("myForm").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    });

});