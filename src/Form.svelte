<script>
    export let onSubmit;

    import { slide } from 'svelte/transition';

    let descriptionInput = "";

    const handleChange = e => {
        const { target: { value } } = e;

        descriptionInput = value;
    };

    const handleSubmit = () => {
        if(descriptionInput.trim().length > 0){
            onSubmit(descriptionInput);
            descriptionInput = "";
        }
    };
</script>

<form
    on:submit|preventDefault|stopPropagation={handleSubmit}
    class="px-4 w-full"
    transition:slide
>
    <input
        class="border-solid border-b-2 border-violet w-full"
        type="text"
        name="description"
        value={descriptionInput}
        on:change={handleChange}
        placeholder="Add new item"
    />
</form>