const core = require('@actions/core')

function getLastString(s) {
    const method = arguments.callee.name;
    if (s && s.length > 0 && typeof s === "string" && s.indexOf("/") != -1) {
        let auxArray = s.split("/")
        return auxArray[auxArray.length - 1]
    } else {
        var errorMessage = "[" + method + "] variable is not defined"
        core.setFailed(errorMessage)
        return
    }
}

function isValidUrl(url) {
    return url && typeof url === "string" && url.length > 0 && url.startsWith("https://")
}

function isValidString(s) {
    return s && typeof s === "string" && s.length > 0
}

function isValidInt(int) {
    return int && parseInt(int) >= 0
}

function isBoolean(bool) {
    return bool === true || bool === false
}

function isValidTeam(team) {
    return isValidString(team) && team.startsWith("\\") && !team.endsWith("\\")
}

function isValidFilename(filename) {
    return isValidString(filename) && filename.indexOf("/") == -1 && filename.indexOf("\\") == -1
}

function isValidVersion(version) {
    return isValidString(version) && (
        version == "8.9" || version == "8.9.0" ||
        version == "8.8" || version == "8.8.0" ||
        version == "8.7" || version == "8.7.0" ||
        version == "8.6" || version == "8.6.0"
    )
}

module.exports = {
    getLastString: getLastString,
    isValidUrl: isValidUrl,
    isValidString: isValidString,
    isValidInt: isValidInt,
    isBoolean: isBoolean,
    isValidTeam: isValidTeam,
    isValidFilename: isValidFilename,
    isValidVersion: isValidVersion
}