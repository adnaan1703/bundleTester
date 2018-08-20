module.exports = {
    watch: false,
    resetCache: true,
    createModuleIdFactory: () => (path) => {
        let hash = 0, i, chr, len;
        if (this.length === 0) return hash;
        for (i = 0, len = path.length; i < len; i++) {
            chr = path.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        console.log(hash);
        return hash;
    },
    reporter: {
        update: () => {
            console.log('please log this, please!')
        }
    }
};
