// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animation library
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  
  // Mobile navigation toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking a nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const moonIcon = '<i class="fas fa-moon"></i>';
  const sunIcon = '<i class="fas fa-sun"></i>';
  
  // Check for saved user preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = sunIcon;
  }
  
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      darkModeToggle.innerHTML = sunIcon;
    } else {
      localStorage.setItem('darkMode', null);
      darkModeToggle.innerHTML = moonIcon;
    }
  });
  
  // Back to top button
  const backToTopButton = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Highlight active navigation item based on scroll position
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavItem() {
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(item => {
          item.classList.remove('active');
        });
        navItem.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavItem);
  
  // Work filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const workItems = document.querySelectorAll('.work-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get filter value
      const filterValue = button.getAttribute('data-filter');
      
      // Filter work items
      workItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 100);
        } else {
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // View more experience button
  const viewMoreBtn = document.getElementById('viewMoreExperience');
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  if (viewMoreBtn) {
    let isExpanded = false;
    
    // Initially hide items beyond the third one
    timelineItems.forEach((item, index) => {
      if (index > 2) {
        item.style.display = 'none';
      }
    });
    
    viewMoreBtn.addEventListener('click', () => {
      if (!isExpanded) {
        // Show all items
        timelineItems.forEach((item, index) => {
          if (index > 2) {
            item.style.display = 'block';
            // Add a staggered animation delay
            setTimeout(() => {
              item.style.opacity = '1';
            }, (index - 2) * 200);
          }
        });
        viewMoreBtn.textContent = 'Show less';
        isExpanded = true;
      } else {
        // Hide items beyond the third one
        timelineItems.forEach((item, index) => {
          if (index > 2) {
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
        viewMoreBtn.textContent = 'View more experience';
        isExpanded = false;
      }
    });
  }
  
  // Initialize the chart
  initializeChart();
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple form validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (name && email && message) {
        // Display success message (in a real scenario, you'd send the data to a server)
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
  }
});

// Initialize the chart with data from Google Sheets
function initializeChart() {
  // ID of the Google Spreadsheet
  const spreadsheetID = "1Veb2vl5EtgAjxVQ9eU-o-RSrgiOMmxUxAh5mQADQP-0";
  const url = `https://spreadsheets.google.com/feeds/list/${spreadsheetID}/od6/public/values?alt=json`;

  // Fetch data from Google Sheets
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const yearLabels = [];
      const percentFoodUtil = ['% Food Utilization'];
      const foodUtil = ['Food Utilization'];
      const nonFoodUtil = ['Non-Food Utilization'];
      const grossSupply = ['Gross Supply'];
      
      data.feed.entry.forEach(entry => {
        yearLabels.push(entry.gsx$year.$t);
        percentFoodUtil.push(entry.gsx$percentfoodutilization.$t);
        foodUtil.push(entry.gsx$foodutilization.$t);
        nonFoodUtil.push(entry.gsx$nonfoodutilization.$t);
        grossSupply.push(entry.gsx$grosssupply.$t);
      });

      // Generate the chart with C3.js
      const chart = c3.generate({
        size: {
          height: 500,
          width: window.innerWidth > 1200 ? 1200 : window.innerWidth * 0.9
        },
        bindto: '#chart',
        data: {
          columns: [
            foodUtil,
            nonFoodUtil,
            grossSupply,
            percentFoodUtil,
          ],
          type: 'bar',
          groups: [
            ['Food Utilization', 'Non-Food Utilization']
          ],
          axes: {
            '% Food Utilization': 'y2',
            'Food Utilization': 'y',
            'Non-Food Utilization': 'y',
            'Gross Supply': 'y',
          },
          types: {
            '% Food Utilization': 'spline',
            'Food Utilization': 'bar',
            'Non-Food Utilization': 'bar',
            'Gross Supply': 'spline'
          },
          colors: {
            'Food Utilization': '#0066ff',
            'Non-Food Utilization': '#ff6b00',
            'Gross Supply': '#38a169',
            '% Food Utilization': '#3182ce'
          }
        },
        axis: {
          x: {
            type: 'category',
            categories: yearLabels,
            tick: {
              rotate: -45,
              multiline: false
            },
            height: 60
          },
          y: {
            label: {
              text: 'Metric Tons',
              position: 'outer-middle'
            },
            tick: {
              format: d3.format(',')
            }
          },
          y2: {
            show: true,
            min: 0,
            max: 100,
            label: {
              text: 'Percent Utilization',
              position: 'outer-middle'
            },
            tick: {
              format: d => d + '%'
            }
          }
        },
        grid: {
          y: {
            show: true
          }
        },
        tooltip: {
          grouped: true,
          format: {
            value: function(value, ratio, id) {
              if (id === '% Food Utilization') {
                return value + '%';
              }
              return d3.format(',')(value) + ' MT';
            }
          }
        },
        legend: {
          position: 'bottom'
        },
        padding: {
          right: 20,
          bottom: 20
        },
        transition: {
          duration: 1000
        }
      });
      
      // Make the chart responsive
      window.addEventListener('resize', () => {
        chart.resize({
          height: 500,
          width: window.innerWidth > 1200 ? 1200 : window.innerWidth * 0.9
        });
      });
    })
    .catch(error => {
      console.error("Error loading chart data:", error);
      document.getElementById('chart').innerHTML = '<p class="error-message">Unable to load chart data. Please try again later.</p>';
    });
}