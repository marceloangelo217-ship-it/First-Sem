
const nameInput = document.getElementById('studentName');
    const emailInput = document.getElementById('studentEmail');
    const programSelect = document.getElementById('studentProgram');
    const addBtn = document.getElementById('addBtn');
    const tableBody = document.getElementById('studentTableBody');
    const search = document.getElementById('search');

  
    let students = []
      
    
    function renderTable(data = students) {
      tableBody.innerHTML = '';
      data.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.program}</td>
          <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
      });
    }

   
    addBtn.addEventListener('click', () => {
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const program = programSelect.value;

      if (!name || !email || !program) {
        alert('Please fill out all fields and select a program!');
        return;
      }

      students.push({ name, email, program });
      renderTable();

      
      nameInput.value = '';
      emailInput.value = '';
      programSelect.selectedIndex = 0;
    });

   
    function deleteStudent(index) {
      students.splice(index, 1);
      renderTable();
    }

   
    function runSearch() {
      const query = search.value.trim().toLowerCase();
      const matches = students.filter(student => 
        student.name.toLowerCase().includes(query) ||
        student.program.toLowerCase().includes(query)
      );
      renderTable(matches);
    }


    search.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        runSearch();
      }
    });

    
    renderTable();