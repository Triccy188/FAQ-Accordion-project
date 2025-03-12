//using the .remove idea
function toggleAnswer(question) {
  console.log(question);
  const allQuestions = document.querySelectorAll(".question");
  //   const question = question.nextElementSibling;
  //const question = document.getElementById(id);
  console.log(question);
  const arrow = question.querySelector(".arrow");
  const answer = question.querySelector(".answer");
  const title = question.querySelector(".question");
  const existingActive = document.querySelector(".active");
  console.log();
  if (existingActive) {
    const existingActiveArrow = existingActive.querySelector(".arrow");
    const existingActiveAnswer = existingActive.querySelector(".answer");
    const existingActiveTitle = existingActive.querySelector(".question");
    existingActiveArrow.style.transform = "rotate(0deg)";
    existingActiveAnswer.style.maxHeight = "0px";
    existingActiveAnswer.style.opacity = "0";
    existingActiveTitle.style.color = "hsl(240, 6%, 50%)";
    allQuestions.forEach((q) => q.classList.remove(".active"));
  }

  if (arrow.style.transform === "rotate(180deg)") {
    allQuestions.forEach((q) => q.classList.remove(".active"));
    question.classList.add("active");
    title.style.color = "hsl(240, 6%, 50%)";
    answer.style.maxHeight = "0px";
    answer.style.opacity = "0";
    arrow.style.transform = "rotate(0deg)";
  } else {
    allQuestions.forEach((q) => q.classList.remove(".active"));
    question.classList.add("active");
    title.style.color = "black";
    answer.style.maxHeight = answer.scrollHeight + "px";
    answer.style.opacity = "1";
    arrow.style.transform = "rotate(180deg)";
  }

  // Close all open answers and reset styles
}
