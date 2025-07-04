 let income = 0;
    let expense = 0;

    function addTransaction() {
      const desc = document.getElementById("desc").value.trim();
      const amt = parseFloat(document.getElementById("amount").value);
      const type = document.getElementById("type").value;

      if (!desc || isNaN(amt) || amt <= 0) {
        alert("Please enter valid description and amount.");
        return;
      }

      const list = document.getElementById("transaction-list");

      const li = document.createElement("li");
      li.className = type;
      li.innerHTML = `
        ${desc}: ₹${amt}
        <button class="delete-btn" onclick="deleteTransaction(this, ${amt}, '${type}')">×</button>
      `;

      list.appendChild(li);

      if (type === "income") {
        income += amt;
      } else {
        expense += amt;
      }

      updateSummary();

      // Clear inputs
      document.getElementById("desc").value = "";
      document.getElementById("amount").value = "";
    }

    function deleteTransaction(button, amt, type) {
      const li = button.parentElement;
      li.remove();

      if (type === "income") {
        income -= amt;
      } else {
        expense -= amt;
      }

      updateSummary();
    }

    function updateSummary() {
      document.getElementById("total-income").textContent = income;
      document.getElementById("total-expense").textContent = expense;
      document.getElementById("balance").textContent = income - expense;
    }