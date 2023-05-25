<template>
    <button>{{ buttonText }}</button>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
        buttonText: String,
    }
}
</script>

<style>
button {
    padding: 0.3rem 0.5rem;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 5px;
}

button:hover {
    cursor: pointer;
    background-color: #e6e6e6;
    border-color: #adadad;
}
</style>