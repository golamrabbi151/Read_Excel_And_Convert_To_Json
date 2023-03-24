const reader = require('xlsx')

const file = reader.readFile('./example.xlsx')
const sheet = file.SheetNames

const data = []
for (let index = 0; index < sheet.length; index++) {
    const currentSheet = sheet[index];
    const temp = reader.utils.sheet_to_json(file.Sheets[currentSheet] )
    temp.forEach(res => {
        data.push(res)
    })
    
}

console.log("temp ", data);