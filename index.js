const site = document.querySelector('#site')
const md = fetch("README.md").then((response)=>response.text()).then(text=>{
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    site.innerHTML=html
})