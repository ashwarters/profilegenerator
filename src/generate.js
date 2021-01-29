const generateSite = function(employees) {
    const topHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        <link rel="stylesheet" href="./dist/style.css" />
        <title>Software Engineering Team</title>
      </head>
      <body>
        <main>
        <div class="container-fluid">
            <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger text-white">
                <h1 class="text-center"> Team</h1>
            </div>
            </div>
        </div>
        
        <div class="container">
        <div class="row">
        <div class="row col-12 d-flex justify-content-center">
    `;

    const bottomHtml = `
        </div>
        </div>  
      </main>
        
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
      </body>
      </html>
    `;

    let total = topHtml;

    const manager = function(data) {
        return `
      <div class="card m-3 col-3 p-0" style="width: 18rem;">
            <div class="card-body m-0 p-0">
            <div class="bg-dark m-0 p-2 text-light">
                <h5 class="card-title">${data.name}</h5>
                <h5 class="card-subtitle mb-2"><i class="fas fa-mug-hot"></i> Manager</h5>
            </div>
            
            <div class="p-3 bg-light">
                <ul class="list-group">
                    <li class="list-group-item">
                        ID: ${data.id}
                    </li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${data.email}">${data.email}</a>
                    </li>
                    <li class="list-group-item">
                        Office Number: ${data.officeNumber}
                    </li>
                </ul>
            </div>
            </div>
            </div>
        </div>
      `
    };

    const engineer = function(data) {
        return `
      <div class="card m-3 col-3 p-0" style="width: 18rem;">
        <div class="card-body m-0 p-0">
        <div class="bg-dark m-0 p-2 text-light">
            <h5 class="card-title">${data.name}</h5>
            <h5 class="card-subtitle mb-2"><i class="fas fa-glasses"></i> Engineer</h5>
        </div>
            <div class="p-3 bg-light">
                <ul class="list-group">
                    <li class="list-group-item">
                        ID: ${data.id}
                    </li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${data.email}">${data.email}</a>
                    </li>
                    <li class="list-group-item">
                        GitHub: <a href="https://www.github.com/${data.github}" target="_blank">${data.github}</a>
                    </li>
                </ul>
            </div>
            </div>
      </div>
      `;
    };

    const intern = function(data) {
        return `
      <div class="card m-3 col-3 p-0" style="width: 18rem;">
        <div class="card-body m-0 p-0">
        <div class="bg-dark m-0 p-2 text-light">
            <h5 class="card-title">${data.name}</h5>
            <h5 class="card-subtitle mb-2"><i class="fas fa-user-graduate"></i> Intern</h5>
        </div>
            
            <div class="p-3 bg-light">
                <ul class="list-group">
                    <li class="list-group-item">
                        ID: ${data.id}
                    </li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${data.email}">${data.email}</a>
                    </li>
                    <li class="list-group-item">
                        School: ${data.school}
                    </li>
                </ul>
            </div>
            </div>
      </div>
      `;
    };

    employees.map(data => {
        switch (data.getRole()) {
            case 'Manager':
                total = total + manager(data);
                break;
            case 'Engineer':
                total = total + engineer(data);
                break;
            case 'Intern':
                total = total + intern(data);
                break;
        }
    });
    return total + bottomHtml;
};


module.exports = generateSite;