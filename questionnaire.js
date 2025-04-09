const QUESTIONNAIRE = [
  {
    ageGroup: "6 months - 1 year old",
    ageGroupId: 1,
    categories: [
      {
        id: 1,
        name: "Breastfeeding",
        questions: "Is the child breastfed? If so, approximately how often?",
        answers: [
          { id: 1, text: "≥3 times/day", score: 13 },
          { id: 2, text: "2 times/day", score: 6 },
          { id: 3, text: "1 time/day", score: 3 },
          { id: 190, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 2,
        name: "Infant formula milk",
        questions:
          "How many portions of infant formula does your child consume daily?<br />One portion equals to <strong>250ml.</strong>",
        answers: [
          { id: 4, text: "≥2 portions/day", score: 98 },
          { id: 5, text: "1 portion/day", score: 49 },
          { id: 6, text: "<1 portion/day", score: 25 },
          { id: 191, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 3,
        name: "Iron-enriched cereals",
        questions:
          "How many portions of iron-fortified cereal does your child consume daily?<br />One portion equals to <strong>8 teaspoons (48g) of powder.</strong>",
        answers: [
          { id: 7, text: "≥2 portions/day", score: 68 },
          { id: 8, text: "1 portion/day", score: 34 },
          { id: 9, text: "<1 portion/day", score: 17 },
          { id: 192, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 4,
        name: "Liver/blood",
        questions:
          "How many portions of liver does your child consume in a week?<br />One portion equals to <strong>3 teaspoons (15g).</strong>",
        answers: [
          { id: 10, text: "≥5 portions/week", score: 17 },
          { id: 11, text: "2 to 4 portions/week", score: 9 },
          { id: 12, text: "1 portion/week", score: 3 },
          { id: 193, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 5,
        name: "Meats",
        questions:
          "How many portions of red meats (beef, lamb, goat, veal, pork etc.) does your child consume in a week?<br />One portion equals to <strong>3 teaspoon (15g).</strong>",
        answers: [
          { id: 13, text: "≥5 portions/week", score: 7 },
          { id: 14, text: "2 to 4 portions/week", score: 3 },
          { id: 15, text: "1 portion/week", score: 1 },
          { id: 194, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 6,
        name: "Chicken/Fish/Egg",
        questions:
          "How many portions of other source of protein (egg, fish, chicken) does your child consume in a week?<br />One portion equals to <strong>3 teaspoon (15g).</strong>",
        answers: [
          { id: 16, text: "≥5 portions/week", score: 1 },
          { id: 17, text: "2 to 4 portions/week", score: 1 },
          { id: 18, text: "1 portion/week", score: 0 },
          { id: 195, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 7,
        name: "Other iron sources",
        questions:
          "How many portions of legume (beans, nuts etc.) does your child consume in a week?<br />One portion equals to <strong>3 teaspoon (15g).</strong>",
        answers: [
          { id: 19, text: "≥5 portions/week", score: 1 },
          { id: 20, text: "2 to 4 portions/week", score: 0 },
          { id: 21, text: "1 portion/week", score: 0 },
          { id: 196, text: "Rarely/Never", score: 0 },
        ],
      },
    ],
  },
  {
    ageGroup: "1 - 3 years old",
    ageGroupId: 2,
    categories: [
      {
        id: 1,
        name: "Breastfeeding",
        questions:
          "Is the child breastfed on demand daily? If yes, approximately how often?",
        answers: [
          { id: 22, text: "≥3 times/day", score: 8 },
          { id: 23, text: "2 times/day", score: 4 },
          { id: 24, text: "1 time/day", score: 2 },
          { id: 197, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 2,
        name: "Growing-up milk",
        questions:
          "How many portions of growing up formula milk does your child consume daily?<br />One portion equals to <strong>250ml.</strong>",
        answers: [
          { id: 25, text: "≥2 portions/day", score: 196 },
          { id: 26, text: "1 portion/day", score: 85 },
          { id: 27, text: "<1 portion/day", score: 42 },
          { id: 198, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 3,
        name: "Iron-enriched cereals",
        questions:
          "How many portions of iron-fortified cereal does your child consume daily?<br />One portion equals to <strong>8 teaspoons (48g) of powder.</strong>",
        answers: [
          { id: 28, text: "≥2 portions/day", score: 108 },
          { id: 29, text: "1 portion/day", score: 54 },
          { id: 30, text: "<1 portion/day", score: 27 },
          { id: 199, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 4,
        name: "Liver/blood",
        questions:
          "How many portions of liver does your child consume in a week?<br />One portion equals to <strong>6 teaspoons (30g).</strong>",
        answers: [
          { id: 31, text: "≥5 portions/week", score: 55 },
          { id: 32, text: "2 to 4 portions/week", score: 29 },
          { id: 33, text: "1 portion/week", score: 9 },
          { id: 200, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 5,
        name: "Meats",
        questions:
          "How many portion of red meats (beef, lamb, goat, veal, pork etc.) does your child consume in a week?<br />One portion equals to <strong>6 teaspoons (30g).</strong>",
        answers: [
          { id: 34, text: "≥5 portions/week", score: 22 },
          { id: 35, text: "2 to 4 portions/week", score: 11 },
          { id: 36, text: "1 portion/week", score: 4 },
          { id: 201, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 6,
        name: "Chicken/Fish/Egg",
        questions:
          "How many portions of other source of protein (egg, fish, chicken) does your child consume in a week?<br />One portion equals to <strong>6 teaspoons (30g).</strong>",
        answers: [
          { id: 37, text: "≥5 portions/week", score: 4 },
          { id: 38, text: "2 to 4 portions/week", score: 2 },
          { id: 39, text: "1 portion/week", score: 1 },
          { id: 202, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 7,
        name: "Other iron sources",
        questions:
          "How many portions of legume (beans, nuts etc.) does your child consume in a week?<br />One portion equals to <strong>6 teaspoons (30g).</strong>",
        answers: [
          { id: 40, text: "≥5 portions/week", score: 3 },
          { id: 41, text: "2 to 4 portions/week", score: 2 },
          { id: 42, text: "1 portion/week", score: 1 },
          { id: 203, text: "Rarely/Never", score: 0 },
        ],
      },
    ],
  },
  {
    ageGroup: "4 - 6 years old",
    ageGroupId: 3,
    categories: [
      {
        id: 1,
        name: "Breastfeeding",
        questions:
          "Is the child breastfed on demand daily? If yes, approximately how often?",
        answers: [
          { id: 43, text: "≥3 times/day", score: 7 },
          { id: 44, text: "2 times/day", score: 3 },
          { id: 45, text: "1 time/day", score: 2 },
          { id: 204, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 2,
        name: "Growing-up milk",
        questions:
          "How many portions of growing up formula milk does your child consume daily?<br />One portion equals to <strong>250ml.</strong>",
        answers: [
          { id: 46, text: "≥2 portions/day", score: 156 },
          { id: 47, text: "1 portion/day", score: 78 },
          { id: 48, text: "<1 portion/day", score: 39 },
          { id: 205, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 3,
        name: "Iron-enriched cereals",
        questions:
          "How many portions of iron-fortified cereal does your child consume daily?<br />One portion equals to <strong>8 teaspoons (48g) of powder.</strong>",
        answers: [
          { id: 49, text: "≥2 portions/day", score: 100 },
          { id: 50, text: "1 portion/day", score: 50 },
          { id: 51, text: "<1 portion/day", score: 25 },
          { id: 206, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 4,
        name: "Liver/blood",
        questions:
          "How many portions of liver does your child consume in a week?<br />One portion equals to <strong>10 teaspoons (50g).</strong>",
        answers: [
          { id: 52, text: "≥5 portions/week", score: 85 },
          { id: 53, text: "2 to 4 portions/week", score: 43 },
          { id: 54, text: "1 portion/week", score: 14 },
          { id: 207, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 5,
        name: "Meats",
        questions:
          "How many portion of red meats (beef, lamb, goat, veal, pork etc.) does your child consume in a week?<br />One portion equals to <strong>10 teaspoons (50g).</strong>",
        answers: [
          { id: 55, text: "≥5 portions/week", score: 33 },
          { id: 56, text: "2 to 4 portions/week", score: 17 },
          { id: 57, text: "1 portion/week", score: 6 },
          { id: 208, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 6,
        name: "Chicken/Fish/Egg",
        questions:
          "How many portions of other source of protein (egg, fish, chicken) does your child consume in a week?<br />One portion equals to <strong>10 teaspoons (50g).</strong>",
        answers: [
          { id: 58, text: "≥5 portions/week", score: 7 },
          { id: 59, text: "2 to 4 portions/week", score: 3 },
          { id: 60, text: "1 portion/week", score: 1 },
          { id: 209, text: "Rarely/Never", score: 0 },
        ],
      },
      {
        id: 7,
        name: "Other iron sources",
        questions:
          "How many portions of legume (beans, nuts etc.) does your child consume in a week?<br />One portion equals to <strong>10 teaspoons (50g).</strong>",
        answers: [
          { id: 61, text: "≥5 portions/week", score: 5 },
          { id: 62, text: "2 to 4 portions/week", score: 2 },
          { id: 63, text: "1 portion/week", score: 1 },
          { id: 210, text: "Rarely/Never", score: 0 },
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

  // Function to generate the age group options
  function generateAgeGroupStep() {
    const ageGroups = `
      <div class="list-answers">
        ${QUESTIONNAIRE.map(
          (group) => `
          <div class="f-radio">
            <input type="radio" name="ageGroup" value="${group.ageGroupId}" class="ageGroupRadio" id="ageGroup-${group.ageGroupId}">
            <label for="ageGroup-${group.ageGroupId}">${group.ageGroup}</label>
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
    const category = selectedAgeGroup.categories[step - 2]; // Adjust step to index
    const questionsHtml = `
      <p>${category.questions}</p>
      <div class="list-answers">
        ${category.answers
          .map((answer) => {
            const isChecked = totalScore[`${step}`] === answer.score;
            return `
            <div class="f-radio">
            <input type="radio" name="question${category.id}" value="${
              answer.score
            }" ${isChecked ? "checked" : ""} class="answerRadio" id="answer-${
              answer.id
            }">
            <label for="answer-${answer.id}">${answer.text}</label>
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
              category.name
            }" width="108" />
            ${category.name}
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
      (group) => group.ageGroupId == $(this).val()
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
