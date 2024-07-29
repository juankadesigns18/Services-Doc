document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-details');
    const closeBtn = document.querySelector('.close');

    // Función para abrir el modal
    function openModal(imageSrc, title, description) {
        document.getElementById('modal-image').src = imageSrc;
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-description').textContent = description;
        modal.classList.remove('hidden');
        document.body.classList.add('no-scroll');
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }

    // Evento de clic en el botón de cierre
    closeBtn.addEventListener('click', closeModal);

    // Eventos de clic en las imágenes (ejemplo)
    document.querySelectorAll('.images-link-2').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const img = this.querySelector('img').src;
            const title = this.nextElementSibling.textContent;
            const description = 'Descripción del servicio'; // Puedes cambiar esto según tus necesidades
            openModal(img, title, description);
        });
    });
});

document.getElementById('toggleView').addEventListener('click', function() {
    const templates = document.querySelectorAll('.template');
    templates.forEach(template => {
        template.classList.toggle('reduced');
    });
    this.textContent = this.textContent === 'Vista Reducida' ? 'Vista Normal' : 'Vista Reducida';
});





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
        { id: 64, name: 'AWS Application Migration Service', icon: 'img/application-migration-service.png' },
        { id: 65, name: 'AWS AppConfig', icon: 'img/appconfig.jpeg' },
        { id: 66, name: 'AWS App Runner', icon: 'img/apprunner.png' },
        { id: 67, name: 'AWS CloudShell', icon: 'img/cloudshell.png' },
        { id: 68, name: 'AWS Control Tower', icon: 'img/control-tower.png' },
        { id: 69, name: 'AWS Proton', icon: 'img/proton.png' },
        { id: 70, name: 'AWS Systems Manager', icon: 'img/systems-manager.png' },
        { id: 71, name: 'AWS Trusted Advisor', icon: 'img/trusted-advisor.png' },
        { id: 72, name: 'Amazon DevOps Guru', icon: 'img/devops-guru.png' },
        { id: 73, name: 'Amazon CodeArtifact', icon: 'img/codeartifact.png' },
        { id: 74, name: 'Amazon CodeBuild', icon: 'img/codebuild.png' },
        { id: 75, name: 'Amazon CodeCommit', icon: 'img/codecommit.png' },
        { id: 76, name: 'Amazon CodeDeploy', icon: 'img/codedeploy.png' },
        { id: 77, name: 'Amazon CodePipeline', icon: 'img/codepipeline.png' },
        { id: 78, name: 'Amazon CloudWatch', icon: 'img/cloudwatch.png' },
        { id: 79, name: 'AWS Auto Scaling', icon: 'img/autoscalling.png' },
        { id: 80, name: 'AWS Backup', icon: 'img/backup.jpg' },
        { id: 81, name: 'Amazon CloudFront', icon: 'img/cloudfront.png' },
        { id: 82, name: 'AWS CodeDeploy', icon: 'img/codedeploy.png' },
        { id: 83, name: 'AWS CodePipeline', icon: 'img/codepipeline.png' },
        { id: 84, name: 'AWS CodeStar', icon: 'img/codestar.png' },
        { id: 85, name: 'AWS Cloud9', icon: 'img/cloud9.png' },
        { id: 86, name: 'AWS CloudFormation', icon: 'img/cloudformation.png' },
        { id: 87, name: 'AWS CloudTrail', icon: 'img/cloudtrail.png' },
        { id: 88, name: 'AWS Control Tower', icon: 'img/control-tower.png' },
        { id: 89, name: 'AWS DMS', icon: 'img/dms.png' },
        { id: 90, name: 'AWS Direct Connect', icon: 'img/direct-connect.jpeg' },
        { id: 91, name: 'AWS Firewall Manager', icon: 'img/firewall-manager.png' },
        { id: 92, name: 'AWS Glue', icon: 'img/glue.webp' },
        { id: 93, name: 'AWS Ground Station', icon: 'img/ground-station.png' },
        { id: 94, name: 'AWS IoT', icon: 'img/iot.png' },
        { id: 95, name: 'AWS Lambda', icon: 'img/lambda.png' },
        { id: 96, name: 'AWS Outposts', icon: 'img/outposts.jpeg' },
        { id: 97, name: 'AWS RDS', icon: 'img/rds.png' },
        { id: 98, name: 'Amazon Translate', icon: 'img/translate.png' },
    ];

    const serviceList = document.getElementById('serviceList');
    const searchService = document.getElementById('searchService');
    const referenceArea = document.querySelector('.reference-area');

    function displayServices(servicesToDisplay) {
        serviceList.innerHTML = '';
        servicesToDisplay.forEach(service => {
            const serviceItem = document.createElement('div');
            serviceItem.classList.add('service-item');
            serviceItem.innerHTML = `<img src="${service.icon}" alt="${service.name}" draggable="true"><span>${service.name}</span>`;
            
            serviceItem.querySelector('img').addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', service.icon);
                e.dataTransfer.effectAllowed = 'move';
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
        imgContainer.style.position = 'absolute';
        imgContainer.style.left = `${e.clientX - referenceArea.offsetLeft}px`;
        imgContainer.style.top = `${e.clientY - referenceArea.offsetTop}px`;
        imgContainer.style.cursor = 'move';
        imgContainer.classList.add('draggable');

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

        const resizeHandle = document.createElement('div');
        resizeHandle.classList.add('resize-handle');
        imgContainer.appendChild(resizeHandle);

        // Añadir la funcionalidad de arrastrar y mover las imágenes dentro del área de referencia
        imgContainer.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('resize-handle')) {
                return; // Si se está haciendo clic en el handle de redimensionamiento, no iniciar el arrastre
            }

            e.preventDefault();
            imgContainer.classList.add('dragging');
            const shiftX = e.clientX - imgContainer.getBoundingClientRect().left;
            const shiftY = e.clientY - imgContainer.getBoundingClientRect().top;

            function moveAt(clientX, clientY) {
                imgContainer.style.left = `${clientX - shiftX}px`;
                imgContainer.style.top = `${clientY - shiftY}px`;
            }

            function onMouseMove(event) {
                moveAt(event.clientX, event.clientY);
            }

            document.addEventListener('mousemove', onMouseMove);

            document.addEventListener('mouseup', () => {
                imgContainer.classList.remove('dragging');
                document.removeEventListener('mousemove', onMouseMove);
            }, { once: true });
        });

        // Añadir la funcionalidad de redimensionar las imágenes
        resizeHandle.addEventListener('mousedown', (e) => {
            e.preventDefault();

            function resizeAt(clientX, clientY) {
                const newWidth = clientX - imgContainer.getBoundingClientRect().left;
                const newHeight = clientY - imgContainer.getBoundingClientRect().top;
                img.style.width = `${newWidth}px`;
                img.style.height = 'auto'; // Mantener la proporción
            }

            function onMouseMove(event) {
                resizeAt(event.clientX, event.clientY);
            }

            document.addEventListener('mousemove', onMouseMove);

            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', onMouseMove);
            }, { once: true });
        });

        referenceArea.appendChild(imgContainer);
    });

    displayServices(services);
});