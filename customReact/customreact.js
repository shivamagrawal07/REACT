/*
function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendchild(domElement)  
}*/

    const domElement = document.createElement(reactElemnent.type)
    domElement.innerHTML = reactElemnent.children
    for (const prop in reactElemnent.props) {
        domElement.setAttribute(Prop, reactElemnent.props[prop])
    }
    mainContainer.appendChild(domElement)
const reactElemnent ={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelectorAll('#root')

customRender(reactElemnent, mainContainer)