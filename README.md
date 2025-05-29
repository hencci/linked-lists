# 📚 Linked List (ES6 Modules)

A simple implementation of a singly linked list in JavaScript using ES6 modules and Node.js (v22 or later). Each node in the list holds a value and a pointer to the next node.

## 📦 Features

- append(value) – Add a node to the end
- prepend(value) – Add a node to the start
- size() – Get total number of nodes
- head() – Get the first node
- tail() – Get the last node
- at(index) – Get node at specific index
- pop() – Remove the last node
- contains(value) – Check if value exists
- find(value) – Get index of a value
- toString() – Print the list as a string
- insertAt(value, index) – Insert a value at a specific position
- removeAt(index) – Remove node at specific position

## 🗂️ Project Structure

linked-lists/<br>
├── package.json<br>
└── src/<br>
&nbsp;&nbsp;&nbsp;    ├── node.js<br>
&nbsp;&nbsp;&nbsp;    ├── linkedlist.js<br>
&nbsp;&nbsp;&nbsp;    └── main.js

## 🚀 Getting Started

1. Clone the repository
```js
git clone https://github.com/hencci/linked-lists.git
cd linked-list
```
2. Initialize and install dependencies (none required, just setup)
```js
npm init -y
```
3. Configure package.json
In package.json, ensure the following:
```js
"type": "module",
"scripts": {
  "start": "node src/main.js"
}
```
4. Run the project
```js
npm start
```
You should see:
```js
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```

## 💡 Contributions

Feel free to fork this repository and improve the project! 🚀
PRs are welcome! 😊

## Contact

Created by [Henry Moses](https://github.com/hencci)
Feel free to reach out if you have any questions