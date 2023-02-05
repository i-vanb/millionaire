export const replaceQuotes = (text:string):string => {
    return text.replace(/&#039;|&quot;|&ldquo;|&rdquo;/g, function(match) {
        return match === "&#039;" ? "'" : '"';
    });
}
