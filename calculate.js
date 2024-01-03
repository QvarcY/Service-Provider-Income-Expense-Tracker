
        // Aprēķinu funkcijas
        function calculateTotal() {
            let totalIncome = 0;
            let totalExpense = 0;
            let profit = 0;
            const incomeInput = document.getElementsByName("income");
            const expenseInput = document.getElementsByName("expense");
            const incomeTotal = document.getElementById("totalIncome");
            const expenseTotal = document.getElementById("totalExpense");
            const profitTotal = document.getElementById("profit");

            for (let i = 0; i < incomeInput.length; i++) {
                totalIncome += parseFloat(incomeInput[i].value) || 0;
            }

            for (let i = 0; i < expenseInput.length; i++) {
                totalExpense += parseFloat(expenseInput[i
                ].value) || 0;
            }
            profit = totalIncome - totalExpense;

            incomeTotal.innerHTML = totalIncome.toFixed(2) + " €";
            expenseTotal.innerHTML = totalExpense.toFixed(2) + " €";
            profitTotal.innerHTML = profit.toFixed(2) + " €";


        }


