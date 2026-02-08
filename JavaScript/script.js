//CONTACT
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission
            
    // You could log form data here or perform validation
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
            
    // Show the confirmation modal
    openModal();
            
    // Optionally reset the form
    form.reset();
    }
            
function openModal() {
        const modal = document.getElementById('confirmationModal');
        modal.style.display = 'block'; // Show the modal
        }
            
function closeModal() {
        const modal = document.getElementById('confirmationModal');
        modal.style.display = 'none'; // Hide the modal
            }
            
              // Close the modal if the user clicks outside of it
        window.onclick = function(event) {
        const modal = document.getElementById('confirmationModal');
            if (event.target == modal) {
                  modal.style.display = 'none';
                }
              }

//DONATION

document.addEventListener('DOMContentLoaded', () => {
    // Select gift type
    let giftTypeBtns = document.querySelectorAll('.time .btn-select');
    let amountBtns = document.querySelectorAll('.value .btn-select');

    giftTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            giftTypeBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    // Select amount
    amountBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            amountBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });

    // Handle form submission
    document.getElementById('donate-btn').addEventListener('click', (e) => {
        e.preventDefault();

        let selectedGiftType = document.querySelector('.time .selected');
        let selectedAmount = document.querySelector('.value .selected');
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;

        if (!selectedGiftType || !selectedAmount || !name || !email) {
            alert('Please fill out all the fields and make your selections.');
        } else {
            alert(`Donation submitted!\nType: ${selectedGiftType.innerText}\nAmount: ${selectedAmount.innerText}\nName: ${name}\nEmail: ${email}`);
        }
    });
});

//Regstration
document.addEventListener("DOMContentLoaded", function() {
    // This function will run once the DOM is fully loaded

    function handleFormSubmission(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Simulate form submission and display the modal
        const form = document.getElementById('volunteer-form');
        
        // Check if the terms checkbox is checked
        if (document.getElementById('terms').checked) {
            openModal(); // Show the popup modal
            form.reset(); // Optionally reset the form after submission
        } else {
            alert("You must agree to the terms and conditions.");
        }
    }

    function openModal() {
        const modal = document.getElementById('confirmationModal');
        modal.style.display = 'block'; // Display the modal
    }

    function closeModal() {
        const modal = document.getElementById('confirmationModal');
        modal.style.display = 'none'; // Hide the modal
    }

    // Close modal if user clicks outside it
    window.onclick = function(event) {
        const modal = document.getElementById('confirmationModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Attach the form submission handler
    document.getElementById('volunteer-form').addEventListener('submit', handleFormSubmission);
});



//About us section
function showSection(section) {
    const contentArea = document.getElementById('contentArea');
    const buttons = document.querySelectorAll('.section-btn');
  
    // Clear active class from all buttons
    buttons.forEach(button => {
      button.classList.remove('active');
    });
  
    // Add active class to the clicked button
    document.getElementById(section + 'Btn').classList.add('active');
  
    // Fade out current content
    contentArea.classList.add('fade');
  
    setTimeout(() => {
      // Inject new content after fading out
      if (section === 'mission') {
        contentArea.innerHTML = `
          <div class="row">
            <div class="column-66">
              <h1 class="xlarge-font"><b>Mission</b></h1>
              <p><span style="font-size: 29px;">Our mission is to empower underprivileged athletes by providing them with resources, training, and mentorship to help them excel in sports and build sustainable careers. We strive to make sports accessible to every child, regardless of socioeconomic status, offering equipment, training, and community support.</span></p>
            </div>
            <div class="column-33">
              <img src="../images/equipment2.jpg" alt="Mission Image" style="width: 400px; height: 400px;">
            </div>
          </div>
        `;
      } else if (section === 'vision') {
        contentArea.innerHTML = `
          <div class="row">
            <div class="column-66">
              <h1 class="xlarge-font"><b>Vision</b></h1>
              <p><span style="font-size: 29px;">We envision a world where every child has equal access to the opportunities provided by sports, building confidence and fostering leadership to create a brighter future both in athletics and academics.</span></p>
            </div>
            <div class="column-33">
              <img src="../images/holding ball.jpg" alt="Vision Image" style="width: 400px; height: 400px;">
            </div>
          </div>
        `;
      } else if (section === 'history') {
        contentArea.innerHTML = `
          <div class="row">
            <div class="column-66">
              <h1 class="xlarge-font"><b>History</b></h1>
              <p><span style="font-size: 29px;">Future Champions was founded in 2024 with the goal of supporting young athletes from disadvantaged communities. From a humble beginning with just a handful of coaches and donated equipment, we have grown into a dynamic organization helping thousands of young athletes develop their talents and life skills through sports.</span></p>
            </div>
            <div class="column-33">
              <img src="../images/championship.jpg" alt="History Image">
            </div>
          </div>
        `;
      }
  
      // Fade in new content
      contentArea.classList.remove('fade');
    }, 500); // Time delay to allow fade-out transition
  }