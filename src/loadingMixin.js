export const loadingMixin = {
  data() {
    return {
      saveButtonClicked: false,
    }
  },
  computed: {
    isLoading() {
      if (this.saveButtonClicked) {
        return {
          display: "block",
        }
      } else {
        return {
          display: "none",
        }
      }
    },
  }
}
