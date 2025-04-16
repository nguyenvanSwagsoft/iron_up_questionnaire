const QUESTIONNAIRE = [
  {
    "Age Group": "6 months - 1 year old",
    Age_group_ID: 1,
    list: [
      {
        Question_category_ID: 1,
        Question_number: 1,
        Category: "Breastfeeding",
        Question: "Is the child breastfed? If so, approximately how often?",
        answers: [
          { id: 1, Answer_ID: 1, text: "≥3 times/day", score: 13 },
          { id: 2, Answer_ID: 2, text: "2 times/day", score: 6 },
          { id: 3, Answer_ID: 3, text: "1 time/day", score: 3 },
          { id: 4, Answer_ID: 190, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 2,
        Question_number: 2,
        Category: "Infant formula milk",
        Question:
          "How many portions of infant formula does your child consume daily?<br />One portion equals to <strong>250ml (7 spoons of powder milk).</strong>",
        answers: [
          { id: 1, Answer_ID: 4, text: "≥2 portions/day", score: 98 },
          { id: 2, Answer_ID: 5, text: "1 portion/day", score: 49 },
          { id: 3, Answer_ID: 6, text: "<1 portion/day", score: 25 },
          { id: 4, Answer_ID: 191, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 3,
        Question_number: 3,
        Category: "Iron-enriched cereals",
        Question:
          "How many portions of iron-fortified cereal does your child consume daily?<br />One portion equals to <strong>8 teaspoons (48g) of powder.</strong>",
        answers: [
          { id: 1, Answer_ID: 7, text: "≥2 portions/day", score: 68 },
          { id: 2, Answer_ID: 8, text: "1 portion/day", score: 34 },
          { id: 3, Answer_ID: 9, text: "<1 portion/day", score: 17 },
          { id: 4, Answer_ID: 192, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 4,
        Question_number: 4,
        Category: "Portions of liver or blood sausage",
        Question:
          "How many portions of liver does your child consume in a week?<br />One portion equals to <strong>3 teaspoons (15g).</strong>",
        answers: [
          { id: 1, Answer_ID: 10, text: "≥5 portions/week", score: 17 },
          { id: 2, Answer_ID: 11, text: "2 to 4 portions/week", score: 9 },
          { id: 3, Answer_ID: 12, text: "1 portion/week", score: 3 },
          { id: 4, Answer_ID: 193, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 5,
        Question_number: 5,
        Category: "Meat",
        Question:
          "How many portions of red meats (beef, lamb, goat, veal, pork etc.) does your child consume in a week?<br />One portion equals to <strong>3 teaspoon (15g).</strong>",
        answers: [
          { id: 1, Answer_ID: 13, text: "≥5 portions/week", score: 7 },
          { id: 2, Answer_ID: 14, text: "2 to 4 portions/week", score: 3 },
          { id: 3, Answer_ID: 15, text: "1 portion/week", score: 1 },
          { id: 4, Answer_ID: 194, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 6,
        Question_number: 6,
        Category: "Chicken/Fish/Egg",
        Question:
          "How many portions of other source of protein (egg, fish, chicken) does your child consume in a week?<br />One portion equals to <strong>3 teaspoon (15g).</strong>",
        answers: [
          { id: 1, Answer_ID: 16, text: "≥5 portions/week", score: 1 },
          { id: 2, Answer_ID: 17, text: "2 to 4 portions/week", score: 1 },
          { id: 3, Answer_ID: 18, text: "1 portion/week", score: 0 },
          { id: 4, Answer_ID: 195, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 7,
        Question_number: 7,
        Category: "Other iron sources",
        Question:
          "How many portions of legume (beans, nuts etc.) does your child consume in a week?<br />One portion equals to <strong>3 teaspoon (15g).</strong>",
        answers: [
          { id: 1, Answer_ID: 19, text: "≥5 portions/week", score: 1 },
          { id: 2, Answer_ID: 20, text: "2 to 4 portions/week", score: 0 },
          { id: 3, Answer_ID: 21, text: "1 portion/week", score: 0 },
          { id: 4, Answer_ID: 196, text: "Rarely/Never", score: 0 },
        ],
      },
    ],
  },
  {
    "Age Group": "1 - 3 years old",
    Age_group_ID: 2,
    list: [
      {
        Question_category_ID: 8,
        Question_number: 1,
        Category: "Breastfeeding",
        Question:
          "Is the child breastfed on demand daily? If yes, approximately how often?",
        answers: [
          { id: 1, Answer_ID: 22, text: "≥3 times/day", score: 8 },
          { id: 2, Answer_ID: 23, text: "2 times/day", score: 4 },
          { id: 3, Answer_ID: 24, text: "1 time/day", score: 2 },
          { id: 4, Answer_ID: 197, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 9,
        Question_number: 2,
        Category: "Growing-up milk",
        Question:
          "How many portions of growing up formula milk does your child consume daily?<br />One portion equals to <strong>250ml (7 spoons of powder).</strong>",
        answers: [
          { id: 1, Answer_ID: 25, text: "≥2 portions/day", score: 196 },
          { id: 2, Answer_ID: 26, text: "1 portion/day", score: 85 },
          { id: 3, Answer_ID: 27, text: "<1 portion/day", score: 42 },
          { id: 4, Answer_ID: 198, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 10,
        Question_number: 3,
        Category: "Iron-enriched cereals",
        Question:
          "How many portions of iron-fortified cereal does your child consume daily?<br />One portion equals to <strong>8 teaspoons (48g) of powder.</strong>",
        answers: [
          { id: 1, Answer_ID: 28, text: "≥2 portions/day", score: 108 },
          { id: 2, Answer_ID: 29, text: "1 portion/day", score: 54 },
          { id: 3, Answer_ID: 30, text: "<1 portion/day", score: 27 },
          { id: 4, Answer_ID: 199, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 11,
        Question_number: 4,
        Category: "Portions of liver or blood sausage",
        Question:
          "How many portions of liver does your child consume in a week?<br />One portion equals to <strong>6 teaspoons (30g).</strong>",
        answers: [
          { id: 1, Answer_ID: 31, text: "≥5 portions/week", score: 55 },
          { id: 2, Answer_ID: 32, text: "2 to 4 portions/week", score: 29 },
          { id: 3, Answer_ID: 33, text: "1 portion/week", score: 9 },
          { id: 4, Answer_ID: 200, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 12,
        Question_number: 5,
        Category: "Meat",
        Question:
          "How many portions of red meats (beef, lamb, goat, veal, pork etc.) does your child consume in a week?<br />One portion equals to <strong>6 teaspoons (30g).</strong>",
        answers: [
          { id: 1, Answer_ID: 34, text: "≥5 portions/week", score: 22 },
          { id: 2, Answer_ID: 35, text: "2 to 4 portions/week", score: 11 },
          { id: 3, Answer_ID: 36, text: "1 portion/week", score: 4 },
          { id: 4, Answer_ID: 201, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 13,
        Question_number: 6,
        Category: "Chicken/Fish/Egg",
        Question:
          "How many portions of other source of protein (egg, fish, chicken) does your child consume in a week?<br />One portion equals to <strong>6 teaspoons (30g).</strong>",
        answers: [
          { id: 1, Answer_ID: 37, text: "≥5 portions/week", score: 4 },
          { id: 2, Answer_ID: 38, text: "2 to 4 portions/week", score: 2 },
          { id: 3, Answer_ID: 39, text: "1 portion/week", score: 1 },
          { id: 4, Answer_ID: 202, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 14,
        Question_number: 7,
        Category: "Other iron sources",
        Question:
          "How many portions of legume (beans, nuts etc.) does your child consume in a week?<br />One portion equals to <strong>6 teaspoons (30g).</strong>",
        answers: [
          { id: 1, Answer_ID: 40, text: "≥5 portions/week", score: 3 },
          { id: 2, Answer_ID: 41, text: "2 to 4 portions/week", score: 2 },
          { id: 3, Answer_ID: 42, text: "1 portion/week", score: 1 },
          { id: 4, Answer_ID: 203, text: "Rarely/Never", score: 0 },
        ],
      },
    ],
  },
  {
    "Age Group": "4 - 6 years old",
    Age_group_ID: 3,
    list: [
      {
        Question_category_ID: 15,
        Question_number: 1,
        Category: "Breastfeeding",
        Question:
          "Is the child breastfed on demand daily? If yes, approximately how often?",
        answers: [
          { id: 1, Answer_ID: 43, text: "≥3 times/day", score: 7 },
          { id: 2, Answer_ID: 44, text: "2 times/day", score: 3 },
          { id: 3, Answer_ID: 45, text: "1 time/day", score: 2 },
          { id: 4, Answer_ID: 204, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 16,
        Question_number: 2,
        Category: "Growing-up milk",
        Question:
          "How many portions of growing up formula milk does your child consume daily?<br />One portion equals to <strong>250ml (7 spoons of powder).</strong>",
        answers: [
          { id: 1, Answer_ID: 46, text: "≥2 portions/day", score: 156 },
          { id: 2, Answer_ID: 47, text: "1 portion/day", score: 78 },
          { id: 3, Answer_ID: 48, text: "<1 portion/day", score: 39 },
          { id: 4, Answer_ID: 205, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 17,
        Question_number: 3,
        Category: "Iron-enriched cereals",
        Question:
          "How many portions of iron-fortified cereal does your child consume daily?<br />One portion equals to <strong>8 teaspoons (48g) of powder.</strong>",
        answers: [
          { id: 1, Answer_ID: 49, text: "≥2 portions/day", score: 100 },
          { id: 2, Answer_ID: 50, text: "1 portion/day", score: 50 },
          { id: 3, Answer_ID: 51, text: "<1 portion/day", score: 25 },
          { id: 4, Answer_ID: 206, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 18,
        Question_number: 4,
        Category: "Portions of liver or blood sausage",
        Question:
          "How many portions of liver does your child consume in a week?<br />One portion equals to <strong>10 teaspoons (50g).</strong>",
        answers: [
          { id: 1, Answer_ID: 52, text: "≥5 portions/week", score: 85 },
          { id: 2, Answer_ID: 53, text: "2 to 4 portions/week", score: 43 },
          { id: 3, Answer_ID: 54, text: "1 portion/week", score: 14 },
          { id: 4, Answer_ID: 207, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 19,
        Question_number: 5,
        Category: "Meat",
        Question:
          "How many portions of red meats (beef, lamb, goat, veal, pork etc.) does your child consume in a week?<br />One portion equals to <strong>10 teaspoons (50g).</strong>",
        answers: [
          { id: 1, Answer_ID: 55, text: "≥5 portions/week", score: 33 },
          { id: 2, Answer_ID: 56, text: "2 to 4 portions/week", score: 17 },
          { id: 3, Answer_ID: 57, text: "1 portion/week", score: 6 },
          { id: 4, Answer_ID: 208, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 20,
        Question_number: 6,
        Category: "Chicken/Fish/Egg",
        Question:
          "How many portions of other source of protein (egg, fish, chicken) does your child consume in a week?<br />One portion equals to <strong>10 teaspoons (50g).</strong>",
        answers: [
          { id: 1, Answer_ID: 58, text: "≥5 portions/week", score: 7 },
          { id: 2, Answer_ID: 59, text: "2 to 4 portions/week", score: 3 },
          { id: 3, Answer_ID: 60, text: "1 portion/week", score: 1 },
          { id: 4, Answer_ID: 209, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        Question_category_ID: 21,
        Question_number: 7,
        Category: "Other iron sources",
        Question:
          "How many portions of legume (beans, nuts etc.) does your child consume in a week?<br />One portion equals to <strong>10 teaspoons (50g).</strong>",
        answers: [
          { id: 1, Answer_ID: 61, text: "≥5 portions/week", score: 5 },
          { id: 2, Answer_ID: 62, text: "2 to 4 portions/week", score: 2 },
          { id: 3, Answer_ID: 63, text: "1 portion/week", score: 1 },
          { id: 4, Answer_ID: 210, text: "Rarely/Never", score: 0 },
        ],
      },
    ],
  },
];

$(document).ready(function () {
  let totalScore = {};
  let currentStep = 1;
  let selectedAgeGroup = null;
  let isChangeAgeGroup = false;
  let dataIdaAnswer = {};

  // Function to generate the age group options
  function generateAgeGroupStep() {
    const ageGroups = `
      <div class="list-answers">
        ${QUESTIONNAIRE.map(
          (group) => `
          <div class="f-radio">
            <input type="radio" name="ageGroup" value="${group.Age_group_ID}" class="ageGroupRadio" id="ageGroup-${group.Age_group_ID}">
            <label for="ageGroup-${group.Age_group_ID}">${group["Age Group"]}</label>
          </div>
        `
        ).join("")}
      </div>
      `;

    $("#ageGroups").html(ageGroups);
    $("#step1").addClass("active");
  }

  // Function to generate any step dynamically based on selected category
  function generateStep(step) {
    const allowNext = totalScore[`${step}`] !== undefined;
    const listQuestions = selectedAgeGroup.list[step - 2]; // Adjust step to index
    const questionsHtml = `
      <p>${listQuestions.Question}</p>
      <div class="list-answers">
        ${listQuestions.answers
          .map((answer) => {
            const isChecked = totalScore[`${step}`] === answer.score;
            return `
            <div class="f-radio">
            <input type="radio" name="question${
              listQuestions.Question_number
            }" value="${answer.score}" ${
              isChecked ? "checked" : ""
            } class="answerRadio" id="answer-${answer.Answer_ID}" data-id="${
              answer.Answer_ID
            }">
            <label for="answer-${answer.Answer_ID}">${answer.text}</label>
            </div>
          `;
          })
          .join("")}
      </div>
      `;

    $(`#step${step}`).html(`
        <div class="step-inner">
          <h3>
            <img src="../images/home/icon-benefits.svg" alt="${
              listQuestions.Category
            }" width="108" />
            ${listQuestions.Category}
          </h3>
          ${questionsHtml}
        </div>
        <div class="f-action">
          <button type="button" class="btn-back" id="backStep${step}">Previous</button>
          <button type="button" class="btn-next" id="nextStep${step}" ${allowNext ? "" : "disabled"}>Next</button>
        </div>
      `);

    // Event listener for radio buttons to enable/disable next button
    $(`#step${step} input[type="radio"]`).on("change", function () {
      dataIdaAnswer[`${step - 1}`] = $(
        `#step${step} input[type="radio"]:checked`
      ).data("id");
      totalScore[`${step}`] = parseInt(
        $(`#step${step}`).find('input[type="radio"]:checked').val()
      );

      $(`#step${step} #nextStep${step}`).prop("disabled", false);
    });
  }

  // Function to show next step
  function nextStep() {
    $(`#step${currentStep}`).removeClass("active");
    currentStep++;
    if (currentStep <= 8) {
      $(`#step${currentStep}`).addClass("active");
      $("#stepIndicator").text(`${currentStep} of 8`);
      $("#stepProgress").val(currentStep);
      generateStep(currentStep);
    } else {
      const sum = Object.values(totalScore).reduce(
        (acc, value) => acc + value,
        0
      );
      selectedAgeGroup.list = selectedAgeGroup.list.map((item) => {
        const selectedAnswerId = dataIdaAnswer[item.Question_number];
        const selectedAnswer = item.answers.find(
          (ans) => ans.Answer_ID === selectedAnswerId
        );
        return {
          Question_category_ID: item.Question_category_ID,
          Question_number: item.Question_number,
          Category: item.Category,
          Question: item.Question,
          Answer_ID: selectedAnswer.Answer_ID,
          score: selectedAnswer.score,
          text: selectedAnswer.text,
        };
      });

      selectedAgeGroup["Health_Score"] = sum;

      // Download JSON file
      // const json = JSON.stringify(selectedAgeGroup, null, 2); // format đẹp
      // const blob = new Blob([json], { type: "application/json" });
      // const url = URL.createObjectURL(blob);

      // const a = $("<a>")
      //   .attr("href", url)
      //   .attr("download", "iron_tracker_result.json")
      //   .appendTo("body");

      // a[0].click();
      // a.remove();
      // URL.revokeObjectURL(url);

      if (sum < 100) {
        $("#result").addClass("low");
      }

      $(".step-indicator").hide();
      $("#questionnaireForm").hide();
      $("#result").show();
      $("#totalScore").text(sum);
    }
  }

  // Function to go back to the previous step
  function backStep() {
    $(`#step${currentStep}`).removeClass("active");
    currentStep--;
    if (currentStep >= 1) {
      $(`#step${currentStep}`).addClass("active");
      $("#stepIndicator").text(`${currentStep} of 8`);
      $("#stepProgress").val(currentStep);
    }
  }

  // Handle Age Group Selection
  $(document).on("change", 'input[name="ageGroup"]', function () {
    selectedAgeGroup = QUESTIONNAIRE.find(
      (group) => group.Age_group_ID == $(this).val()
    );

    if (selectedAgeGroup) {
      $(`#nextStep1`).prop("disabled", false);
    }

    isChangeAgeGroup = true;
  });

  // Handle Back Button for Steps 2 to 8
  $(document).on("click", '[id^="backStep"]', function () {
    backStep();
    totalScore;
  });

  // Handle Next Button for Steps 2 to 8
  $(document).on("click", '[id^="nextStep"]', function () {
    if (currentStep === 1 && isChangeAgeGroup) {
      totalScore = {};
    }

    if (currentStep > 1) {
      isChangeAgeGroup = false;
    }

    nextStep();
  });

  // Initialize the form with the age group selection
  generateAgeGroupStep();
});
