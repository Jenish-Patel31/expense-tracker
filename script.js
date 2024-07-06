const expenseForm = document.getElementById('expenseForm');

const expenseList = document.getElementById('expenseList');




expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    // alert(`${description}`);
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;



    if (description && category && !isNaN(amount)) {

        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${description}</td>
        <td>${category} </td>
        <td>${amount} </td>
        <td><span class="delete-button">Delete</span></td>`;
        expenseList.appendChild(newRow);

        document.getElementById('description').value = "";
        document.getElementById('category').value = "";
        document.getElementById('amount').value = "";

    }
    else {
        alert("Please Enter valid Inputs... ")
    }


    expenseList.addEventListener('click',function(e){
        if(e.target.classList.contains('delete-button'))
        {
            const row = e.target.closest('tr');
            expenseList.removeChild(row);
        }
    })

})