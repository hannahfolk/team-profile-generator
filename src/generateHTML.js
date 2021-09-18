const buildManagerCard = (manager) => {
  return `
  <div class="card">
    <div class="card-header">
      <h4>${manager.getName()}</h4>
      <h5><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h5>
    </div>

    <div class="card-body">
      <div class="card sub-card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">
            Email:
            <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a>
          </li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  </div>
  `;
};

const buildEngineerCard = (engineer) => {
  return `
  <div class="card">
    <div class="card-header">
      <h4>${engineer.getName()}</h4>
      <h5><i class="fas fa-glasses"></i> ${engineer.getRole()}</h5>
    </div>

    <div class="card-body">
      <div class="card sub-card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">
            Email:
            <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a>
          </li>
          <li class="list-group-item">
            GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  `;
};

const buildInternCard = (intern) => {
  return `
  <div class="card">
    <div class="card-header">
      <h4>${intern.getName()}</h4>
      <h5><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h5>
    </div>

    <div class="card-body">
      <div class="card sub-card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">
            Email:
            <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a>
          </li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
  </div>
  `;
};

// Create a string of HTML code
const generateHTML = (team) => {
  let cards = "";
  team.forEach((employee) => {
    switch (employee.getRole()) {
      case "Manager":
        cards += buildManagerCard(employee);
        break;
      case "Engineer":
        cards += buildEngineerCard(employee);
        break;
      case "Intern":
        cards += buildInternCard(employee);
        break;
    }
  });

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>

    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <style>
      .container-fluid {
        background-color: #e84855;
        color: white;
        padding: 50px;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 50px;
      }

      .card {
        box-shadow: 5px 5px 5px #888888;
        max-width: 300px;
        margin: 20px;
        float: left;
      }

      .card-header {
        background-color: dodgerblue;
        color: white;
        border-color: dodgerblue;
      }

      .card-body {
        background-color: #f5f6f8;
      }
      .sub-card {
        box-shadow: none;
      }

      .row {
        margin-bottom: 20px;
      }
    </style>
    <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://kit.fontawesome.com/c58f8cf9af.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div class="container-fluid">
      <h1 class="text-center">My Team</h1>
    </div>

    <div class="container">
      ${cards}
    </div>

  </body>
</html>`;
};

// Export the generateHTML function with the template literals to the server-side Javascript file
module.exports = generateHTML;
