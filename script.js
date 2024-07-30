function filterServices() {
    const category = document.getElementById('category').value;
    const templates = document.querySelectorAll('.template');

    templates.forEach(template => {
        if (category === 'all' || template.dataset.category === category) {
            template.style.display = 'block';
        } else {
            template.style.display = 'none';
        }
    });
}

function zoomIn(element) {
    element.style.transform = "scale(1.1)";
}

function zoomOut(element) {
    element.style.transform = "scale(1)";
}

// Obtenemos todos los elementos de servicio
const services = document.querySelectorAll('.service');

// Agregamos un event listener a cada servicio
services.forEach(service => {
    service.addEventListener('click', () => {
        // Ocultamos todas las descripciones de servicios
        services.forEach(s => {
            s.classList.remove('active');
        });

        // Mostramos la descripción del servicio clickeado
        service.classList.add('active');
    });
});

// script.js

function showDetails(imgElement) {
    const imageSrc = imgElement.src;
    const title = imgElement.getAttribute('data-title');
    const description = imgElement.getAttribute('data-description');
    const name = imgElement.getAttribute('data-name');
    const features = imgElement.getAttribute('data-features');
    
    // Configurar los detalles de la imagen
    document.getElementById('detail-image').src = imageSrc;
    document.getElementById('detail-title').innerHTML = `<h2>${title}</h2>`;
    const descriptionElement = document.getElementById('detail-description');
    descriptionElement.innerHTML = `<p><h2>${name}</h2></p>`;
    descriptionElement.innerHTML += `<p>${description}</p>`;
    descriptionElement.innerHTML += `<p><h2>Características:</h2></p>`;
    descriptionElement.innerHTML += `<p>${features}</p>`;
    
    // Obtener la categoría del elemento clicado
    const category = imgElement.closest('.template').getAttribute('data-category');
    const imageDetails = document.getElementById('image-details');

    // Limpiar las clases de categorías anteriores
    imageDetails.classList.remove('storage', 'compute', 'database', 'networking', 'analytics');
    
    // Agregar la nueva clase basada en la categoría
    imageDetails.classList.add(category);
    
    // Mostrar los detalles
    imageDetails.classList.remove('hidden');
    document.body.classList.add('no-scroll');
}

function hideDetails() {
    document.getElementById('image-details').classList.add('hidden');
    document.body.classList.remove('no-scroll');
}

function filterServices() {
    const category = document.getElementById('category').value;
    const templates = document.querySelectorAll('.template');
    
    templates.forEach(template => {
        if (category === 'all' || template.dataset.category === category) {
            template.style.display = 'block';
        } else {
            template.style.display = 'none';
        }
    });
}


function filterServices() {
    const category = document.getElementById('category').value;
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const templates = document.querySelectorAll('.template');

    templates.forEach(template => {
        const matchesCategory = category === 'all' || template.dataset.category === category;
        const matchesSearch = template.querySelector('h3').innerText.toLowerCase().includes(searchQuery);
        if (matchesCategory && matchesSearch) {
            template.style.display = 'block';
        } else {
            template.style.display = 'none';
        }
    });
}


// scripts.js
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Guardar el estado del modo oscuro en el almacenamiento local
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Verificar el estado del modo oscuro al cargar la página
window.onload = function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

// esto es para la seccion de bloc

