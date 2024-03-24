<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Multi-Select Search</title>
<style>
    /* Basic styling for demonstration purposes */
    .container {
        width: 300px;
        margin: 50px auto;
    }
    input[type="text"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
    }
    select {
        width: 100%;
        height: 150px;
        padding: 10px;
        box-sizing: border-box;
        multiple: true;
    }
</style>
</head>
<body>

<div class="container">
    <input type="text" id="searchInput" placeholder="Search...">
    <select id="multiSelect" multiple>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
        <option value="date">Date</option>
        <option value="grape">Grape</option>
        <option value="kiwi">Kiwi</option>
        <option value="orange">Orange</option>
        <option value="peach">Peach</option>
        <option value="pear">Pear</option>
        <option value="strawberry">Strawberry</option>
    </select>
</div>

<script>
    // Get the input field and select element
    const searchInput = document.getElementById('searchInput');
    const multiSelect = document.getElementById('multiSelect');
    
    // Add event listener to input field
    searchInput.addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        const options = multiSelect.getElementsByTagName('option');
        
        // Loop through each option and hide/show based on search value
        for (let i = 0; i < options.length; i++) {
            const optionText = options[i].innerText.toLowerCase();
            if (optionText.includes(searchValue)) {
                options[i].style.display = 'block';
            } else {
                options[i].style.display = 'none';
            }
        }
    });
</script>

</body>
</html>
