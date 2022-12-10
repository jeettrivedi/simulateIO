# Simulate I/O

Simulate web I/O controller devices with digital inputs, analog inputs and relays.

## Getting Started

### Dependencies

- `Node.js`
- `sqlite3`

### Installation

#### Linux (Ubuntu)

Install the dependencies if you don't have them installed with
```
sudo apt install sqlite3 -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```
Next install all the node dependencies with
```
npm install -D
```
Lastly initalize the database and environment with
```
npm run setup
```

### Usage
Run the server with
```
npm run start
```

### Testing
Install the testing dependencies if you have not already. The test can be run with
```
npm run build
npm test
```

## License

[Apache License](https://choosealicense.com/licenses/apache-2.0/)