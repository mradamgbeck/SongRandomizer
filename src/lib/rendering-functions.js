import React from "react";

function commaSeparateList(strings) {
    const commaSeparatedText = strings.map((string) => {
        if (strings.indexOf(string) === strings.length - 1) {
            return string
        }
        return `${string}, `
    })
    return (<p>{commaSeparatedText}</p>)
}

function newLineSeparateList(strings) {
    const newLineSeparatedText = strings.map((string) => {
        return <p>{string}</p>
    })
    return (<p>{newLineSeparatedText}</p>)
}

export {
    commaSeparateList,
    newLineSeparateList
}
