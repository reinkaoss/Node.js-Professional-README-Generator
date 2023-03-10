function generateMarkdown(data) {


  
  return `\n 
  \n # ${data.title.charAt(0).toUpperCase()+ data.title.slice(1)} \n

  \n ## Overview
  ${data.description} \n 
  ## Table of Contents \n 
- [Installation](#Installation)  
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation} \n

## Usage
${data.usage} \n

## License 
Copyright <2023> ${data.name} \n 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files ('the Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. \n
THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributors
${data.contributors} \n

## Tests
${data.test} \n

## Questions
My name is ${data.name}. If you have any questions about this project, please contact me via email at ${data.email} or GitHub [here](https://github.com/${data.git}).


`;
}

module.exports = generateMarkdown;

// ${getLicense = () => {
//   for (const license of data) {
//     if(data.license === "MIT"){
//       data.license = `
