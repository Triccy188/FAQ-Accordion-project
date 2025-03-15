//using the .remove idea
function toggleAnswer(faqElement) {
  const arrow = faqElement.querySelector(".arrow");
  const answer = faqElement.querySelector(".answer");
  const title = faqElement.querySelector(".question");
  const existingActive = document.querySelector(".active");

  // Check if faqElement has class active, if satisfied remove it
  if (existingActive === faqElement) {
    title.style.color = "hsl(240, 6%, 50%)";
    answer.style.maxHeight = "0px";
    answer.style.opacity = "0";
    arrow.style.transform = "rotate(0deg)";
    faqElement.classList.remove("active");
  } else {
    // if there exist a previously opened faq, remove active class and css properties
    if (existingActive) {
      const existingActiveArrow = existingActive?.querySelector(".arrow");
      const existingActiveAnswer = existingActive?.querySelector(".answer");
      const existingActiveTitle = existingActive?.querySelector(".question");
      existingActiveArrow.style.transform = "rotate(0deg)";
      existingActiveAnswer.style.maxHeight = "0px";
      existingActiveAnswer.style.opacity = "0";
      existingActiveTitle.style.color = "hsl(240, 6%, 50%)";
      existingActive.classList.remove("active");
    }

    // Add active to incoming and set the css properties
    faqElement.classList.add("active");
    title.style.color = "black";
    answer.style.maxHeight = answer.scrollHeight + "px";
    answer.style.opacity = "1";
    arrow.style.transform = "rotate(180deg)";
  }

  // Close all open answers and reset styles
}
