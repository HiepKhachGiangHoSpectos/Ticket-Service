const fs = require('fs');
const path = require('path');

// Lấy tên khách hàng từ tham số dòng lệnh
const customerName = process.argv[2];

const folderPaths = [
    path.join(__dirname, 'src', 'tests', 'customers', customerName),
    path.join(__dirname, 'src', 'services', 'customers', customerName),
    path.join(__dirname, 'src', 'controllers', 'customers', customerName),
    path.join(__dirname, 'src', 'routes', 'customers', customerName),
    path.join(__dirname, 'src', 'models', 'customers', customerName),
];

// Kiểm tra và tạo thư mục nếu chưa tồn tại
folderPaths.forEach((folderPath) => {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, {recursive: true});
        console.log(`Created folder: ${folderPath}`);
    }
});

// Đường dẫn và nội dung mẫu cho các tệp
const templateFiles = [
    {template: 'test.template.ts', destination: `src/tests/customers/${customerName}/ticketController.test.ts`},
    {template: 'router.template.ts', destination: `src/routes/customers/${customerName}/ticketRouter.ts`},
    {template: 'model.template.ts', destination: `src/models/customers/${customerName}/ticketModel.ts`},
    {template: 'service.template.ts', destination: `src/services/customers/${customerName}/ticketService.ts`},
    {template: 'controller.template.ts', destination: `src/controllers/customers/${customerName}/ticketController.ts`},
];

// Đọc nội dung từ tệp mẫu
function readTemplateFile(templateFile) {
    const templatePath = path.join(__dirname, 'templates-generate', templateFile);
    return fs.readFileSync(templatePath, 'utf-8');
}

// Thay thế tên khách hàng trong nội dung mẫu
function replaceCustomerName(templateContent) {
    return templateContent.replace(/{{customerName}}/g, customerName);
}

// Tạo tệp mới từ tệp mẫu đã được thay thế
function createFileFromTemplate(templateFile, destination) {
    const templateContent = readTemplateFile(templateFile);
    const replacedContent = replaceCustomerName(templateContent);
    fs.writeFileSync(destination, replacedContent);
    console.log(`Created file: ${destination}`);
}

// Tạo các tệp từ tệp mẫu cho khách hàng mới
function generateFilesForCustomer() {
    templateFiles.forEach((file) => {
        createFileFromTemplate(file.template, file.destination);
    });
}

// Chạy kịch bản
generateFilesForCustomer();
