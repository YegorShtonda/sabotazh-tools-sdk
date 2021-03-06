const axios = require('axios');

module.exports = async (ctx) => {
    try {
        const userAgents = await axios.get(`${ctx.domain}/user-agents?token=${ctx.token}`);
        return userAgents.data;
    } catch (err) {
        ctx.throwResponseError(err.response);
        return null;
    }
}