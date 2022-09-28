<template>
  <base-dialog
    v-if="isInputInvalid"
    title="Invalid Input"
    @close="confirmError"
  >
    <template v-slot:default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>
        Please check all inputs and make sure you enter at least a few
        characters into each input field.
      </p>
    </template>
    <template #actions>
      <base-button v-on:click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form v-on:submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input v-model="inputTitle" type="text" id="title" name="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          v-model="inputDescription"
          name="description"
          id="description"
          rows="3"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input v-model="inputLink" type="url" id="link" name="link" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      inputTitle: '',
      inputDescription: '',
      inputLink: '',
      isInputInvalid: false,
    };
  },
  methods: {
    submitData() {
      if (
        this.inputTitle.trim() === '' ||
        this.inputDescription.trim() === '' ||
        this.inputLink.trim() === ''
      ) {
        this.isInputInvalid = true;
        return;
      }
      this.addResource({
        id: this.inputTitle,
        title: this.inputTitle,
        description: this.inputDescription,
        link: this.inputLink,
      });
    },
    confirmError() {
      this.isInputInvalid = false;
    },
  },
  inject: ['addResource'],
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
