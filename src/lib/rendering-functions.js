import React from "react";

function commaSeparateList(strings) {
    const commaSeparatedText = strings.map((note) => {
        if (strings.indexOf(note) === strings.length - 1) {
            return note
        }
        return `${note}, `
    })
    return (<p>{commaSeparatedText}</p>)
}

export {
    commaSeparateList
}
