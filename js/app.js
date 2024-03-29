/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js', 
  
  {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 1400
        }
      },
      "color": {
        "value": "#224772",
		  
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 2,
          "color": "#224772"
			
        },
        "polygon": {
          "nb_sides": 1
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 3,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false,
//			"box-shadow":"3px 3px 3px #000"
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#224772",
        "opacity": 0.5,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable":false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 600,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 80,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 600
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
		//      "background_color": "#333",
		

    }
  }

);
particlesJS('particles-js2', 
  
  {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 1400
        }
      },
      "color": {
        "value": "#224772",
		  
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 2,
          "color": "#224772"
			
        },
        "polygon": {
          "nb_sides": 1
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 3,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false,
//			"box-shadow":"3px 3px 3px #000"
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#224772",
        "opacity": 0.5,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable":false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 600,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 80,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 600
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
   "background_size": "cover"
    }
  }

);
particlesJS('particles-js3', 
  
  {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 1400
        }
      },
      "color": {
        "value": "#fff",
		  
      },
//        толщина обводки шарика
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#f5f5f5"
			
        },
        "polygon": {
          "nb_sides": 1
        },
      },
      "opacity": {
        "value": 0.2,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 3,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false,
//			"box-shadow":"3px 3px 3px #000"
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#fff",
        "opacity": 0.2,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable":false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 600,
          "line_linked": {
            "opacity": .5
          }
        },
        "bubble": {
          "distance": 200,
          "size": 80,
          "duration": 2,
          "opacity": 2,
          "speed": 3
        },
        "repulse": {
          "distance": 600
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_size": "cover"
    }
  }

);


