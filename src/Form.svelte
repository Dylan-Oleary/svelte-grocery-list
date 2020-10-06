<script>
    export let onSubmit;

    let descriptionInput = "";

    const handleChange = (e) => {
        const {
            target: { value }
        } = e;

        descriptionInput = value;
    };

    const handleSubmit = () => {
        if (descriptionInput.trim().length > 0) {
            onSubmit(descriptionInput);
            descriptionInput = "";
        }
    };
</script>

<div
    class="flex flex-grow border-solid border-2 border-gray-400 border-l-0 border-r-0 border-b-0 bg-purple-400"
>
    <form
        on:submit|preventDefault|stopPropagation="{handleSubmit}"
        class="flex flex-grow w-full p-4 pr-8 ml-8 bg-white"
    >
        <input
            class="w-full bg-transparent outline-none"
            type="text"
            name="description"
            value="{descriptionInput}"
            on:change="{handleChange}"
            placeholder="What do you need?"
        />
    </form>
</div>
