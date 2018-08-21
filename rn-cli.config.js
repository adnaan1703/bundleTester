module.exports = {
    getPlatforms() {
        return ['custom'];
    },
    getReporter() {
        return {
            update: function () {
                console.log('please console this');
            }
        }
    }
};