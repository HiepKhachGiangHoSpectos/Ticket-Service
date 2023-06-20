const fs = require('fs');
const path = require('path');
const customerName = process.argv[2]; // Lấy giá trị tham số dòng lệnh

if (!customerName) {
    console.log('Please provide the customer name as a command-line argument.');
    process.exit(1);
}

const generatedFiles = [
    `src/tests/customers/${customerName}/ticketController.test.ts`,
    `src/tests/customers/${customerName}/ticketService.test.ts`,
    `src/services/customers/${customerName}/ticketService.ts`,
    `src/controllers/customers/${customerName}/ticketController.ts`,
    `src/models/customers/${customerName}/ticketModel.ts`,
    `src/routes/customers/${customerName}/ticketRouter.ts`,
    // Thêm các tệp khác cần xóa vào đây
];


function deleteFiles(files: string[]) {
    for (const file of files) {
        const filePath = path.resolve(file);
        if (fs.existsSync(filePath)) {
            if (fs.statSync(filePath).isFile()) {
                fs.unlinkSync(filePath);
                console.log(`Đã xóa tệp tin ${file} thành công!`);
            } else {
                deleteFolderRecursive(filePath);
                console.log(`Đã xóa thư mục ${file} thành công!`);
            }
        } else {
            console.log(`Không tìm thấy ${file}`);
        }
    }

}

function deleteFolderRecursive(directory: string) {
    if (fs.existsSync(directory)) {
        fs.readdirSync(directory).forEach((file: string) => {
            const filePath = path.join(directory, file);
            if (fs.lstatSync(filePath).isDirectory()) {
                deleteFolderRecursive(filePath);
            } else {
                fs.unlinkSync(filePath);
            }
        });
        console.log('-directory-----', directory);
        fs.rmdirSync(directory);
    }
}

deleteFiles(generatedFiles);
