# CheckTypo :book:
Search through your web content and find any overlooked typos!

## 🚀 Getting started
```
npm install checktypo --save
```

## 🔍 How to use it:
Using checktypo is super-simple.

```
checktypo("https://www.lookfortypos.com")
```

**checktypo** is a function that accepts a string url of it's target website

Once you run the function above, checktypo returns an array of all the 'possible' typos on your page. 

## 🔹 Dependencies
Built with: Nightmare.js + typo-js

## 🔸 Some Issues:
+ Not all words are added into the typo-js dictionary, however, the aim is to add more words to this library moving on.
+ You can only run one website. In the future, checktypo will allow you to search multiple pages better.

### 💡 Future-Ideas:
+ add custom argument cleaning using a config.json that includes
    - Social Media Channels
    - Additional words that aren't included in typo-js
    - Any additional abbreviations that are acceptable
    - Remove duplicates from result array
+ Spin up a static html in the browser that contains the typos highlighted in red, along with suggested fixes at the top (or on hover)
+ Use promises instead of callbacks to allow user to check typos for multiple websites at once.


### 💻 Dev Ideas:
+ Include linting
+ Add `npm-run-all --parallel test lint` (to run both testing and linting pre-commit) 
+ Add `prettier` to standardize JS.
