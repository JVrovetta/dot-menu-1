// Author: JhonyRovetta
function ActiveBox()
{
    const elementBox = document.getElementById('box')
    const elementContainer = document.getElementById('container')
    if(elementBox.getAttribute('class') == 'box')
    {
        elementBox.setAttribute('class', 'box active')
        elementContainer.setAttribute('class', 'container active')
    }
    else if(elementBox.getAttribute('class') == 'box active')
    {
        elementBox.setAttribute('class', 'box')
        elementContainer.setAttribute('class', 'container')
    } 
}

function EnableIcon(id)
{
    const elementBox = document.getElementById('box')
    const elementIcon = document.getElementById(id)
    if(elementIcon.getAttribute('class') == 'icon' && elementBox.getAttribute('class') == 'box active')
    {
        elementIcon.setAttribute('class', 'icon enable')
    }
    else if(elementIcon.getAttribute('class') == 'icon enable' && elementBox.getAttribute('class') == 'box active')
    {
        elementIcon.setAttribute('class', 'icon')
    } 
}