# CheckTypo :book:
Search through your web content and find any overlooked typos!

## 🚀 Getting started
`
npm install checktypo --save
`

## 🔍 How to use it:
Using checktypo is super-simple.

`
checktypo(*website url goes here*)
`

where **checktypo** is the name of the variable assigned to the required package.

## ❓ What you can expect:

Once you run the function above, checktypo returns an array of all the 'possible' typos on your page

## 🔹 Dependencies
Built with: Nightmare.js + typo-js

## 🔸 Some Issues:
+ Not all words are added into the typo-js dictionary, however, the aim is to add more words to this library moving on.

### 💡 Future-Ideas:
+ add custom argument cleaning using a config.json that includes
    - Social Media Channels
    - Additional words that aren't included in typo-js
    - Any additional abbreviations that are acceptable
    - Remove duplicates from result array
+ Spin up a static html in the browser that contains the typos highlighted in red, along with suggested fixes at the top (or on hover)
