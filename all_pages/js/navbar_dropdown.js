const handleClick = function(event, elements) {
    elements.forEach(({ element, triggerString, triggerElement }) => {
      const isClickedWithinTrigger = event.target.classList.contains(triggerString);
      if (isClickedWithinTrigger) {
        if (triggerElement[0].classList.contains("d-flex")) {
          triggerElement[0].classList.remove("d-flex");
          triggerElement[0].classList.add("d-none");
        } else {
          triggerElement[0].classList.remove("d-none");
          triggerElement[0].classList.add("d-flex");
        }
      } else {
        triggerElement[0].classList.remove("d-flex");
        triggerElement[0].classList.add("d-none");
      }
    });
  };
  
  const elements = [
    {
      element: document.getElementsByClassName("resources"),
      triggerString: "resources",
      triggerElement: document.getElementsByClassName("resources_trigger")
    },
    {
      element: document.getElementsByClassName("services"),
      triggerString: "services",
      triggerElement: document.getElementsByClassName("services_trigger")
    },
    {
      element: document.getElementsByClassName("industries"),
      triggerString: "industries",
      triggerElement: document.getElementsByClassName("industries_trigger")
    },
    {
      element: document.getElementsByClassName("services_mobile"),
      triggerString: "services_mobile",
      triggerElement: document.getElementsByClassName("services_mobile_trigger")
    },
    {
      element: document.getElementsByClassName("industries_mobile"),
      triggerString: "industries_mobile",
      triggerElement: document.getElementsByClassName("industries_mobile_trigger")
    },
    {
      element: document.getElementsByClassName("resources_mobile"),
      triggerString: "resources_mobile",
      triggerElement: document.getElementsByClassName("resources_mobile_trigger")
    }
  ];
  
  document.addEventListener("click", function(event) {
    handleClick(event, elements);
  });