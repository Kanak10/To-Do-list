exports.getDate  = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const day = "";

    const option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", option);
}

exports.getDay = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const day = "";

    const option = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-US", option);
}