document.addEventListener('DOMContentLoaded', () => {
    const services = [
        { id: 1, name: 'AWS Auto Scaling', icon: 'https://bucket-juan.s3.amazonaws.com/img/autoscalling.png' },
        { id: 2, name: 'AWS Batch', icon: 'https://bucket-juan.s3.amazonaws.com/img/batch.png' },
        { id: 3, name: 'Amazon EC2', icon: 'https://bucket-juan.s3.amazonaws.com/img/EC2.png' },
        { id: 4, name: 'AWS Elastic Beanstalk', icon: 'https://bucket-juan.s3.amazonaws.com/img/elastic-beanstalk.svg' },
        { id: 5, name: 'Amazon Lambda', icon: 'https://bucket-juan.s3.amazonaws.com/img/lambda.png' },
        { id: 6, name: 'Amazon Lightsail', icon: 'https://bucket-juan.s3.amazonaws.com/img/lightsail.jpg' },
        { id: 7, name: 'AWS Outposts', icon: 'https://bucket-juan.s3.amazonaws.com/img/outposts.jpeg' },
        { id: 8, name: 'AWS Backup', icon: 'https://bucket-juan.s3.amazonaws.com/img/backup.jpg' },
        { id: 9, name: 'Amazon EBS', icon: 'https://bucket-juan.s3.amazonaws.com/img/EBS.jpeg' },
        { id: 10, name: 'Amazon EFS', icon: 'https://bucket-juan.s3.amazonaws.com/img/EFS.svg' },
        { id: 11, name: 'Amazon FSx', icon: 'https://bucket-juan.s3.amazonaws.com/img/fsx.png' },
        { id: 12, name: 'Amazon S3', icon: 'https://bucket-juan.s3.amazonaws.com/img/s3.png' },
        { id: 13, name: 'AWS Storage Gateway', icon: 'https://bucket-juan.s3.amazonaws.com/img/storage-gateway.jpeg' },
        { id: 14, name: 'Amazon API Gateway', icon: 'https://bucket-juan.s3.amazonaws.com/img/API-gateway.png' },
        { id: 15, name: 'Amazon CloudFront', icon: 'https://bucket-juan.s3.amazonaws.com/img/cloudfront.png' },
        { id: 16, name: 'AWS Direct Connect', icon: 'https://bucket-juan.s3.amazonaws.com/img/direct-connect.jpeg' },
        { id: 17, name: 'AWS Global Accelerator', icon: 'https://bucket-juan.s3.amazonaws.com/img/global-accelerator.jpeg' },
        { id: 18, name: 'Amazon Route 53', icon: 'https://bucket-juan.s3.amazonaws.com/img/route53.png' },
        { id: 19, name: 'Amazon VPC', icon: 'https://bucket-juan.s3.amazonaws.com/img/VPC.png' },
        { id: 20, name: 'AWS VPN', icon: 'https://bucket-juan.s3.amazonaws.com/img/VPN.png' },
        { id: 21, name: 'AWS Artifact', icon: 'https://bucket-juan.s3.amazonaws.com/img/artifact.webp' },
        { id: 22, name: 'AWS Certificate Manager (ACM)', icon: 'https://bucket-juan.s3.amazonaws.com/img/certificate-manager.png' },
        { id: 23, name: 'AWS CloudHSM', icon: 'https://bucket-juan.s3.amazonaws.com/img/cloudHSM.jpeg' },
        { id: 24, name: 'Amazon Cognito', icon: 'https://bucket-juan.s3.amazonaws.com/img/cognito.png' },
        { id: 25, name: 'Amazon GuardDuty', icon: 'https://bucket-juan.s3.amazonaws.com/img/guarduty.jpeg' },
        { id: 26, name: 'AWS IAM', icon: 'https://bucket-juan.s3.amazonaws.com/img/IAM.webp' },
        { id: 27, name: 'Amazon Inspector', icon: 'https://bucket-juan.s3.amazonaws.com/img/inspector.webp' },
        { id: 28, name: 'AWS Key Management Service (KMS)', icon: 'https://bucket-juan.s3.amazonaws.com/img/KMS.png' },
        { id: 29, name: 'Amazon Macie', icon: 'https://bucket-juan.s3.amazonaws.com/img/macie.png' },
        { id: 30, name: 'AWS Secrets Manager', icon: 'https://bucket-juan.s3.amazonaws.com/img/secrets-manager.svg' },
        { id: 31, name: 'AWS Security Hub', icon: 'https://bucket-juan.s3.amazonaws.com/img/security-hub.jpg' },
        { id: 32, name: 'AWS Shield', icon: 'https://bucket-juan.s3.amazonaws.com/img/shield.webp' },
        { id: 33, name: 'AWS WAF', icon: 'https://bucket-juan.s3.amazonaws.com/img/waf.webp' },
        { id: 34, name: 'Amazon ECR', icon: 'https://bucket-juan.s3.amazonaws.com/img/ECR.png' },
        { id: 35, name: 'Amazon ECS', icon: 'https://bucket-juan.s3.amazonaws.com/img/ECS.png' },
        { id: 36, name: 'Amazon EKS', icon: 'https://bucket-juan.s3.amazonaws.com/img/EKS.jpeg' },
        { id: 37, name: 'AWS Fargate', icon: 'https://bucket-juan.s3.amazonaws.com/img/fargate.png' },
        { id: 38, name: 'Amazon Aurora', icon: 'https://bucket-juan.s3.amazonaws.com/img/aurora.jpeg' },
        { id: 39, name: 'Amazon RDS', icon: 'https://bucket-juan.s3.amazonaws.com/img/RDS.jpeg' },
        { id: 40, name: 'Amazon DynamoDB', icon: 'https://bucket-juan.s3.amazonaws.com/img/dynamodb.svg' },
        { id: 41, name: 'Amazon MemoryDB for Redis', icon: 'https://bucket-juan.s3.amazonaws.com/img/memorydb-for-redis.png' },
        { id: 42, name: 'Amazon Neptune', icon: 'https://bucket-juan.s3.amazonaws.com/img/neptune.png' },
        { id: 43, name: 'Amazon ElastiCache', icon: 'https://bucket-juan.s3.amazonaws.com/img/elasticache.png' },
        { id: 44, name: 'Amazon Athena', icon: 'https://bucket-juan.s3.amazonaws.com/img/athena.png' },
        { id: 45, name: 'AWS Data Exchange', icon: 'https://bucket-juan.s3.amazonaws.com/img/data-exchange.jpeg' },
        { id: 46, name: 'Amazon EMR', icon: 'https://bucket-juan.s3.amazonaws.com/img/EMR.png' },
        { id: 47, name: 'AWS Glue', icon: 'https://bucket-juan.s3.amazonaws.com/img/glue.webp' },
        { id: 48, name: 'Amazon Kinesis', icon: 'https://bucket-juan.s3.amazonaws.com/img/kinesis.png' },
        { id: 49, name: 'Amazon MSK', icon: 'https://bucket-juan.s3.amazonaws.com/img/MSK.png' },
        { id: 50, name: 'Amazon OpenSearch Service', icon: 'https://bucket-juan.s3.amazonaws.com/img/opensearch.png' },
        { id: 51, name: 'Amazon QuickSight', icon: 'https://bucket-juan.s3.amazonaws.com/img/quicksight.png' },
        { id: 52, name: 'Amazon Redshift', icon: 'https://bucket-juan.s3.amazonaws.com/img/redshift.webp' },
        { id: 53, name: 'Amazon EventBridge', icon: 'https://bucket-juan.s3.amazonaws.com/img/eventbridge.png' },
        { id: 54, name: 'Amazon SNS', icon: 'https://bucket-juan.s3.amazonaws.com/img/SNS.jpeg' },
        { id: 55, name: 'Amazon SQS', icon: 'https://bucket-juan.s3.amazonaws.com/img/SQS.svg' },
        { id: 56, name: 'AWS Step Functions', icon: 'https://bucket-juan.s3.amazonaws.com/img/step-functions.svg' },
        { id: 57, name: 'Amazon SES', icon: 'https://bucket-juan.s3.amazonaws.com/img/SES.png' },
        { id: 58, name: 'AWS Budgets', icon: 'https://bucket-juan.s3.amazonaws.com/img/budgets.png' },
        { id: 59, name: 'AWS Cost and Usage Report', icon: 'https://bucket-juan.s3.amazonaws.com/img/cost-and-usage-report.webp' },
        { id: 60, name: 'AWS Cost Explorer', icon: 'https://bucket-juan.s3.amazonaws.com/img/cost-explorer.webp' },
        { id: 61, name: 'AWS Marketplace', icon: 'https://bucket-juan.s3.amazonaws.com/img/marketplace.png' },
        { id: 62, name: 'AWS Database Migration Service (AWS DMS)', icon: 'https://bucket-juan.s3.amazonaws.com/img/DMS.png' },
        { id: 63, name: 'AWS Migration Hub', icon: 'https://bucket-juan.s3.amazonaws.com/img/migration-hub.jpeg' },
        { id: 64, name: 'AWS Snowball', icon: 'https://bucket-juan.s3.amazonaws.com/img/snowball.jpeg' },
        { id: 65, name: 'AWS Snowball Edge', icon: 'https://bucket-juan.s3.amazonaws.com/img/snowball-edge.png' },
        { id: 66, name: 'AWS Snowmobile', icon: 'https://bucket-juan.s3.amazonaws.com/img/snowmobile.png' },
        { id: 67, name: 'AWS Transfer Family', icon: 'https://bucket-juan.s3.amazonaws.com/img/transfer-family.png' },
        { id: 68, name: 'AWS CloudFormation', icon: 'https://bucket-juan.s3.amazonaws.com/img/cloudformation.png' },
        { id: 69, name: 'AWS CloudTrail', icon: 'https://bucket-juan.s3.amazonaws.com/img/cloudtrail.svg' },
        { id: 70, name: 'Amazon CloudWatch', icon: 'https://bucket-juan.s3.amazonaws.com/img/cloudwatch.png' },
        { id: 71, name: 'AWS Config', icon: 'https://bucket-juan.s3.amazonaws.com/img/config.jpeg' },
        { id: 72, name: 'AWS Control Tower', icon: 'https://bucket-juan.s3.amazonaws.com/img/control-tower.jpeg' },
        { id: 73, name: 'AWS Personal Health Dashboard', icon: 'https://bucket-juan.s3.amazonaws.com/img/healh-dashboard.png' },
        { id: 74, name: 'AWS Management Console', icon: 'https://bucket-juan.s3.amazonaws.com/img/management-console.png' },
        { id: 75, name: 'AWS Organizations', icon: 'https://bucket-juan.s3.amazonaws.com/img/organizations.webp' },
        { id: 76, name: 'AWS Systems Manager', icon: 'https://bucket-juan.s3.amazonaws.com/img/systems-manager.jpeg' },
        { id: 77, name: 'AWS Trusted Advisor', icon: 'https://bucket-juan.s3.amazonaws.com/img/trusted-advisor.png' },
        { id: 78, name: 'AWS Well-Architected Tool', icon: 'https://bucket-juan.s3.amazonaws.com/img/well-architecture-tool.png' },
        { id: 79, name: 'AWS AppConfig', icon: 'https://bucket-juan.s3.amazonaws.com/img/appconfig.jpeg' },
        { id: 80, name: 'AWS CLI', icon: 'https://bucket-juan.s3.amazonaws.com/img/CLI.png' },
        { id: 81, name: 'AWS Cloud9', icon: 'https://bucket-juan.s3.amazonaws.com/img/cloud9.jpeg' },
        { id: 82, name: 'AWS CloudShell', icon: 'https://bucket-juan.s3.amazonaws.com/img/cloudshell.jpeg' },
        { id: 83, name: 'AWS CodeBuild', icon: 'https://bucket-juan.s3.amazonaws.com/img/codebuild.png' },
        { id: 84, name: 'AWS CodeCommit', icon: 'https://bucket-juan.s3.amazonaws.com/img/codecommit.png' },
        { id: 85, name: 'AWS CodeDeploy', icon: 'https://bucket-juan.s3.amazonaws.com/img/codedeploy.webp' },
        { id: 86, name: 'AWS CodePipeline', icon: 'https://bucket-juan.s3.amazonaws.com/img/codepipeline.png' },
        { id: 87, name: 'AWS X-Ray', icon: 'https://bucket-juan.s3.amazonaws.com/img/X-Ray.png' },
        { id: 88, name: 'AWS Amplify', icon: 'https://bucket-juan.s3.amazonaws.com/img/amplify.png' },
        { id: 89, name: 'AWS AppSync', icon: 'https://bucket-juan.s3.amazonaws.com/img/appsync.png' },
        { id: 90, name: 'Amazon Comprehend', icon: 'https://bucket-juan.s3.amazonaws.com/img/comprehend.png' },
        { id: 91, name: 'Amazon Kendra', icon: 'https://bucket-juan.s3.amazonaws.com/img/kendra.png' },
        { id: 92, name: 'Amazon Lex', icon: 'https://bucket-juan.s3.amazonaws.com/img/lex.png' },
        { id: 93, name: 'Amazon Polly', icon: 'https://bucket-juan.s3.amazonaws.com/img/polly.png' },
        { id: 94, name: 'Amazon Rekognition', icon: 'https://bucket-juan.s3.amazonaws.com/img/rekognition.png' },
        { id: 95, name: 'Amazon SageMaker', icon: 'https://bucket-juan.s3.amazonaws.com/img/sagemaker.jpeg' },
        { id: 96, name: 'Amazon Textract', icon: 'https://bucket-juan.s3.amazonaws.com/img/textract.png' },
        { id: 97, name: 'Amazon Transcribe', icon: 'https://bucket-juan.s3.amazonaws.com/img/transcribe.png' },
        { id: 98, name: 'Amazon Translate', icon: 'https://bucket-juan.s3.amazonaws.com/img/translate.png' },
        
        
    ];

    const serviceList = document.getElementById('serviceList');
    const searchService = document.getElementById('searchService');
    const referenceArea = document.querySelector('.reference-area');
    const noteTitle = document.getElementById('noteTitle');
    const notes = document.getElementById('notes');
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');
    const pageNumber = document.getElementById('pageNumber');
    let currentPage = 1;
    let pages = {};

    function displayServices(servicesToDisplay) {
        serviceList.innerHTML = '';
        servicesToDisplay.forEach(service => {
            const serviceItem = document.createElement('div');
            serviceItem.classList.add('service-item');
            serviceItem.innerHTML = `<img src="${service.icon}" alt="${service.name}" draggable="true"><span>${service.name}</span>`;
            
            serviceItem.querySelector('img').addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', service.icon);
                e.target.classList.add('dragging');
            });

            serviceItem.querySelector('img').addEventListener('dragend', (e) => {
                e.target.classList.remove('dragging');
            });

            serviceList.appendChild(serviceItem);
        });
    }

    function filterServices() {
        const query = searchService.value.toLowerCase();
        const filteredServices = services.filter(service => service.name.toLowerCase().includes(query));
        displayServices(filteredServices);
    }

    searchService.addEventListener('input', filterServices);

    referenceArea.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    referenceArea.addEventListener('drop', (e) => {
        e.preventDefault();
        const iconSrc = e.dataTransfer.getData('text/plain');
        const imgContainer = document.createElement('div');
        imgContainer.style.position = 'relative';
        
        const img = document.createElement('img');
        img.src = iconSrc;
        img.classList.add('reference-icon');
        imgContainer.appendChild(img);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = '&times;';
        deleteButton.addEventListener('click', () => {
            imgContainer.remove();
        });
        imgContainer.appendChild(deleteButton);

        referenceArea.appendChild(imgContainer);
    });

    prevPage.addEventListener('click', () => {
        if (currentPage > 1) {
            saveCurrentPage();
            currentPage--;
            pageNumber.textContent = `Page ${currentPage}`;
            loadCurrentPage();
        }
    });

    nextPage.addEventListener('click', () => {
        saveCurrentPage();
        currentPage++;
        pageNumber.textContent = `Page ${currentPage}`;
        loadCurrentPage();
    });

    function saveCurrentPage() {
        const pageContent = {
            title: noteTitle.textContent,
            notes: notes.value,
            references: Array.from(referenceArea.querySelectorAll('img')).map(img => img.src)
        };
        pages[currentPage] = pageContent;
    }

    function loadCurrentPage() {
        if (pages[currentPage]) {
            const pageContent = pages[currentPage];
            noteTitle.textContent = pageContent.title;
            notes.value = pageContent.notes;
            referenceArea.innerHTML = '';
            pageContent.references.forEach(src => {
                const imgContainer = document.createElement('div');
                imgContainer.style.position = 'relative';
                
                const img = document.createElement('img');
                img.src = src;
                img.classList.add('reference-icon');
                imgContainer.appendChild(img);

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-button');
                deleteButton.innerHTML = '&times;';
                deleteButton.addEventListener('click', () => {
                    imgContainer.remove();
                });
                imgContainer.appendChild(deleteButton);

                referenceArea.appendChild(imgContainer);
            });
        } else {
            noteTitle.textContent = 'Title';
            notes.value = '';
            referenceArea.innerHTML = '';
        }
    }

    displayServices(services);
});


