import interns from './data.js';

    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const email = document.getElementById('contactEmail').value.trim().toLowerCase();
      const InternID = document.getElementById('InternID').value.trim();
      const errorDiv = document.getElementById('errorMsg');
      
      const intern = interns.find(i =>
        i.InternID === InternID && i.email.toLowerCase() === email.toLowerCase()
      );

      if (intern) {
        console.log(intern.Path);
        window.location.href = intern.Path;
      }else {
        errorDiv.textContent = "Invalid email or InternID.";
      }
    });
  