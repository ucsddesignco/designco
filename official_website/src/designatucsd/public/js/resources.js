/**
 * Generates and adds click handlers to resources page
 */
// TODO: add images
var cardOrder = [
  "Human Centered Design", 
  "Research", 
  "Insights",
  "Info Architecture",
  "Interaction Design",
  "Visual Design",
  "Prototyping",
  "Measure"
];
var cardData = {
  "Human Centered Design": { 
    "description": "Understanding, designing, and evaluating for human user needs, while align with technology and your own goals for a real solution.",
    "icon": "resource_hcd.png",
    "data": [],
  },
  "Research": { 
    "description": "In UX Research, you apply various techniques in order to add context and insight into the design process.",
    "icon": "resource_research.png",
    "data": [],
  },
  "Insights": { 
    "description": "Make sense of all of your research to contextualize your design into a truly valuable solution.",
    "icon": "resource_insights.png",
    "data": [],
  },
  "Info Architecture": { 
    "description": "The structural design of shared information environments; the art and science of organizing and labeling websites, intranets.",
    "icon": "resource_ia.png",
    "data": [],
  },
  "Interaction Design": { 
    "description": "Interaction design or user interface design focuses on the interface to match with the user’s frame of mind, rather than the underlying functionality.",
    "icon": "resource_ixd.png",
    "data": [],
  },
  "Visual Design": { 
    "description": "Coming from UI and graphic design, visual design is the use of imagery, color, shapes, typography, and form to improve the user experience.",
    "icon": "resource_visual.png",
    "data": [],
  },
  "Prototyping": { 
    "description": "A simulation of the final product. Prototypes allow us to test the feasibility and usability of our designs.",
    "icon": "resource_prototyping.png",
    "data": [],
  },
  "Measure": {
    "description": "User-experience metrics give you objective, persuasive data on which to base your design recommendations.",
    "icon": "resource_measure.png",
    "data": [],
  }
};

// Function that changes the data structure into what I want

$(document).ready(function() {
  // Generate all the resources cards
  generateResources();

});

function generateResources() {
  // Need JSON inside this

  /**
  Data should look like:

  {
    "Human Centered Design": {
      description: "...",
      icon: "...",
      data: [
        {
          MethodName: "IDEO",
          LearnFroms: {
            "Design Kit": "link",
            "Stanford D.School": "link"
          },
          Tools: {
            "Sketch": "link",
            "Sample": "link"
          }
        }
      ]
    }
  }
  */
  for (var i=0; i<data.length; i++) {
    var category = data[i].Category;
    var curr = cardData[category];

    var section = {
      MethodName: "",
      LearnFroms: {},
      Tools: {}
    };
    /**
      Section will look like
        {
          LearnFroms: {
            "Design Kit": "link",
            "Stanford D.School": "link"
          },
          Tools: {
            "Sketch": "link",
            "Sample": "link"
          }
        }
      */
    section.LearnFroms[data[i].LearnFrom] = data[i].LearnFromLink;
    section.MethodName = data[i].MethodName;

    for (var j=0; j<6; j++) {
      if (data[i]["Tool" + j]) {
        section.Tools[data[i]["Tool" + j]] = data[i]["Tool" + j + "Link"];
      }
    }

    curr.data.push(section);
  }

  // cardData is keyed by category - now we need to order it properly
  var res = '<div class="row"><div class="col-md-1"></div>';
  for (var i=0; i<cardOrder.length; i++) {
    var key = cardOrder[i];
    var elem = cardData[key];

    // Data structure kind of messed up
    var methods = elem.data.map(function(method) {

      var learnFroms = [];
      Object.keys(method.LearnFroms).map(function(learnKey) {
        var tmp = '<a target="_blank" href="' + method.LearnFroms[learnKey] + '">' + learnKey + '</a>'
        learnFroms.push(tmp);
      });
      learnFroms = learnFroms.join(', ');
      learnFroms = (learnFroms.length) ? "<p>Learn From: " + learnFroms + "</p>": "";

      var tools = [];
      Object.keys(method.Tools).map(function(toolKey) {
        var tmp = '<a target="_blank" href="' + method.Tools[toolKey] + '">' + toolKey + '</a>'
        tools.push(tmp);
      })
      tools = tools.join(', ');
      tools = (tools.length) ? "<p>Tools: " + tools + "</p>" : "";

      return '<li class="du-card--resource">' +
        '<div class="du-card--resource-listener du-card--block-nopad-content">' +
          // '<h6 class="du-card--resource-title">' + method.LearnFrom + '</h6>' +
          '<h6 class="du-card--resource-title">' + method.MethodName + '</h6>' +
        '</div>' +
        '<div class="du-card--block-nopad-content du-card--resource-content-wrapper">' +
          '<div class="du-card--resource-content">' +
            learnFroms +
            tools +
          '</div>' +
        '</div>' +
      '</li>';
    });

    methods = methods.join('');

    res = res + 
      '<div class="col-md-5 du-card--wrapper du-card--type-resource">' +
        '<div class="card du-card">' +
          '<div class="card-block du-card--block du-card--round-top">' +
            '<h4 class="card-title du-card--title-large">' +
              key +
            '</h4>' +
            '<img src="public/images/icons/' + cardData[key].icon + '" /><br><br>' +
            '<p class="du-card--resource-description">' + cardData[key].description + '</p>' +
          '</div>' +
          '<div class="card-block du-card--block-nopad">' +
            '<div class="du-card--block-nopad-content">' +
              '<h5 class="card-subtitle du-card--subtitle">Methods</h5>' +
            '</div>' +
            '<ul class="du-card--resources">' +
              methods +
            '</ul>' +
          '</div>' +
        '</div>' +
      '</div>';

    // Add spacer
    if (i % 2 === 1) {
      res = res + '<div class="col-md-1"></div></div><div class="row"><div class="col-md-1"></div>'
    }

  }

  res = res + "</div>"

  $('#du-resources--container').append(res);
  $('.du-card--resource-content-wrapper').slideUp(0);

  $(".du-card--resource-listener").click(function(e) {
    // Toggle hidden class in card content
    $(this).toggleClass('active');
    // $(this.nextElementSibling).toggleClass('hidden');

    if ($(this).hasClass('active')) {
      $(this).parent().siblings().slideUp({ queue: false });
      $(this).parent().siblings().animate({ opacity: 0 }, { queue: false });
      $(this.nextElementSibling).slideDown();
    } else {
      $(this).parent().siblings().slideDown({ queue: false });
      $(this).parent().siblings().animate({ opacity: 1 }, { queue: false });
      $(this.nextElementSibling).slideUp();
    }
  });
}
