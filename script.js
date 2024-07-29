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
        { id: 1, name: 'AWS Auto Scaling', icon: 'img/autoscalling.png' },
        { id: 2, name: 'AWS Batch', icon: 'img/batch.png' },
        { id: 3, name: 'Amazon EC2', icon: 'img/ec2.png' },
        { id: 4, name: 'AWS Elastic Beanstalk', icon: 'img/elastic-beanstalk.svg' },
        { id: 5, name: 'Amazon Lambda', icon: 'img/lambda.png' },
        { id: 6, name: 'Amazon Lightsail', icon: 'img/lightsail.jpg' },
        { id: 7, name: 'AWS Outposts', icon: 'img/outposts.jpeg' },
        { id: 8, name: 'AWS Backup', icon: 'img/backup.jpg' },
        { id: 9, name: 'Amazon EBS', icon: 'img/ebs.jpeg' },
        { id: 10, name: 'Amazon EFS', icon: 'img/efs.svg' },
        { id: 11, name: 'Amazon FSx', icon: 'img/fsx.png' },
        { id: 12, name: 'Amazon S3', icon: 'img/s3.png' },
        { id: 13, name: 'AWS Storage Gateway', icon: 'img/storage-gateway.jpeg' },
        { id: 14, name: 'Amazon API Gateway', icon: 'img/api-gateway.png' },
        { id: 15, name: 'Amazon CloudFront', icon: 'img/cloudfront.png' },
        { id: 16, name: 'AWS Direct Connect', icon: 'img/direct-connect.jpeg' },
        { id: 17, name: 'AWS Global Accelerator', icon: 'img/global-accelerator.jpeg' },
        { id: 18, name: 'Amazon Route 53', icon: 'img/route53.png' },
        { id: 19, name: 'Amazon VPC', icon: 'img/vpc.png' },
        { id: 20, name: 'AWS VPN', icon: 'img/vpn.png' },
        { id: 21, name: 'AWS Artifact', icon: 'img/artifact.WEBP' },
        { id: 22, name: 'AWS Certificate Manager (ACM)', icon: 'img/certificate-manager.png' },
        { id: 23, name: 'AWS CloudHSM', icon: 'img/cloudHSM.jpeg' },
        { id: 24, name: 'Amazon Cognito', icon: 'img/cognito.png' },
        { id: 25, name: 'Amazon GuardDuty', icon: 'img/guarduty.jpeg' },
        { id: 26, name: 'AWS IAM', icon: 'img/IAM.webp' },
        { id: 27, name: 'Amazon Inspector', icon: 'img/inspector.webp' },
        { id: 28, name: 'AWS Key Management Service (KMS)', icon: 'img/kms.png' },
        { id: 29, name: 'Amazon Macie', icon: 'img/macie.png' },
        { id: 30, name: 'AWS Secrets Manager', icon: 'img/secrets-manager.svg' },
        { id: 31, name: 'AWS Security Hub', icon: 'img/security-hub.jpg' },
        { id: 32, name: 'AWS Shield', icon: 'img/shield.webp' },
        { id: 33, name: 'AWS WAF', icon: 'img/waf.webp' },
        { id: 34, name: 'Amazon ECR', icon: 'img/ecr.png' },
        { id: 35, name: 'Amazon ECS', icon: 'img/ecs.png' },
        { id: 36, name: 'Amazon EKS', icon: 'img/eks.jpeg' },
        { id: 37, name: 'AWS Fargate', icon: 'img/fargate.png' },
        { id: 38, name: 'Amazon Aurora', icon: 'img/aurora.jpeg' },
        { id: 39, name: 'Amazon RDS', icon: 'img/RDS.jpeg' },
        { id: 40, name: 'Amazon DynamoDB', icon: 'img/dynamodb.svg' },
        { id: 41, name: 'Amazon MemoryDB for Redis', icon: 'img/memorydb-for-redis.png' },
        { id: 42, name: 'Amazon Neptune', icon: 'img/neptune.png' },
        { id: 43, name: 'Amazon ElastiCache', icon: 'img/elasticache.png' },
        { id: 44, name: 'Amazon Athena', icon: 'img/athena.png' },
        { id: 45, name: 'AWS Data Exchange', icon: 'img/data-exchange.jpeg' },
        { id: 46, name: 'Amazon EMR', icon: 'img/emr.png' },
        { id: 47, name: 'AWS Glue', icon: 'img/glue.webp' },
        { id: 48, name: 'Amazon Kinesis', icon: 'img/kinesis.png' },
        { id: 49, name: 'Amazon MSK', icon: 'img/msk.png' },
        { id: 50, name: 'Amazon OpenSearch Service', icon: 'img/opensearch.png' },
        { id: 51, name: 'Amazon QuickSight', icon: 'img/quicksight.png' },
        { id: 52, name: 'Amazon Redshift', icon: 'img/redshift.webp' },
        { id: 53, name: 'Amazon EventBridge', icon: 'img/eventbridge.png' },
        { id: 54, name: 'Amazon SNS', icon: 'img/sns.jpeg' },
        { id: 55, name: 'Amazon SQS', icon: 'img/sqs.svg' },
        { id: 56, name: 'AWS Step Functions', icon: 'img/step-functions.svg' },
        { id: 57, name: 'Amazon SES', icon: 'img/ses.png' },
        { id: 58, name: 'AWS Budgets', icon: 'img/budgets.png' },
        { id: 59, name: 'AWS Cost and Usage Report', icon: 'img/cost-and-usage-report.webp' },
        { id: 60, name: 'AWS Cost Explorer', icon: 'img/cost-explorer.webp' },
        { id: 61, name: 'AWS Marketplace', icon: 'img/marketplace.png' },
        { id: 62, name: 'AWS Database Migration Service (AWS DMS)', icon: 'img/dms.png' },
        { id: 63, name: 'AWS Migration Hub', icon: 'img/migration-hub.jpeg' },
        { id: 64, name: 'AWS Snowball', icon: 'img/snowball.jpeg' },
        { id: 65, name: 'AWS Snowball Edge', icon: 'img/snowball-edge.png' },
        { id: 66, name: 'AWS Snowmobile', icon: 'img/snowmobile.png' },
        { id: 67, name: 'AWS Transfer Family', icon: 'img/transfer-family.png' },
        { id: 68, name: 'AWS CloudFormation', icon: 'img/cloudformation.png' },
        { id: 69, name: 'AWS CloudTrail', icon: 'img/cloudtrail.svg' },
        { id: 70, name: 'Amazon CloudWatch', icon: 'img/cloudwatch.png' },
        { id: 71, name: 'AWS Config', icon: 'img/config.jpeg' },
        { id: 72, name: 'AWS Control Tower', icon: 'img/control-tower.jpeg' },
        { id: 73, name: 'AWS Personal Health Dashboard', icon: 'img/healh-dashboard.png' },
        { id: 74, name: 'AWS Management Console', icon: 'img/management-console.png' },
        { id: 75, name: 'AWS Organizations', icon: 'img/organizations.webp' },
        { id: 76, name: 'AWS Systems Manager', icon: 'img/systems-manager.jpeg' },
        { id: 77, name: 'AWS Trusted Advisor', icon: 'img/trusted-advisor.png' },
        { id: 78, name: 'AWS Well-Architected Tool', icon: 'img/well-architecture-tool.png' },
        { id: 79, name: 'AWS AppConfig', icon: 'img/appconfig.jpeg' },
        { id: 80, name: 'AWS CLI', icon: 'img/cli.png' },
        { id: 81, name: 'AWS Cloud9', icon: 'img/cloud9.jpeg' },
        { id: 82, name: 'AWS CloudShell', icon: 'img/cloudshell.jpeg' },
        { id: 83, name: 'AWS CodeBuild', icon: 'img/codebuild.png' },
        { id: 84, name: 'AWS CodeCommit', icon: 'img/codecommit.png' },
        { id: 85, name: 'AWS CodeDeploy', icon: 'img/codedeploy.webp' },
        { id: 86, name: 'AWS CodePipeline', icon: 'img/codepipeline.png' },
        { id: 87, name: 'AWS X-Ray', icon: 'img/x-ray.png' },
        { id: 88, name: 'AWS Amplify', icon: 'img/amplify.png' },
        { id: 89, name: 'AWS AppSync', icon: 'img/appsync.png' },
        { id: 90, name: 'Amazon Comprehend', icon: 'img/comprehend.png' },
        { id: 91, name: 'Amazon Kendra', icon: 'img/kendra.png' },
        { id: 92, name: 'Amazon Lex', icon: 'img/lex.png' },
        { id: 93, name: 'Amazon Polly', icon: 'img/polly.png' },
        { id: 94, name: 'Amazon Rekognition', icon: 'img/rekognition.png' },
        { id: 95, name: 'Amazon SageMaker', icon: 'img/sagemaker.jpeg' },
        { id: 96, name: 'Amazon Textract', icon: 'img/textract.png' },
        { id: 97, name: 'Amazon Transcribe', icon: 'img/transcribe.png' },
        { id: 98, name: 'Amazon Translate', icon: 'img/translate.png' },
        
        
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

