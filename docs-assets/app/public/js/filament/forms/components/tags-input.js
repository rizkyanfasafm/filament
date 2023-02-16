function tagsInputFormComponent({ state }) {
    return {
        newTag: '',
        state,
        createTag: function () {
            if (((this.newTag = this.newTag.trim()), this.newTag !== '')) {
                if (this.state.includes(this.newTag)) {
                    this.newTag = ''
                    return
                }
                this.state.push(this.newTag), (this.newTag = '')
            }
        },
        deleteTag: function (tagToDelete) {
            this.state = this.state.filter((tag) => tag !== tagToDelete)
        },
    }
}
export { tagsInputFormComponent as default }