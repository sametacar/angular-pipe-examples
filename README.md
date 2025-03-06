# Angular Pipe Examples

This project is a comprehensive example demonstrating how pipes are used in Angular. It showcases various Angular pipes using characters from "The Lord of the Rings".

![Angular Pipe Examples](https://angular.io/assets/images/logos/angular/angular.svg)

## 🚀 Features

- **String Pipes**: uppercase, lowercase, titlecase
- **Number Pipes**: number, decimal, percent, currency
- **Date Pipes**: date (various formats)
- **Object & Array Pipes**: json, slice, keyvalue
- **Async Pipe**: Working with Observables
- **Chaining Pipes**: Using multiple pipes together
- **Boolean Pipes**: Custom boolean value formatting
- **Custom Pipes**: RaceIcon and RingBearer custom pipes
- **Pure vs Impure Pipes**: Interactive demo showing differences

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v16 or higher)

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/sametacar/angular-pipe-examples.git

# Navigate to the project directory
cd angular-pipe-examples

# Install dependencies
npm install

# Start the development server
ng serve
```

Open your browser and navigate to `http://localhost:4200/` to see the application.

## 📚 Pipe Examples

### String Pipes

- **uppercase**: Converts text to uppercase
- **lowercase**: Converts text to lowercase
- **titlecase**: Capitalizes the first letter of each word

### Date Pipes

- **date**: Displays dates in various formats (short, medium, long, custom)

### Number Pipes

- **number**: Formats numbers
- **decimal**: Formats decimal numbers
- **percent**: Displays numbers as percentages
- **currency**: Currency formatting

### Object & Array Pipes

- **json**: Displays objects in JSON format
- **slice**: Slices arrays
- **keyvalue**: Displays objects as key-value pairs

### Async Pipe

- Working with Observable data

### Pure vs Impure Pipes

- Pure pipes only execute when the input reference changes
- Impure pipes execute on every change detection cycle

## 🎨 Custom Pipes

This project includes two custom pipes:

1. **RingBearer Pipe**: Shows whether a character is a ring bearer or not
2. **RaceIcon Pipe**: Displays an icon based on the character's race

## 🧪 Pure vs Impure Pipe Demo

The project includes an interactive demo showing the difference between pure and impure pipes. This demo demonstrates:

- Pure pipes only execute when the input reference changes
- Impure pipes execute on every change detection cycle
- Pure pipes don't update when object content changes but the reference remains the same

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

This project was created to showcase Angular's powerful pipe system. If you'd like to contribute, please submit a pull request or open an issue.
