# text-to-number-util

## Description

The `text-to-number-util` library is a lightweight utility for converting textual representations of numbers into numeric values. It supports complex number phrases, including currency formats and fractional values, making it ideal for parsing user inputs, voice transcriptions, or formatted text.
Whether you need to convert "mil reais e cinquenta centavos" into 1000.5 or "quarenta e cinco centavos" into 0.45, this library simplifies the process.

## Installation

To install the library in your project, you can use npm. Run the following command in the terminal:

```bash
npm install text-to-number-util
```

## Run tests

```bash
npm run test:watch
```

## Basic Usage

Here is a basic example of how to use the library:

```typescript
import { textToNumberUtil } from 'text-to-number-util';

// Convert simple text to number
console.log(textToNumberUtil('quatorze reais')); 
// Output: 14

// Parse numbers with fractions
console.log(textToNumberUtil('dois reais e cinquenta centavos')); 
// Output: 2.5

// Handle larger numbers
console.log(textToNumberUtil('um milhão de reais')); 
// Output: 1000000

// Ignore unrelated text
console.log(textToNumberUtil('cem reais para pagar o almoço')); 
// Output: 100
```

## Contributing 

I welcome contributions from developers who are passionate about improving libraries, and text-to-number-util also could be improved to support other languages. If you have ideas for new features, want to fix a bug, or enhance the documentation, It would be amazing!


- Fork the Repository
```bash
git clone https://github.com/andredrumond1995/text-to-number-util.git
```

- Create a Feature Branch
```bash
git checkout -b feature/my-awesome-feature
```

- Make Changes
Implement your improvements or fixes. Don’t forget to write tests

- Run Tests
```bash
npm test
```


## License 

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

I hope the library proves useful in your projects! If you have any questions or issues, feel free to reach out.

### Author
- Andre Drumond das Chagas
- LinkedIn: [linkedin.com/in/andre-drumond](https://br.linkedin.com/in/andre-drumond)
- Github: [https://github.com/andredrumond1995](https://github.com/andredrumond1995)
