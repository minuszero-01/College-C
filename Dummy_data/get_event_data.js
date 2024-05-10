function get_Events() {
    const events = [];
    const eventNames = ["Coding Event", "Coding Seminar", "Hackathon", "GCP Cloud Event", "AeroSpace Activity"];
    const clubNames = ["AWS Cloud Club", "CyberSecurity and BlockChain Club", "IDEATE Club", "Google Developer Student Club", "AeroSpace Club"];
    const coordinators = ["Sankalp P.", "Sahil Bugade", "Garvin C.", "Ronit Virawani", " Unknown "];
    const registerButtons = ["Webite / Link", "Webite / Link", "Webite / Link", "Webite / Link", "Webite / Link"];

    for (let i = 0; i < eventNames.length; i++) {
        events.push({
            eventName: eventNames[i],
            clubName: clubNames[i],
            coordinator: coordinators[i],
            registerButton: registerButtons[i]
        });
    }
    return events;
}
module.exports = get_Events;
