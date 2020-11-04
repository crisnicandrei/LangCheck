const franc = require('franc')
const langs = require('langs')

const text = process.argv[2] || "Hello, sir!"
const languageCode = franc(text)
if (languageCode == 'und') {
    console.log("We could not find your language, sorry!")
} else {
    const language = langs.where("3", languageCode)
    console.log(franc(text))
    console.log(language.name)
}