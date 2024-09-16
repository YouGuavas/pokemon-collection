const grabElement = (elementId) => {
    //Grab element by id if document exists
    if (typeof document !== 'undefined') {
        return document.getElementById(elementId);
    }
}

const create = (elementType) => {
    if (typeof document !== 'undefined') {
        const newElement = document.createElement(elementType);
        return newElement;
    }
    return;
}

const addToParent = (parent, child) => {
    //Append child element to parent element
    parent.append(child);
}

export {
    create, grabElement, addToParent
};