// esto es para el efecto de maquina de escribir

// Función para el efecto de máquina de escribir
function typeWriterEffect(element, text, delay) {
    let i = 0;
    const interval = setInterval(function() {
        element.textContent += text.charAt(i);
        i++;
        if (i > text.length) {
            clearInterval(interval);
        }
    }, delay);
}

// Obtener el elemento h1
const heading = document.getElementById('typewriter-text');

// Texto que quieres que se escriba
const text = heading.textContent;

// Limpiar el texto original
heading.textContent = '';

// Llamar a la función para empezar el efecto
typeWriterEffect(heading, text, 100); // 100 es el retraso entre cada caracter, puedes ajustarlo



// pagina de inicio


const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carousel = document.querySelector('.carousel');
let scrollAmount = 0;

prevButton.addEventListener('click', () => {
    carousel.scrollTo({
        top: 0,
        left: (scrollAmount -= 150),
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    carousel.scrollTo({
        top: 0,
        left: (scrollAmount += 150),
        behavior: 'smooth'
    });
});
 
// Carrusel

$(document).ready(function() {
  var ripple_wrap = $('.ripple-wrap'),
      rippler = $('.ripple'),
      finish = false,
      monitor = function(el) {
        var computed = window.getComputedStyle(el, null),
            borderwidth = parseFloat(computed.getPropertyValue('border-left-width'));
        if (!finish && borderwidth >= 1500) {
          el.style.WebkitAnimationPlayState = "paused";
          el.style.animationPlayState = "paused";
          swapContent();
        }
        if (finish) {
          el.style.WebkitAnimationPlayState = "running";
          el.style.animationPlayState = "running";
          return;
        } else {
          window.requestAnimationFrame(function() {monitor(el)});
        }
      };
  
  storedcontent = $('#content-2').html();
  $('#content-2').remove();
  
  rippler.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function(e){
    ripple_wrap.removeClass('goripple');
  });

  $('body').on('click', 'a', function(e) {
    rippler.css('left', e.clientX + 'px');
    rippler.css('top', e.clientY + 'px');
    e.preventDefault();
    finish = false;
    ripple_wrap.addClass('goripple');
    window.requestAnimationFrame(function() {monitor(rippler[0])});
    
    
  });
  
  
 
  function swapContent() {
      var newcontent = $('#content-area').html();
      $('#content-area').html(storedcontent);
      storedcontent = newcontent;
      // do some Ajax, put it in the DOM and then set this to true
      setTimeout(function() {
        finish = true;
      },10);
  }
  
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalImage = document.getElementById("modal-image");
    const closeBtn = document.querySelector(".close");

    const images = document.querySelectorAll('.images-link');

    images.forEach(image => {
        image.addEventListener('click', (e) => {
            e.preventDefault();
            const title = image.getAttribute('data-title');
            const description = image.getAttribute('data-description');
            const imgSrc = image.getAttribute('data-img-src');

            modalTitle.innerText = title;
            modalDescription.innerText = description;
            modalImage.src = imgSrc;

            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


// pdf

