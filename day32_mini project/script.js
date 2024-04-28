
const lives = {
    birds: {
      robin: {
        name: "Robin",
        image: "https://cdn.britannica.com/09/93109-050-77B81B1A/European-robin-redbreast.jpg"
      },
      eagle: {
        name: "Eagle",
        image: "https://media.gettyimages.com/id/200440345-001/photo/bald-eagle-in-flight.jpg?s=612x612&w=gi&k=20&c=N-evnDjDPfaFvCl2RPIP4Mk-CVFlkAFALDJsLa-hj84="
      },
      penguin: {
        name: "Penguin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslwBRcAOxarNx0qgvzfKD5UNYijm8dI_jLYBSnsUUYg&s"
      }
    },
    animals: {
      lion: {
        name: "Lion",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg"
      },
      elephant: {
        name: "Elephant",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/220px-African_Bush_Elephant.jpg"
      }
    },
    snakes: {
      python: {
        name: "Python",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSReRrbBiEb3jgjMgJLQRNsCcF4oisiDtv57gwilbF64A&s"
      },
      cobra: {
        name: "Cobra",
        image: "https://www.khaosok.com/wp-content/uploads/2016/07/Monocled-Cobra-1-1.jpg"
      },
      rattlesnake: {
        name: "Rattlesnake",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmIZ_Rrw1IbDC84x91hnaKSNhuMIheN29MDEHudwMHA&s"
      }
    }
  };
  
  
  function populateContent(category) {
    let section1 = document.getElementById("section1");
    let html = "";
  
    // Check the selected category and populate content accordingly
    switch (category) {
      case "all":
        // Iterate through all categories and create HTML elements
        for (let category in lives) {
          for (let entry in lives[category]) {
            html += `<div class="card">
                        <h3>${lives[category][entry].name}</h3>
                        <img src="${lives[category][entry].image}" alt="${lives[category][entry].name}">
                    </div>`;
          }
        }
        break;
      default:
        // Iterate through the selected category and create HTML elements
        for (let entry in lives[category]) {
          html += `<div class="card">
                      <h3>${lives[category][entry].name}</h3>
                      <img src="${lives[category][entry].image}" alt="${lives[category][entry].name}">
                  </div>`;
        }
    }
  
    // Set the HTML content of section1
    section1.innerHTML = html;
  }
  
  // Initial population of content (All)
  populateContent("all");